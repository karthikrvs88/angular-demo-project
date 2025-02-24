import { Component } from '@angular/core';

@Component({
  selector: 'lib-custom-lib',
  imports: [],
  template: `
    <div class="card block mt-5">
      <div class="card-header">Custom Library Component</div>
      <div class="card-body">
        <p>{{ greeting }}</p>
      </div>
    </div>
  `,
  styles: ``
})
export class CustomLibComponent {
  greeting: string = 'Hello from CustomLib (standalone)!';
}
