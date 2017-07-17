import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[ang2CrmAddInvalidRenderer]'
})
export class AddInvalidRendererDirective {

  private nativeElement : Node;

  constructor(private _renderer : Renderer2, private _element : ElementRef ) {
    this.nativeElement = _element.nativeElement;
    this._renderer.addClass ( _element.nativeElement, 'ng-invalid');
  }

}
