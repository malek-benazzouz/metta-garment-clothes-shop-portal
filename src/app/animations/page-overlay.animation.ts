import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const pageOverlayAnimation = trigger('showPageOverlay', [
  state('hide', style({ opacity: 0, height: 0 })),
  state('show', style({ opacity: 0.8, height: 'calc(100vh - 85px)' })),
  transition('hide => show', [
    animate(
      '250ms',
      keyframes([
        style({ offset: 0.00, opacity: 0, height: 0 }),
        style({ offset: 0.01, opacity: 0, height: 'calc(100vh - 85px)' }),
        style({ offset: 1.00, opacity: 0.8, height: 'calc(100vh - 85px)' })
      ])
    )
  ]),
  transition('show => hide', [
    animate(
      '250ms',
      keyframes([
        style({ offset: 0.00, opacity: 0.8, height: 'calc(100vh - 85px)' }),
        style({ offset: 0.99, opacity: 0, height: 'calc(100vh - 85px)' }),
        style({ offset: 1.00, opacity: 0, height: '0' })
      ])
    )
  ])
]);
