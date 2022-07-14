import { NgModule } from '@angular/core';
import { CwcBaseControlValueAccessorDirective } from './directives/cwc-base-control-value-accessor.directive';
import { CwcCheckboxControlValueAccessorDirective } from './directives/cwc-checkbox-control-value-accessor.directive';
import { CwcDateControlValueAccessorDirective } from './directives/cwc-date-control-value-accessor.directive';
import { CwcDefaultControlValueAccessorDirective } from './directives/cwc-default-control-value-accessor.directive';
import { CwcNumberControlValueAccessorDirective } from './directives/cwc-number-control-value-accessor.directive';
import { CwcOptionControlDirective } from './directives/cwc-option-control.directive';
import { CwcRadioGroupControlValueAccessorDirective } from './directives/cwc-radio-group-control-value-accessor.directive';
import { CwcRangeNumberControlValueAccessorDirective } from './directives/cwc-range-number-control-value-accessor.directive';
import { CwcRatingControlValueAccessorDirective } from './directives/cwc-rating-control-value-accessor.directive';
import { CwcSelectControlValueAccessorDirective } from './directives/cwc-select-control-value-accessor.directive';
import { CwcSelectMultipleControlValueAccessorDirective } from './directives/cwc-select-multiple-control-value-accessor.directive';
import { CompareWithPipe } from './pipes/compare-with.pipe';
import { TrackByPipe } from './pipes/track-by.pipe';

@NgModule({
  declarations: [
    TrackByPipe,
    CompareWithPipe,

    CwcBaseControlValueAccessorDirective,
    CwcCheckboxControlValueAccessorDirective,
    CwcDefaultControlValueAccessorDirective,
    CwcRangeNumberControlValueAccessorDirective,
    CwcNumberControlValueAccessorDirective,
    CwcRatingControlValueAccessorDirective,
    CwcDateControlValueAccessorDirective,
    CwcSelectControlValueAccessorDirective,
    CwcSelectMultipleControlValueAccessorDirective,
    CwcRadioGroupControlValueAccessorDirective,
    CwcOptionControlDirective,
  ],
  exports: [
    TrackByPipe,
    CompareWithPipe,

    CwcBaseControlValueAccessorDirective,
    CwcCheckboxControlValueAccessorDirective,
    CwcDefaultControlValueAccessorDirective,
    CwcNumberControlValueAccessorDirective,
    CwcRatingControlValueAccessorDirective,
    CwcRangeNumberControlValueAccessorDirective,
    CwcDateControlValueAccessorDirective,
    CwcSelectControlValueAccessorDirective,
    CwcSelectMultipleControlValueAccessorDirective,
    CwcRadioGroupControlValueAccessorDirective,
    CwcOptionControlDirective,
  ],
})
export class CwcWebComponentsFormModule {}
