# CwcCheckboxControlValueAccessorDirective

The [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for writing values and listening to control changes.

## Selectors

```css
cwc-checkbox[formControlName]
cwc-checkbox[formControl]
cwc-checkbox[ngModel]
[cwcCheckboxControlValueAccessor]
```

## Description

### Using a cwc-checkbox control in a reactive form

The follow example shows you how to use a cwc-checkbox control with a reactive form.

```typescript
const checkboxControl = new FormControl();
```

```html
<cwc-checkbox [formControl]="checkboxControl"> </cwc-checkbox>
```

Initial value

```typescript
const checkboxControl = new FormControl(true);
```

### Using a cwc-checkbox control in a template-driven form

To use a cwc-checkbox in a template-driven form, simply add an ngModel attribute to the main `<cwc-checkbox>` tag.

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "example-app",
  template: `
    <cwc-checkbox [(ngModel)]="checkbox"> </cwc-checkbox>

    <p>Form value: {{ checkbox | json }}</p>
    <!-- example value: 'true' -->
  `,
})
export class CwcControlComp {
  checkbox = true;
}
```
