import { Component, OnInit } from '@angular/core';
import { droppingLeafAnimation } from '../animations/dropping-leaf.animation';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],
  animations: [
    droppingLeafAnimation
  ]
})
export class ComingSoonComponent implements OnInit {

  // TODO add animations (make form fade once submitted?)

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
