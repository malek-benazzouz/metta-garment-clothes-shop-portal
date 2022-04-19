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
    setTimeout(() => this.isLeafDropping = true);
  }

}
