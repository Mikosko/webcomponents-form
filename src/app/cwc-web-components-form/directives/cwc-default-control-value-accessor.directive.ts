import { Directive } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CwcBaseControlValueAccessorDirective } from './cwc-base-control-value-accessor.directive';

@Directive({
  selector: `
    cwc-input[formControlName],
    cwc-input[formControl],
    cwc-input[ngModel],
    cwc-textarea[formControlName],
    cwc-textarea[formControl],
    cwc-textarea[ngModel],
    [cwcDefaultControlValueAccessor]`,
  host: {
    '(cwcChange)': 'onChange($event.detail)',
    '(cwcBlur)': 'onTouched()',
  },
})
export class CwcDefaultControlValueAccessorDirective
  extends CwcBaseControlValueAccessorDirective
  implements ControlValueAccessor
{
  public writeValue(value: any): void {
    const normalizedValue = value == null ? '' : value;
    this.setProperty('value', normalizedValue);
  }
}
