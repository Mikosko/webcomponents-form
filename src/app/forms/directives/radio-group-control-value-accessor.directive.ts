import { Directive, forwardRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CwcOptionGroupControlValueAccessorDirective } from './option-group-control-value-accessor.directive';

@Directive({
  selector: `
    cwc-radio-group[formControlName],
    cwc-radio-group[formControl],
    cwc-radio-group[ngModel],
    [cwcRadioGroupValueAccessor]`,
  host: {
    '(cwcChange)': 'onChange($event.detail); onTouched()',
    '(cwcBlur)': 'onTouched()',
  },
  providers: [
    {
      provide: CwcOptionGroupControlValueAccessorDirective,
      useExisting: forwardRef(() => CwcRadioGroupControlValueAccessorDirective),
    },
  ],
})
export class CwcRadioGroupControlValueAccessorDirective extends CwcOptionGroupControlValueAccessorDirective<any>
  implements ControlValueAccessor {}
