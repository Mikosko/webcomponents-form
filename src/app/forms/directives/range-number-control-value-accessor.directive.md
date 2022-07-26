# CwcRangeNumberControlValueAccessorDirective

The [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for writing values and listening to control changes.

## Selectors

```css
cwc-numeric-filter[formControlName]
cwc-numeric-filter[formControl]
cwc-numeric-filter[ngModel]
[cwcRangeNumberControlValueAccessor]
```

## Description

### Using a cwc-numeric-filter control in a reactive form

The follow example shows you how to use a cwc-numeric-filter control with a reactive form.

```typescript
const numericFilter = new FormControl();
```

```html
<cwc-numeric-filter [formControl]="numericFilter"> </cwc-numeric-filter>
```

Initial value

```typescript
const numericFilter = new FormControl([200, 700]);
```

### Using a cwc-numeric-filter control in a template-driven form

To use a cwc-numeric-filter in a template-driven form, simply add an ngModel attribute to the main `<cwc-numeric-filter>` tag.

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "example-app",
  template: `
    <cwc-numeric-filter [(ngModel)]="numericFilter"> </cwc-numeric-filter>

    <p>Form value: {{ numericFilter | json }}</p>
    <!-- example value: [200, 700] -->
  `,
})
export class CwcControlComp {
  numericFilter = [200, 700];
}
```
