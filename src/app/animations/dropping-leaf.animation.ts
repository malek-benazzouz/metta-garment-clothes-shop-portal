import { animate, group, keyframes, query, state, style, transition, trigger } from '@angular/animations';

export const droppingLeafAnimation = trigger('droppingLeaf', [
  state('top', style({})),
  state('bottom', style({ transform: 'translateY(545px)' })),
  transition('top => bottom', [
    // Run animations in parallel
    group([
      // X axis movement
      animate(
        '9s 0s',
        keyframes([
          style({ offset: 0.00, 'transform-origin': 'top left', transform: 'translate3d(0, 0, 0)', easing: 'ease-in-out' }),
          style({ offset: 0.05, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out' }),
          style({ offset: 0.10, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', easing: 'ease-in-out' }),
          style({ offset: 0.15, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out' }),
          style({ offset: 0.20, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', easing: 'ease-in-out' }),
          style({ offset: 0.38, transform: 'translateX(80px)', easing: 'ease' }),
          style({ offset: 0.40, transform: 'translateX(80px)', easing: 'ease-in-out' }),
          style({ offset: 0.58, transform: 'translateX(-120px)', easing: 'ease' }),
          style({ offset: 0.60, transform: 'translateX(-120px)', easing: 'ease-in-out' }),
          style({ offset: 0.78, transform: 'translateX(130px)', easing: 'ease' }),
          style({ offset: 0.80, transform: 'translateX(130px)', easing: 'ease-in-out' }),
          style({ offset: 0.98, transform: 'translateX(0px)', easing: 'ease' }),
          style({ offset: 1.00, transform: 'translateX(0px)', easing: 'ease-in-out' })
        ])
      ),
      // Y axis movement
      query('.dropping-leaf-img', animate(
        '9s 0s',
        keyframes([
          style({ offset: 0.00, transform: 'translateY(0px)', easing: 'ease-in-out' }),
          style({ offset: 0.20, transform: 'translateY(0px)', easing: 'ease-out' }),
          style({ offset: 0.30, transform: 'translateY(150px)', easing: 'cubic-bezier(0.33, 1, 0.68, 1)' }),
          style({ offset: 0.40, transform: 'translateY(145px)', easing: 'ease-out' }),
          style({ offset: 0.50, transform: 'translateY(300px)', easing: 'cubic-bezier(0.33, 1, 0.68, 1)' }),
          style({ offset: 0.60, transform: 'translateY(295px)', easing: 'ease-out' }),
          style({ offset: 0.70, transform: 'translateY(430px)', easing: 'cubic-bezier(0.33, 1, 0.68, 1)' }),
          style({ offset: 0.80, transform: 'translateY(425px)', easing: 'ease-out' }),
          style({ offset: 0.90, transform: 'translateY(545px)', easing: 'cubic-bezier(0.33, 1, 0.68, 1)' }),
          style({ offset: 1.00, transform: 'translateY(545px)', easing: 'ease-out' })
        ])
      )),
    ])
  ])
]);
