import { Component, OnInit } from '@angular/core';
import { droppingLeafAnimation } from '../animations/dropping-leaf.animation';

/**
 * TODO coming soon mode:
 * - add more animations? (e.g. form fade after submit, leaf blinks after drop, form input highlight before submit)
 * -
 */

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],
  animations: [
    droppingLeafAnimation
  ]
})
export class ComingSoonComponent implements OnInit {

  shouldDisplayForm = true;
  isLeafDropping = false;

  constructor() {}

  ngOnInit(): void {}

  onFormSubmitSuccess(): void {
    this.shouldDisplayForm = false;
    setTimeout(() => {
      // Start animation
      this.isLeafDropping = true;
      this.playWindSound(1, 1200);
      this.playWindSound(0.5, 3000);
      this.playWindSound(0.3, 4800);
    });
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
