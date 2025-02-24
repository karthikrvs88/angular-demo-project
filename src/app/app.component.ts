import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicCardComponent } from './dynamic-card/dynamic-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-demo-project';
}
