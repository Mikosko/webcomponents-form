# CwcDateControlValueAccessorDirective

The [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for writing values and listening to control changes.

## Selectors

```css
cwc-input-date[formControlName]
cwc-input-date[formControl]
cwc-input-date[ngModel]
[cwcDateControlValueAccessor]
```

## Description

### Using a cwc-input-date control in a reactive form

The follow example shows you how to use a cwc-input-date control with a reactive form.

```typescript
const dateControl = new FormControl();
const dateRangeControl = new FormControl();
```

```html
<cwc-input-date [formControl]="dateControl"> </cwc-input-date>
<cwc-input-date range [formControl]="dateRangeControl"> </cwc-input-date>
```

Initial value

```typescript
const dateControl = new FormControl(new Date(2022, 3, 1).toISOString());
const dateRangeControl = new FormControl([
  new Date(2022, 3, 1).toISOString(),
  new Date(2022, 6, 1).toISOString(),
]);
```

### Using a cwc-input-date-date control in a template-driven form

To use a cwc-input-date in a template-driven form, simply add an ngModel attribute to the main `<cwc-input-date>` tag.

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "example-app",
  template: `
    <cwc-input-date [(ngModel)]="date"> </cwc-input-date>
    <cwc-input-date [(ngModel)]="dateRange"> </cwc-input-date>

    <p>Form value: {{ date | json }}</p>
    <p>Form value: {{ dateRange | json }}</p>
    <!-- example value: '2022-03-01T12:19:33.787Z' -->
    <!-- example value: ['2022-03-01T12:19:33.787Z', '2022-06-01T12:19:33.787Z'] -->
  `,
})
export class CwcControlComp {
  date = new Date().toISOString();
  dateRange = [
    new Date(2022, 3, 1).toISOString(),
    new Date(2022, 6, 1).toISOString(),
  ];
}
```
