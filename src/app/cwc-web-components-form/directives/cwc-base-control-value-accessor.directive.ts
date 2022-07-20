import {
  Directive,
  ElementRef,
  Optional,
  Renderer2,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

// @NOTE: Omit is type of Typescript 3.5.* above
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

@Directive({
  selector: '[cwcBaseControlValueAccessor]',
})
export class CwcBaseControlValueAccessorDirective
  implements Omit<ControlValueAccessor, 'writeValue'>
{
  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef,
    @Optional() @Self() public ngControl: NgControl
  ) {
    if (this.ngControl != null) {
      // WriteValue is defined in extended ControlValueAccessor
      (this.ngControl.valueAccessor as Omit<
        ControlValueAccessor,
        'writeValue'
      >) = this;
    }
  }

  public onChange = (_: any) => {};
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public onTouched = () => {};
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.setProperty('disabled', isDisabled);
  }

  protected setProperty(key: string, value: any): void {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }

  protected getShadowElement<E = any>(): E {
    return this._elementRef.nativeElement;
  }
}
