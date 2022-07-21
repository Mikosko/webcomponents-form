import { Directive, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { buildValueString } from '../utils/build-value-string';
import { extractId } from '../utils/extract-id';
import { CwcBaseControlValueAccessorDirective } from './cwc-base-control-value-accessor.directive';
import { CwcOptionControlDirective } from './cwc-option-control.directive';

@Directive({
  selector: '[cwcOptionGroupValueAccessor]',
})
export class CwcOptionGroupControlValueAccessorDirective<V>
  extends CwcBaseControlValueAccessorDirective
  implements ControlValueAccessor
{
  private _idCounter = 0;

  public value!: V;
  public optionMap = new Map<string, CwcOptionControlDirective>();

  public writeValue(value: V): void {
    this.value = value;

    const id = this.getOptionId(value);
    const valueString = buildValueString(id, value);

    this.setProperty('value', valueString);
  }

  // Override method is not supported
  public /*override*/ registerOnChange(fn: (value: any) => any): void {
    this.onChange = (valueString: string) => {
      this.value = this.getOptionValue(valueString);
      fn(this.value);
    };
  }

  @Input()
  public compareWith = Object.is;

  public registerOption(optionRef: CwcOptionControlDirective) {
    const id = `${this._idCounter++}`;
    this.optionMap.set(id, optionRef);

    return id;
  }

  public getOptionId(value: any) {
    // TODO: https://github.com/angular/angular/issues/14988
    for (let id of Array.from(this.optionMap.keys())) {
      if (this.optionMap.get(id)!.value !== undefined && value) {
        if (this.compareWith(this.optionMap.get(id)!.value, value)) {
          return id;
        }
      }
    }

    return null;
  }

  public getOptionValue(valueString: string) {
    const id = extractId(valueString);
    return this.optionMap.has(id) ? this.optionMap.get(id)!.value : valueString;
  }
}
