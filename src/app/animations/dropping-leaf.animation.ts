import { animate, group, keyframes, query, state, style, transition, trigger } from '@angular/animations';

export const droppingLeafAnimation = trigger('droppingLeaf', [
  state('top', style({})),
  state('bottom', style({ transform: 'translateY(545px)' })),
  transition('top => bottom', [
    // Run animations in parallel
    group([
      // Flickering leaf before dropping
      query('.dropping-leaf-img', animate(
        '3s 0s',
        keyframes([
          style({ offset: 0.00, 'transform-origin': 'top left', transform: 'translate3d(0, 0, 0)' }),
          style({ offset: 0.33, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out' }),
          style({ offset: 0.66, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 50deg)', easing: 'ease-in-out' }),
          style({ offset: 1.00, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out' }),
        ])
      )),
      // Y axis movement while dropping
      query('.dropping-leaf-img', animate(
        '12s 3.001s',
        keyframes([
          style({ offset: 0.00, transform: 'rotate3d(0, 0, 1, 80deg)' }),
          style({ offset: 0.20, transform: 'translateY(180px)', easing: 'ease-in-out' }),
          style({ offset: 0.50, transform: 'translateY(300px)', easing: 'ease-in-out' }),
          style({ offset: 0.75, transform: 'translateY(430px)', easing: 'ease-in-out' }),
          style({ offset: 1.00, transform: 'translateY(545px)', easing: 'ease-in-out' })
        ])
      )),
      // Rotating movement while dropping
      animate(
        '12s 3.001s',
        keyframes([
          style({ offset: 0.00, transform: 'rotate(0)' }),
          style({ offset: 0.20, transform: 'rotate(-45deg)', easing: 'ease-in-out' }),
          style({ offset: 0.50, transform: 'rotate(30deg)', easing: 'ease-in-out' }),
          style({ offset: 0.75, transform: 'rotate(-25deg)', easing: 'ease-in-out' }),
          style({ offset: 1.00, transform: 'rotate(0)', easing: 'ease-in-out' })
        ])
      )
    ])
  ])
]);
