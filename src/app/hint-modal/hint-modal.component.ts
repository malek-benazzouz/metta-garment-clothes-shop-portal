import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HintModalService } from './hint-modal.service';

@Component({
  selector: 'app-hint-modal',
  templateUrl: './hint-modal.component.html',
  styleUrls: ['./hint-modal.component.scss']
})
export class HintModalComponent implements OnInit {

  @ViewChild('hint') hintModal: TemplateRef<any>;

  constructor(private modalService: NgbModal, private hintModalService: HintModalService) {}

  ngOnInit(): void {
    // Only display for viewport md and smaller (definition of viewports in variables.scss file)
    if (window.innerWidth < 992) {
      setTimeout(() => {
        if (this.hintModalService.shouldDisplayHint()) {
          this.openHintModal();
          this.hintModalService.hintWasDisplayed();
        }
      }, 1000);
    }
  }

  openHintModal(): void {
    this.modalService.open(this.hintModal, {
      centered: true,
      backdropClass: 'hint-modal-overlay',
      modalDialogClass: 'hint-modal'
    });
  }

}
