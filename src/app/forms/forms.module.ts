import { NgModule } from '@angular/core';
import { CwcBaseControlValueAccessorDirective } from './directives/base-control-value-accessor.directive';
import { CwcCheckboxControlValueAccessorDirective } from './directives/checkbox-control-value-accessor.directive';
import { CwcDateControlValueAccessorDirective } from './directives/date-control-value-accessor.directive';
import { CwcDefaultControlValueAccessorDirective } from './directives/default-control-value-accessor.directive';
import { CwcNumberControlValueAccessorDirective } from './directives/number-control-value-accessor.directive';
import { CwcOptionControlDirective } from './directives/option-control.directive';
import { CwcRadioGroupControlValueAccessorDirective } from './directives/radio-group-control-value-accessor.directive';
import { CwcRangeNumberControlValueAccessorDirective } from './directives/range-number-control-value-accessor.directive';
import { CwcRatingControlValueAccessorDirective } from './directives/rating-control-value-accessor.directive';
import { CwcSelectControlValueAccessorDirective } from './directives/select-control-value-accessor.directive';
import { CwcSelectMultipleControlValueAccessorDirective } from './directives/select-multiple-control-value-accessor.directive';
import { CwcCompareWithPipe } from './pipes/compare-with.pipe';
import { CwcTrackByPipe } from './pipes/track-by.pipe';

@NgModule({
  declarations: [
    CwcTrackByPipe,
    CwcCompareWithPipe,

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
    CwcTrackByPipe,
    CwcCompareWithPipe,

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
export class CmxWebComponentsFormsModule {}
