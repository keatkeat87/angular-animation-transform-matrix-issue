import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
