import { Directive, forwardRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { buildValueString } from '../utils/build-value-string';
import { CwcOptionGroupControlValueAccessorDirective } from './cwc-option-group-control-value-accessor.directive';

@Directive({
  selector: `
    cwc-picker:not([multiple])[formControlName],
    cwc-picker:not([multiple])[formControl],
    cwc-picker:not([multiple])[ngModel],
    cwc-select:not([multiple])[formControlName],
    cwc-select:not([multiple])[formControl],
    cwc-select:not([multiple])[ngModel],
    [cwcSelectControlValueAccessor]`,
  host: {
    '(cwcChange)': 'onChange($event.detail.value); onTouched()',
    '(cwcBlur)': 'onTouched()',
  },
  providers: [
    {
      provide: CwcOptionGroupControlValueAccessorDirective,
      useExisting: forwardRef(() => CwcSelectControlValueAccessorDirective),
    },
  ],
})
export class CwcSelectControlValueAccessorDirective
  extends CwcOptionGroupControlValueAccessorDirective<any>
  implements ControlValueAccessor
{
  // Override method is not supported
  public /*override*/ writeValue(value: any): void {
    this.value = value;
    const id = this.getOptionId(value);
    const valueString = buildValueString(id, value);
    this.setProperty('value', valueString);

    const optionSelectedStateSetter = (opt: any, o: any) => {
      opt.setSelected(id === o);
    };

    this.optionMap.forEach(optionSelectedStateSetter);
  }
}
