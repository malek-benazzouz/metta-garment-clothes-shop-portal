import { Component, OnInit } from '@angular/core';
import { droppingLeafAnimation } from '../animations/dropping-leaf.animation';
import { fadeInQuoteAnimation } from '../animations/fade-in-quote.animation';
import { ResizedEvent } from 'angular-resize-event';

/**
 * TODO coming soon mode:
 *
 * Priority 1:
 * -
 *
 * Priority 2:
 * - add more animations? (e.g. form fade after submit, leaf blinks after drop, form input highlight before submit)
 *
 * Before production:
 * - Switch to Production mode in NewsletterService
 */

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],
  animations: [
    droppingLeafAnimation,
    fadeInQuoteAnimation
  ]
})
export class ComingSoonComponent implements OnInit {

  shouldDisplayForm = true;
  isLeafDropping = false;

  leafYFromBottom = 630;
  leafXFromCenter = 40;

  constructor() {}

  ngOnInit(): void {}

  onFormSubmitSuccess(): void {
    this.shouldDisplayForm = false;
    setTimeout(() => {
      // Start animation
      this.isLeafDropping = true;
    });
  }

  onTreeResize(event: ResizedEvent): void {
    if (event.newRect.width < 542) { // If smaller than original width
      this.leafXFromCenter = Math.floor(0.07 * event.newRect.width);
    }
    if (event.newRect.height < 702) { // If smaller than original height
      this.leafYFromBottom = Math.floor(0.90 * event.newRect.height);
    }
  }

  playWindSound(volume: number = 1, delayInMs: number = 0): void {
    setTimeout(() => {
      let audio = new Audio();
      audio.src = "../../assets/coming-soon/wind-sound.wav";
      audio.load();
      audio.volume = volume;
      void audio.play();
    }, delayInMs);
  }

}
