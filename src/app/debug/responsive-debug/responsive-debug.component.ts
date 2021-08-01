import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-responsive-debug',
  templateUrl: './responsive-debug.component.html'
})
export class ResponsiveDebugComponent {
  @Input() debugMode = false;
}
