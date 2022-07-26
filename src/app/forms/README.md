# CmxWebComponentsFormsModule

Exports the directives to connect [Web Components](https://cemex.design/) with [Angular](https://angular.io/) [Reactive forms module](https://angular.io/api/forms/ReactiveFormsModule).

## Implementation

```typescript
import { NgModule } from '@angular/core';
import { CmxWebComponentsFormsModule } from '@cmx-web-components/angular';

@NgModule({
  ...
  imports: [
    CmxWebComponentsFormsModule,
  ],
  ...
})
export class Module {}
```

## Directives

| Name                                                                                                               | Description                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [CwcBaseControlValueAccessorDirective](./directives/base-control-value-accessor.directive.md)                      | The base [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for writing a value and listening to changes on input elements.                                                                                                                                                                         |
| [CwcDefaultControlValueAccessorDirective](./directives/default-control-value-accessor.directive.md)                | The default [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for writing a value and listening to changes on input elements. The accessor is used by the [CwcInput](https://cemex.design/components/input-fields) and [CwcTextarea](https://cemex.design/components/textarea).                    |
| [CwcNumberControlValueAccessorDirective](./directives/number-control-value-accessor.directive.md)                  | The [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for writing a value and listening to changes on [CwcInputNumber](https://cemex.design/components/numeric-input)                                                                                                                              |
| [CwcRangeNumberControlValueAccessorDirective](./directives/range-number-control-value-accessor.directive.md)       | The [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for writing a value and listening to changes on [CwcNumericFilter](https://cemex.design/components/numeric-filter)                                                                                                                           |
| [CwcCheckboxControlValueAccessorDirective](./directives/checkbox-control-value-accessor.directive.md)              | The [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for writing a value and listening to changes on [CwcCheckbox](https://cemex.design/components/selection-checkbox)                                                                                                                            |
| [CwcDateControlValueAccessorDirective](./directives/date-control-value-accessor.directive.md)                      | The [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for writing a value and listening to changes on [CwcDatePicker](https://cemex.design/components/date-picker)                                                                                                                                 |
| [CwcRatingControlValueAccessorDirective](./directives/rating-control-value-accessor.directive.md)                  | The [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for writing a value and listening to changes on [CwcRater](https://cemex.design/components/rater)                                                                                                                                            |
| [CwcOptionGroupControlValueAccessorDirective](./directives/option-group-control-value-accessor.directive.md)       | The base [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for writing a value and listening to changes on on input elements. The accessor is used by the [CwcRadioGroup](https://cemex.design/components/selection-radio-button) and [CwcPicker](https://cemex.design/components/select-dropdown) |
| [CwcOptionControlDirective](./directives/option-control.directive.md)                                              | The base option control for writing a value, listening to changes and communicate with parent [CwcOptionGroupControlValueAccessorDirective](./directives/cwc-option-group-control-value-accessor.directive.md)                                                                                                             |
| [CwcRadioGroupControlValueAccessorDirective](./directives/radio-group-control-value-accessor.directive.md)         | The [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for writing a value and listening to changes on on [CwcRadioGroup](https://cemex.design/components/selection-radio-button)                                                                                                                   |
| [CwcSelectControlValueAccessorDirective](./directives/select-control-value-accessor.directive.md)                  | The [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for writing a value and listening to changes on on [CwcPicker](https://cemex.design/components/select-dropdown)                                                                                                                              |
| [CwcSelectMultipleControlValueAccessorDirective](./directives/select-multiple-control-value-accessor.directive.md) | The [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for writing a value and listening to changes on on [CwcPicker[Multiple]](https://cemex.design/components/select-dropdown)                                                                                                                    |

## Pipes

| Name                                            | Description                                                                                                                                                                                             | Example                                                        |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [CompareWithPipe](./pipes/compare-with.pipe.ts) | The [Pipe](https://angular.io/api/core/Pipe) for make input property [CompareWith](https://angular.io/api/forms/SelectControlValueAccessor#properties) easier to implement with all benefits of caching | `[compareWith]="id \| cwcCompareWith"`                         |
| [TrackByPipe](./pipes/track-by.pipe.ts)         | The [Pipe](https://angular.io/api/core/Pipe) for make input property [ngForTrackBy](https://angular.io/api/common/NgForOf#properties) easier to implement with all benefits of caching                  | `*ngFor="let item of items; trackBy: 'data.id' \| cwcTrackBy"` |

## Utilities

| Name                                                        | Description                                                                      | Example                                               |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [coerceBooleanProperty](./utils/coerce-boolean-property.ts) | Utility function to convert any Boolean-able property into Boolean type property | `coerceBooleanProperty('true') -> true`               |
| [coerceNumberProperty](./utils/coerce-number-property.ts)   | Utility function to convert any Numeric-able property into Number type property  | `coerceNumberProperty('2022') -> 2022`                |
| [keyPath](./utils/coerce-number-property.ts)                | Utility function to pick value from object based on keyPath                      | `keyPath('id', { id: 'UniqueId_1' }) -> 'UniqueId_1'` |
