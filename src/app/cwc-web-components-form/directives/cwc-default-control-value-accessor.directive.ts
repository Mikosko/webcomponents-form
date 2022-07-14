import { Directive } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CwcBaseControlValueAccessorDirective } from './cwc-base-control-value-accessor.directive';

@Directive({
  selector: 'cwc-input, cwc-textarea, [cwcDefaultControlValueAccessor]',
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
