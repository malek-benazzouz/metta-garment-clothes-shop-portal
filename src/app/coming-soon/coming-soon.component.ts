import { Component, OnInit } from '@angular/core';
import { droppingLeafAnimation } from '../animations/dropping-leaf.animation';

/**
 * TODO coming soon mode:
 *
 * Priority 1:
 * - on mobile, sun and moon overlap the door
 * - on mobile, on form input focus, background bug
 * - on mobile, white line on top
 * - on mobile, the leaf starts dropping above the tree
 * - on mobile, landscape view is messed up
 * - averroes quote should progressively fade in during the whole animation (10s animation)
 * - animation: more slowly, but less pauses
 *
 * Priority 2:
 * - add more animations? (e.g. form fade after submit, leaf blinks after drop, form input highlight before submit)
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
