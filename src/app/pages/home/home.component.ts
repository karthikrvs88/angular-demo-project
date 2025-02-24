import { Component, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  wrapDiv:boolean = false;
  number = 12345678;
  
  enableDirective(){
    this.wrapDiv = !this.wrapDiv;
  }

   async addCard() {
    this.container.clear();
    const { DynamicCardComponent } = await import('../../dynamic-card/dynamic-card.component');
    const componentRef = this.container.createComponent(DynamicCardComponent);
    componentRef.instance.content = 'This card was added dynamically!';
  }

}
