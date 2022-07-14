import {
  Directive,
  ElementRef,
  Host,
  Input,
  OnDestroy,
  Optional,
  Renderer2,
} from '@angular/core';
import { buildValueString } from '../utils/build-value-string';
import { CwcOptionGroupControlValueAccessorDirective } from './cwc-option-group-control-value-accessor.directive';

@Directive({
  selector: 'cwc-radio, cwc-picker > option, [cwcOptionControl]',
  host: { '(cwcBlur)': 'onTouched()' },
})
export class CwcOptionControlDirective implements OnDestroy {
  private _id!: string;

  constructor(
    @Optional()
    @Host()
    private _control: CwcOptionGroupControlValueAccessorDirective<any>,
    private _renderer: Renderer2,
    private _elementRef: ElementRef
  ) {
    if (this._control) {
      this._id = this._control.registerOption(this);
    }
  }

  public onTouched(): void {
    this._control.onTouched();
  }

  private _value: any;
  @Input('value')
  public set value(value: any) {
    if (this._control) {
      this.cwcValue = value;
    } else {
      this.setProperty('value', value);
    }
  }

  public get value() {
    return this._value;
  }

  @Input('cwcValue')
  public set cwcValue(value: any) {
    if (this._control == null) {
      return;
    }

    this._value = value;
    this.setProperty('value', buildValueString(this._id, value));
    this._control.writeValue(this._control.value);
  }

  public setSelected(isSelected: boolean) {
    const action = isSelected ? 'setAttribute' : 'removeAttribute';
    this._renderer[action](
      this._elementRef.nativeElement,
      'selected',
      `${isSelected}`
    );
  }

  protected setProperty(key: string, value: any): void {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }

  ngOnDestroy(): void {
    if (this._control) {
      this._control.optionMap.delete(this._id);
      this._control.writeValue(this._control.value);
    }
  }
}
