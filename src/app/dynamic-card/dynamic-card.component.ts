import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-card',
  standalone: false,
  templateUrl: './dynamic-card.component.html',
  styleUrl: './dynamic-card.component.scss'
})
export class DynamicCardComponent {
  @Input() content: string = 'Default dynamic content';
}
