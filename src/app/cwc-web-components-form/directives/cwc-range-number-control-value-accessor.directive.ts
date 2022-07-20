import { Directive, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CwcNumericFilter } from '@cmx-web-components/angular';
import { coerceNumberProperty } from '../utils/coerce-number-property';
import { CwcBaseControlValueAccessorDirective } from './cwc-base-control-value-accessor.directive';

@Directive({
  selector: 'cwc-numeric-filter, [cwcRangeNumberControlValueAccessor]',
  host: {
    '(cwcChange)': 'onChange($event.detail)',
    '(cwcBlur)': 'onTouched()',
  },
})
export class CwcRangeNumberControlValueAccessorDirective
  extends CwcBaseControlValueAccessorDirective
  implements ControlValueAccessor
{
  @Input()
  set value(value: number[] | string[]) {
    this.writeValue(value.map((v) => coerceNumberProperty(v)));
  }

  @HostBinding('attr.upper-value')
  private _upperValue!: number;

  @Input('upperValue')
  public set upperValue(upperVal: number | string) {
    this._upperValue = coerceNumberProperty(upperVal);

    this.updateValues();
  }

  @HostBinding('attr.lower-value')
  private _lowerValue!: number;

  @Input('lowerValue')
  public set lowerValue(lowerVal: number | string) {
    this._lowerValue = coerceNumberProperty(lowerVal);

    this.updateValues();
  }

  public writeValue(value: number[]): void {
    this.lowerValue = value[0];
    this.upperValue = value[1];

    this.updateValues();
  }

  protected updateValues() {
    this.getShadowElement<CwcNumericFilter>().setValues(
      this._lowerValue,
      this._upperValue
    );
  }
}
