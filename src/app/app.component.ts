import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { map, scan, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cmx-webcomponents-test';

  constructor(public fb: FormBuilder) {}

  public activeComponent$ = new BehaviorSubject(0);

  public cwcNumberModel = 8;
  public cwcRaterModel = 3;
  public cwcCheckboxModel = true;
  public cwcDateModel = new Date(2000, 10, 2).toISOString();
  public cwcDateRangeModel = [new Date(2000, 10, 2).toISOString()];
  public cwcRadioGroupModel = { id: '5', name: 'Name_5' };
  public cwcPickerMultipleModel = [
    { id: '4', name: 'Name_4' },
    { id: '1', name: 'Name_1' },
  ];
  public cwcRadioGroupSimpleModel = 'C';
  public cwcPickerMultipleSimpleModel = ['C', 'A'];
  public cwcPicker = { id: '4' };
  public cwcTextAreaModel = 'Hello World';
  public cwcInputModel = 'Hello World';
  public cwcRangeNumberModel = [200, 700];

  public form = this.fb.group({
    cwcCheckbox: [this.cwcCheckboxModel],
    cwcDate: [this.cwcDateModel],
    cwcDateRange: [this.cwcDateRangeModel],
    cwcRadioGroup: [this.cwcRadioGroupModel],
    cwcRangeNumber: [this.cwcRangeNumberModel],
    cwcNumber: [this.cwcNumberModel],
    cwcRater: [this.cwcRaterModel],
    cwcPickerMultiple: [this.cwcPickerMultipleModel],
    cwcPicker: [this.cwcPicker],
    cwcTextArea: [this.cwcTextAreaModel],
    cwcInput: [this.cwcInputModel],
  });

  public options = [
    { id: '1', name: 'Name_1' },
    { id: '2', name: 'Name_2' },
    { id: '3', name: 'Name_3' },
    { id: '4', name: 'Name_4' },
    { id: '5', name: 'Name_5' },
    { id: '6', name: 'Name_6' },
  ];

  public optionsValue = [
    { value: '1', name: 'Value_1' },
    { value: '2', name: 'Value_2' },
    { value: '3', name: 'Value_3' },
    { value: '4', name: 'Value_4' },
    { value: '5', name: 'Value_5' },
    { value: '6', name: 'Value_6' },
  ];

  public cwcInputActions$ = this.form.controls['cwcInput'].valueChanges.pipe(
    map((d) => ({ OnChange: d })),
    startWith({ OnInit: this.cwcInputModel }),
    scan((accumulated, current) => accumulated.concat(current), [] as any)
  );

  public cwcRangeNumberActions$ = this.form.controls[
    'cwcRangeNumber'
  ].valueChanges.pipe(
    map((d) => ({ OnChange: d })),
    startWith({ OnInit: this.cwcRangeNumberModel }),
    scan((accumulated, current) => accumulated.concat(current), [] as any)
  );

  public cwcRaterActions$ = this.form.controls['cwcRater'].valueChanges.pipe(
    map((d) => ({ OnChange: d })),
    startWith({ OnInit: this.cwcRaterModel }),
    scan((accumulated, current) => accumulated.concat(current), [] as any)
  );

  public cwcTextAreaActions$ = this.form.controls[
    'cwcTextArea'
  ].valueChanges.pipe(
    map((d) => ({ OnChange: d })),
    startWith({ OnInit: this.cwcTextAreaModel }),
    scan((accumulated, current) => accumulated.concat(current), [] as any)
  );

  public cwcNumberActions$ = this.form.controls['cwcNumber'].valueChanges.pipe(
    map((d) => ({ OnChange: d })),
    startWith({ OnInit: this.cwcNumberModel }),
    scan((accumulated, current) => accumulated.concat(current), [] as any)
  );

  public cwcDateRangeActions$ = this.form.controls[
    'cwcDateRange'
  ].valueChanges.pipe(
    map((d) => ({ OnChange: d })),
    startWith({ OnInit: this.cwcDateRangeModel }),
    scan((accumulated, current) => accumulated.concat(current), [] as any)
  );

  public cwcDateActions$ = this.form.controls['cwcDate'].valueChanges.pipe(
    map((d) => ({ OnChange: d })),
    startWith({ OnInit: this.cwcDateModel }),
    scan((accumulated, current) => accumulated.concat(current), [] as any)
  );

  public cwcCheckboxActions$ = this.form.controls[
    'cwcCheckbox'
  ].valueChanges.pipe(
    map((d) => ({ OnChange: d })),
    startWith({ OnInit: this.cwcCheckboxModel }),
    scan((accumulated, current) => accumulated.concat(current), [] as any)
  );

  public cwcRadioGroupActions$ = this.form.controls[
    'cwcRadioGroup'
  ].valueChanges.pipe(
    map((d) => ({ OnChange: d })),
    startWith({ OnInit: this.cwcRadioGroupModel }),
    scan((accumulated, current) => accumulated.concat(current), [] as any)
  );

  public cwcPickerActions$ = this.form.controls['cwcPicker'].valueChanges.pipe(
    map((d) => ({ OnChange: d })),
    startWith({ OnInit: this.cwcPicker }),
    scan((accumulated, current) => accumulated.concat(current), [] as any)
  );

  public cwcPickerMultipleActions$ = this.form.controls[
    'cwcPickerMultiple'
  ].valueChanges.pipe(
    map((d) => ({ OnChange: d })),
    startWith({ OnInit: this.cwcPickerMultipleModel }),
    scan((accumulated, current) => accumulated.concat(current), [] as any)
  );
}
