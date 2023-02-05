import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-dot-toggle',
  templateUrl: './dot-toggle.component.html',
  styleUrls: ['./dot-toggle.component.scss']
})
export class DotToggleComponent implements OnInit, OnDestroy {

  @Output() toggleDot = new EventEmitter<void>();

  subscription = new Subscription();

  dotColor = 'rgb(10,10,0)';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // The closer the mouse gets to the dot, the lighter the dot becomes
    this.subscription.add(
      fromEvent(document, 'mousemove')
        .pipe(
          throttleTime(25),
          // Do not apply the effect to touch events
          filter(event => (event as any).sourceCapabilities?.firesTouchEvents === false)
        )
        .subscribe(event => {
          const xMouse = (event as MouseEvent).clientX;
          const yMouse = (event as MouseEvent).clientY;
          const xDot = this.el.nativeElement.offsetLeft + 7; // Add 7px to target the dot central pixel.
          const yDot = this.el.nativeElement.offsetTop + 7; // Add 7px to target the dot central pixel.
          const mouseDotDistance = Math.hypot(xMouse - xDot, yMouse - yDot);
          const tooFarWeight = mouseDotDistance > 500 ? 1 : 0;
          const red = Math.min(220, Math.floor(220 * (120 / mouseDotDistance) + 80) - 40 * tooFarWeight);
          const green = Math.min(206, Math.floor(206 * (120 / mouseDotDistance) + 70) - 40 * tooFarWeight);
          const blue = Math.min(135, Math.floor(135 * (120 / mouseDotDistance) + 50) - 40 * tooFarWeight);
          this.dotColor = `rgb(${red}, ${green}, ${blue})`;
        })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDotClick(): void {
    this.toggleDot.emit();
  }

}
