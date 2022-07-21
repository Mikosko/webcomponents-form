import { Directive, forwardRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { buildValueString } from '../utils/build-value-string';
import { CwcOptionGroupControlValueAccessorDirective } from './cwc-option-group-control-value-accessor.directive';

@Directive({
  selector: `
    cwc-picker[multiple]:not([cwcFormDisabled])[formControlName],
    cwc-picker[multiple]:not([cwcFormDisabled])[formControl],
    cwc-picker[multiple]:not([cwcFormDisabled])[ngModel],
    [cwcSelectMultipleControlValueAccessor]`,
  host: {
    '(cwcChange)': 'onChange($event.detail); onTouched()',
    '(cwcBlur)': 'onTouched()',
  },
  providers: [
    {
      provide: CwcOptionGroupControlValueAccessorDirective,
      useExisting: forwardRef(
        () => CwcSelectMultipleControlValueAccessorDirective
      ),
    },
  ],
})
export class CwcSelectMultipleControlValueAccessorDirective
  extends CwcOptionGroupControlValueAccessorDirective<any[]>
  implements ControlValueAccessor
{
  // Override method is not supported
  public /*override*/ writeValue(value: any): void {
    this.value = value;

    if (Array.isArray(value)) {
      const ids = value.map((v) => this.getOptionId(v));

      const optionSelectedStateSetter = (opt: any, o: any) => {
        opt.setSelected(ids.includes(o));
      };

      this.optionMap.forEach(optionSelectedStateSetter);

      const valueString = value.map((v: any) => {
        const id = this.getOptionId(v);
        return buildValueString(id, v);
      });

      this.setProperty('value', valueString);
    }
  }

  // Override method is not supported
  public /*override*/ registerOnChange(fn: (value: any) => any): void {
    this.onChange = ($selectedOptions: { value: string; name: string }[]) => {
      this.value = $selectedOptions.map((opt) =>
        this.getOptionValue(opt.value)
      );

      fn(this.value);
    };
  }
}
