import { animate, group, keyframes, query, state, style, transition, trigger } from '@angular/animations';

export const droppingLeafAnimation = trigger('droppingLeaf', [
  state('top', style({})),
  state('bottom', style({ transform: 'translateY(650px)' })),
  transition('top => bottom', [
    group([
      animate(
        '10s 0s',
        keyframes([
          style({ offset: 0.00, 'transform-origin': 'top left', transform: 'translate3d(0, 0, 0)', easing: 'ease-in-out' }),
          style({ offset: 0.05, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out' }),
          style({ offset: 0.10, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', easing: 'ease-in-out' }),
          style({ offset: 0.15, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out' }),
          style({ offset: 0.20, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', easing: 'ease-in-out' }),
          style({ offset: 0.30, transform: 'translateX(200px)', easing: 'ease' }),
          style({ offset: 0.40, transform: 'translateX(-200px)', easing: 'ease' }),
          style({ offset: 0.50, transform: 'translateX(200px)', easing: 'ease' }),
          style({ offset: 0.60, transform: 'translateX(-200px)', easing: 'ease' }),
          style({ offset: 0.70, transform: 'translateX(200px)', easing: 'ease' }),
          style({ offset: 0.80, transform: 'translateX(-200px)', easing: 'ease' }),
          style({ offset: 0.90, transform: 'translateX(200px)', easing: 'ease' }),
          style({ offset: 1.00, transform: 'translateX(-10px)', easing: 'ease' })
        ])
      ),
      query('img', animate(
        '10s 0s',
        keyframes([
          style({ offset: 0.00, transform: 'translateY(0px)', easing: 'ease-in-out' }),
          style({ offset: 0.20, transform: 'translateY(0px)', easing: 'ease-out' }),
          style({ offset: 0.30, transform: 'translateY(100px)', easing: 'ease-out' }),
          style({ offset: 0.40, transform: 'translateY(180px)', easing: 'ease-out' }),
          style({ offset: 0.50, transform: 'translateY(280px)', easing: 'ease-out' }),
          style({ offset: 0.60, transform: 'translateY(380px)', easing: 'ease-out' }),
          style({ offset: 0.70, transform: 'translateY(500px)', easing: 'ease-out' }),
          style({ offset: 0.80, transform: 'translateY(600px)', easing: 'ease-out' }),
          style({ offset: 0.90, transform: 'translateY(635px)', easing: 'ease-out' }),
          style({ offset: 1.00, transform: 'translateY(650px)', easing: 'ease-out' })
        ])
      )),
    ])
  ])
]);
