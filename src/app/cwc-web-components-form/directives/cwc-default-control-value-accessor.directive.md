# CwcDefaultControlValueAccessorDirective

The [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for writing values and listening to control changes.

## Selectors

```css
cwc-input[formControlName]
cwc-input[formControl]
cwc-input[ngModel]
cwc-textarea[formControlName]
cwc-textarea[formControl]
cwc-textarea[ngModel]
[cwcDefaultControlValueAccessor]
```

## Description

### Using a cwc-input / cwc-textarea control in a reactive form

The follow example shows you how to use a cwc-input control with a reactive form.

```typescript
const numberControl = new FormControl();
```

```html
<cwc-input [formControl]="numberControl"> </cwc-input>
```

Initial value

```typescript
const numberControl = new FormControl('Hello world');
```

### Using a cwc-input / cwc-textarea control in a template-driven form

To use a cwc-input in a template-driven form, simply add an ngModel attribute to the main `<cwc-input>` tag.

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "example-app",
  template: `
    <cwc-input [(ngModel)]="text"> </cwc-input>

    <p>Form value: {{ text | json }}</p>
    <!-- example value: 'Hello world' -->
  `,
})
export class CwcControlComp {
  text = "Hello world";
}
```
