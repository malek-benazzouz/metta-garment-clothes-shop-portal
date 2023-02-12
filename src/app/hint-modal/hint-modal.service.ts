import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HintModalService {

  constructor() {}

  public hintWasDisplayed(): void {
    // Set as displayed in session storage
    sessionStorage.setItem('metta_leafHintDisplayed', 'yes');
    // Increment display count in local storage
    const displayCount = parseInt(localStorage.getItem('metta_leafHintDisplayCount') || '0');
    localStorage.setItem('metta_leafHintDisplayCount', (displayCount + 1).toString());
  }

  public shouldDisplayHint(): boolean {
    // Display hint if:
    // - Not already displayed during session
    // - Not already displayed 3 times for the current device
    const displayedDuringSession = sessionStorage.getItem('metta_leafHintDisplayed') === 'yes';
    const displayed3TimesForDevice = localStorage.getItem('metta_leafHintDisplayCount') === '3';
    return !displayedDuringSession && !displayed3TimesForDevice;
  }
}
