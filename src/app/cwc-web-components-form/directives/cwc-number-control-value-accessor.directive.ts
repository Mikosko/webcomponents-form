import { Directive } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CwcBaseControlValueAccessorDirective } from './cwc-base-control-value-accessor.directive';
import { coerceNumberProperty } from '../utils/coerce-number-property';

@Directive({
  selector: 'cwc-input-number, [cwcNumberControlValueAccessor]',
  host: {
    '(cwcChange)': 'onChange($event.detail)',
    '(cwcBlur)': 'onTouched()',
  },
})
export class CwcNumberControlValueAccessorDirective
  extends CwcBaseControlValueAccessorDirective
  implements ControlValueAccessor
{
  public writeValue(value: number): void {
    const normalizedValue = value == null ? 0 : value;
    this.setProperty('value', normalizedValue);
  }

  // Override method is not supported
  public /*override*/ registerOnChange(fn: any): void {
    this.onChange = (value) => {
      fn(coerceNumberProperty(value));
    };
  }
}
