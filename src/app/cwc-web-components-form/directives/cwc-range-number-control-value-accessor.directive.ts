import { Directive, HostBinding } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CwcNumericFilter } from '@cmx-web-components/angular';
import { coerceNumberProperty } from '../utils/coerce-number-property';
import { CwcBaseControlValueAccessorDirective } from './cwc-base-control-value-accessor.directive';

@Directive({
  selector: `
    cwc-numeric-filter[formControlName],
    cwc-numeric-filter[formControl],
    cwc-numeric-filter[ngModel],
    [cwcRangeNumberControlValueAccessor]`,
  host: {
    '(cwcChange)': 'onChange($event.detail)',
    '(cwcBlur)': 'onTouched()',
  },
})
export class CwcRangeNumberControlValueAccessorDirective
  extends CwcBaseControlValueAccessorDirective
  implements ControlValueAccessor
{
  @HostBinding('attr.upper-value')
  public upperValue!: number;

  @HostBinding('attr.lower-value')
  public lowerValue!: number;

  public writeValue(value: number[]): void {
    this.lowerValue = coerceNumberProperty(value[0] || 0);
    this.upperValue = coerceNumberProperty(value[1] || 0);

    this.updateValues();
  }

  protected updateValues() {
    this.getShadowElement<CwcNumericFilter>().setValues(
      this.lowerValue,
      this.upperValue
    );
  }
}
