import { Directive } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { coerceBooleanProperty } from '../utils/coerce-boolean-property';
import { CwcBaseControlValueAccessorDirective } from './base-control-value-accessor.directive';

@Directive({
  selector: `
    cwc-checkbox[formControlName],
    cwc-checkbox[formControl],
    cwc-checkbox[ngModel],
    [cwcCheckboxControlValueAccessor]`,
  host: {
    '(cwcChange)': 'onChange($event.detail)',
    '(cwcBlur)': 'onTouched()',
  },
})
export class CwcCheckboxControlValueAccessorDirective extends CwcBaseControlValueAccessorDirective
  implements ControlValueAccessor {
  public writeValue(value: boolean): void {
    const normalizedValue = coerceBooleanProperty(value);
    this.setProperty('checked', normalizedValue);
  }
}
