import {
  Directive,
  Input,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appWrapInDiv]',
  standalone: false,
})
export class WrapInDivDirective {
  wrapperDiv: HTMLElement | null = null;
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private renderer: Renderer2
  ) {}

  @Input() set appWrapInDiv(condition: boolean) {
    this.viewContainer.clear();
    if (condition) {
      const embeddedView = this.viewContainer.createEmbeddedView(this.templateRef);
      // Create a div element and add a class
      this.wrapperDiv = this.renderer.createElement('div');
      this.renderer.addClass(this.wrapperDiv, 'new-class');

      //wrap the element with wrapperdiv
      embeddedView.rootNodes.forEach((node) => {
        this.renderer.appendChild(this.wrapperDiv, node);
      });

      // insert the wrapperdiv and element into DOM
      this.viewContainer.element.nativeElement.parentNode.insertBefore(
        this.wrapperDiv,
        this.viewContainer.element.nativeElement
      );
    } else {
      if (this.wrapperDiv) {
        this.renderer.removeChild(
          this.viewContainer.element.nativeElement.parentNode,
          this.wrapperDiv
        );
        this.wrapperDiv = null;
      }
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
