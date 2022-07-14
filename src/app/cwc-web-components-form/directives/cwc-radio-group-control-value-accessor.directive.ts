import { Directive, forwardRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CwcOptionGroupControlValueAccessorDirective } from './cwc-option-group-control-value-accessor.directive';

@Directive({
  selector: 'cwc-radio-group, [cwcRadioGroupValueAccessor]',
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
export class CwcRadioGroupControlValueAccessorDirective
  extends CwcOptionGroupControlValueAccessorDirective<any>
  implements ControlValueAccessor {}
