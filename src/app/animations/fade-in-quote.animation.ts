import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const fadeInQuoteAnimation = trigger('fadeInQuote', [
  state('hidden', style({ opacity: 0 })),
  state('shown', style({ opacity: 1 })),
  transition('hidden => shown', [
    animate(
      '17s 0s',
      keyframes([
        style({ offset: 0.00, opacity: 0 }),
        style({ offset: 0.75, opacity: 0.5 }),
        style({ offset: 1.00, opacity: 1 })
      ])
    )
  ])
]);
