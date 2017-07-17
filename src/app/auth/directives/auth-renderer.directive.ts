import { Directive, Renderer2, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ang2CrmAuthRenderer]'
})
export class AuthRendererDirective {

  private nativeElement : Node;
  
  @Input() className: string;
  //@Input() AddOrRemove: string;
  
  constructor( private _renderer : Renderer2, private _element : ElementRef ) {
    this.nativeElement = _element.nativeElement;
    //this._renderer.listen("body", "click", () => console.log("Global event"));
    //this._renderer.addClass ( _element.nativeElement, 'blah');
    this.addInvalidClass(this.className);

  }

  private addInvalidClass( ClassName: string ) {
    this._renderer.addClass ( this._element.nativeElement, 'ng-invalid');
  }

  private removeAClass( ClassName: string ) {
    this._renderer.removeClass ( this._element.nativeElement, ClassName);
  }
}
