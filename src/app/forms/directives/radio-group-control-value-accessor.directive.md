# CwcRadioGroupControlValueAccessorDirective

The [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for writing values and listening to control changes.

## Selectors

```css
cwc-radio-group[formControlName]
cwc-radio-group[formControl]
cwc-radio-group[ngModel]
[cwcRadioGroupValueAccessor]
```

## Description

### Using a cwc-radio-group control in a reactive form

The follow example shows you how to use a cwc-radio-group control with a reactive form.

```typescript
const countryControl = new FormControl();
```

```html
<cwc-radio-group
  name="country"
  [formControl]="countryControl"
  (compareWith)="'id' | compareWith"
>
  <cwc-radio
    *ngFor="let country of countries; trackBy: 'id' | trackBy"
    [cwcValue]="country"
  >
    {{ country.name }}
  </cwc-radio>
</cwc-radio-group>
```

Initial value

```typescript
const radio = new FormControl({ name: 'New York', id: 'NY' });
```

### Using a cwc-radio-group control in a template-driven form

To use a cwc-radio-group in a template-driven form, simply add an ngModel attribute to the main `<cwc-radio-group>` tag.

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "example-app",
  template: `
    <cwc-radio-group name="country" [(ngModel)]="stateSelected" (compareWith)="'id' | compareWith">
      <cwc-radio
        *ngFor="let state of states; trackBy: 'id' | trackBy"
        [cwcValue]="state"
      >
        {{ state.id }}
      </cwc-radio>
    </cwc-radio-group>

    <p>Form value: {{ stateSelected | json }}</p>
    <!-- example value: { name: 'New York', id: 'NY' } -->
  `,
})
export class CwcControlComp {
  stateSelected = { name: "Arizona", id: "AZ" };

  states = [
    { name: "Arizona", id: "AZ" },
    { name: "California", id: "CA" },
    { name: "Colorado", id: "CO" },
    { name: "New York", id: "NY" },
    { name: "Pennsylvania", id: "PA" },
  ];
}
```
