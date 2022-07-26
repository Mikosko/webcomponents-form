# CwcRatingControlValueAccessorDirective

The [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for writing values and listening to control changes.

## Selectors

```css
cwc-rater[formControlName]
cwc-rater[formControl]
cwc-rater[ngModel]
[cwcRatingControlValueAccessor]
```

## Description

### Using a cwc-rater control in a reactive form

The follow example shows you how to use a cwc-rater control with a reactive form.

```typescript
const rateControl = new FormControl();
```

```html
<cwc-rater [formControl]="rateControl"> </cwc-rater>
```

Initial value

```typescript
const rateControl = new FormControl(2);
```

### Using a cwc-rater control in a template-driven form

To use a cwc-rater in a template-driven form, simply add an ngModel attribute to the main `<cwc-rater>` tag.

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "example-app",
  template: `
    <cwc-rater [(ngModel)]="rating"> </cwc-rater>

    <p>Form value: {{ rating | json }}</p>
    <!-- example value: 2 -->
  `,
})
export class CwcControlComp {
  rating = 2;
}
```
