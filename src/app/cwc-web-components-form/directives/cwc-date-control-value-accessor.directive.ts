import { Directive, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { coerceBooleanProperty } from '../utils/coerce-boolean-property';
import { CwcBaseControlValueAccessorDirective } from './cwc-base-control-value-accessor.directive';

@Directive({
  selector: 'cwc-input-date, [cwcDateControlValueAccessor]',
  host: {
    // cwcChange is used only for ApplyButton
    '(cwcChange)': 'applyChange()',
    '(cwcDayClick)': 'onDayClick($event.detail)',
    '(cwcBlur)': 'onTouched()',
  },
})
export class CwcDateControlValueAccessorDirective
  extends CwcBaseControlValueAccessorDirective
  implements ControlValueAccessor
{
  public value!: string | string[];

  public fromValue!: string | null;
  public toValue!: string | null;

  public writeValue(value: string | string[]): void {
    if (this._range) {
      this.fromValue = Array.isArray(value) ? value[0] : value;
      this.toValue = Array.isArray(value) ? value[1] : null;
    }

    this.value = value;
    this.setProperty('value', value);
  }

  public applyChange() {
    if (this._controlButtons) {
      this.onChange(this.value);
    }
  }

  public onDayClick(value: string) {
    if (this._range) {
      if (this.fromValue) {
        this.toValue = value;

        this.value = [this.fromValue, this.toValue];
        this.fromValue = this.toValue = null;

        if (!this._controlButtons) {
          this.onChange(this.value);
        }
      } else {
        this.fromValue = value;
      }
    } else {
      this.value = value;

      if (!this._controlButtons) {
        this.onChange(this.value);
      }
    }
  }

  private _range!: boolean;
  @Input('range')
  public set range(isRange: boolean | string) {
    this._range = coerceBooleanProperty(isRange);
  }

  private _controlButtons!: boolean;
  @Input('control-buttons')
  public set controlButtons(hasControlButtons: boolean | string) {
    this._controlButtons = coerceBooleanProperty(hasControlButtons);
  }
}
