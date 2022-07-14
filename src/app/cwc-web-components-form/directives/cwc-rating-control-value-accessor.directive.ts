import { Directive } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CwcBaseControlValueAccessorDirective } from './cwc-base-control-value-accessor.directive';
import { coerceNumberProperty } from '../utils/coerce-number-property';

@Directive({
  selector: 'cwc-rater, [cwcRatingControlValueAccessor]',
  host: {
    '(cwcChange)': 'onChange($event.detail)',
    '(cwcBlur)': 'onTouched()',
  },
})
export class CwcRatingControlValueAccessorDirective
  extends CwcBaseControlValueAccessorDirective
  implements ControlValueAccessor
{
  // @TODO: cwc-rater call cwcChange on Init
  private _fixBug = false;

  public writeValue(value: number): void {
    const normalizedValue = value == null ? 0 : value;
    this.setProperty('rating', normalizedValue);
  }

  // Override method is not supported
  public /*override*/ registerOnChange(fn: any): void {
    this.onChange = (value) => {
      if (this._fixBug) {
        fn(coerceNumberProperty(value));
      }
      this._fixBug = true;
    };
  }
}
