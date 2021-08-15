import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss']
})
export class DotComponent implements OnInit, OnDestroy {

  @Output() toggleDot = new EventEmitter<boolean>(); // True if expanded, false if collapsed

  subscription = new Subscription();

  isDotExpanded = false;
  dotColor = 'rgb(10,10,0)';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // The closer the mouse gets to the dot, the lighter the dot becomes
    this.subscription.add(
      fromEvent(document, 'mousemove')
        .pipe(throttleTime(25))
        .subscribe(event => {
          const xMouse = (event as MouseEvent).clientX;
          const yMouse = (event as MouseEvent).clientY;
          const xDot = this.el.nativeElement.offsetLeft + 7; // Add 7px to target the dot central pixel.
          const yDot = this.el.nativeElement.offsetTop + 7; // Add 7px to target the dot central pixel.
          const mouseDotDistance = Math.hypot(xMouse - xDot, yMouse - yDot);
          const red = Math.min(220, Math.floor(220 * (40 / mouseDotDistance) + 80)); // TODO find the right formula (percentage?)
          const green = Math.min(206, Math.floor(206 * (40 / mouseDotDistance) + 70));
          const blue = Math.min(135, Math.floor(135 * (40 / mouseDotDistance) + 50));
          this.dotColor = `rgb(${red}, ${green}, ${blue})`;
        })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDotClick(): void {
    this.isDotExpanded = !this.isDotExpanded;
    this.toggleDot.emit(this.isDotExpanded);
  }

}
