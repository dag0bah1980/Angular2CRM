import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[ang2CrmRemoveInvalidRenderer]'
})
export class RemoveInvalidRendererDirective {

  private nativeElement : Node;

  constructor(private _renderer : Renderer2, private _element : ElementRef ) {
    this.nativeElement = _element.nativeElement;
    this._renderer.removeClass ( _element.nativeElement, 'ng-invalid');
  }

}
