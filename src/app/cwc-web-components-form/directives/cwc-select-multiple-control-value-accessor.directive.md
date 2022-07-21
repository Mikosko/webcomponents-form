# CwcSelectMultipleControlValueAccessorDirective

The [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for writing values and listening to control changes.

## Selectors

```css
cwc-picker[multiple]:not([cwcFormDisabled])[formControlName]
cwc-picker[multiple]:not([cwcFormDisabled])[formControl]
cwc-picker[multiple]:not([cwcFormDisabled])[ngModel]
[cwcSelectMultipleControlValueAccessor]
```

## Description

### Using a cwc-picker multiple control in a reactive form

The follow example shows you how to use a cwc-picker multiple control with a reactive form.

```typescript
const countryControl = new FormControl();
```

```html
<cwc-picker
  multiple
  [formControl]="countryControl"
  (compareWith)="'id' | compareWith"
>
  <option
    *ngFor="let country of countries; trackBy: 'id' | trackBy"
    [cwcValue]="country"
  >
    {{ country.name }}
  </option>
</cwc-picker>
```

Initial value

```typescript
const countryControl = new FormControl([
  { name: "Arizona", id: "AZ" },
  { name: "California", id: "CA" },
]);
```

### Using a cwc-picker control in a template-driven form

To use a cwc-picker in a template-driven form, simply add an ngModel attribute to the main `<cwc-picker>` tag.

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "example-app",
  template: `
    <cwc-picker
      multiple
      [(ngModel)]="stateSelected"
      (compareWith)="'id' | compareWith"
    >
      <option
        *ngFor="let state of states; trackBy: 'id' | trackBy"
        [cwcValue]="state"
      >
        {{ state.id }}
      </option>
    </cwc-picker>

    <p>Form value: {{ stateSelected | json }}</p>
    <!-- example value: [{ name: 'New York', id: 'NY' }, { name: 'Arizona', id: 'AZ' }] -->
  `,
})
export class CwcControlComp {
  stateSelected = [{ name: "Arizona", id: "AZ" }];

  states = [
    { name: "Arizona", id: "AZ" },
    { name: "California", id: "CA" },
    { name: "Colorado", id: "CO" },
    { name: "New York", id: "NY" },
    { name: "Pennsylvania", id: "PA" },
  ];
}
```
