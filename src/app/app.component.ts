import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <button (click)="scaleState.set('scale-up')">scale up</button>
    <button (click)="scaleState.set('scale-down')">scale down</button>
    <h1 [@scale]="scaleState()">Hello World</h1>
  `,
  styles: `
    h1 {
      margin-top: 64px;
      width: max-content;
    }
  `,
  animations: [
    trigger('scale', [
      state('scale-up', style({ transform: 'scale(5)' })),
      state('scale-down', style({ transform: 'scale(0)' })),
      transition('* <=> *', animate('5s ease'))
    ])
  ]
})
export class AppComponent {
  scaleState = signal<'scale-up' | 'scale-down'>('scale-down');
}
