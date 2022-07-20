import { Directive, HostBinding } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CwcNumericFilter } from '@cmx-web-components/angular';
import { CwcBaseControlValueAccessorDirective } from './cwc-base-control-value-accessor.directive';

@Directive({
  selector: 'cwc-numeric-filter, [cwcRangeNumberControlValueAccessor]',
  host: {
    '(cwcChange)': 'onChange($event.detail)',
    '(cwcBlur)': 'onTouched()',
  },
})
export class CwcRangeNumberControlValueAccessorDirective
  extends CwcBaseControlValueAccessorDirective
  implements ControlValueAccessor
{
  @HostBinding('attr.upper-value')
  public upperValue!: number;

  @HostBinding('attr.lower-value')
  public lowerValue!: number;

  public writeValue(value: number[]): void {
    this.lowerValue = value[0];
    this.upperValue = value[1];

    this.getShadowElement<CwcNumericFilter>().setValues(
      this.lowerValue,
      this.upperValue
    );
  }
}
