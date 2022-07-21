# CwcNumberControlValueAccessorDirective

The [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for writing values and listening to control changes.

## Selectors

```css
cwc-input-number[formControlName]
cwc-input-number[formControl]
cwc-input-number[ngModel]
[cwcNumberControlValueAccessor]
```

## Description

### Using a cwc-input-number control in a reactive form

The follow example shows you how to use a cwc-input-number control with a reactive form.

```typescript
const numberControl = new FormControl();
```

```html
<cwc-input-number [formControl]="numberControl"> </cwc-input-number>
```

Initial value

```typescript
const numberControl = new FormControl(5);
```

### Using a cwc-input-number control in a template-driven form

To use a cwc-input-number in a template-driven form, simply add an ngModel attribute to the main `<cwc-input-number>` tag.

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "example-app",
  template: `
    <cwc-input-number [(ngModel)]="number"> </cwc-input-number>

    <p>Form value: {{ number | json }}</p>
    <!-- example value: 5 -->
  `,
})
export class CwcControlComp {
  number = 5;
}
```
