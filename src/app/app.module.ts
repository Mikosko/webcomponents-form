import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  CmxWebComponentsFormsModule,
  CmxWebComponentsModule,
} from '@cmx-web-components/angular';

import { AppComponent } from './app.component';
import { CwcWebComponentsFormModule } from './cwc-web-components-form/cwc-web-components-form.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    CmxWebComponentsModule.forRoot(),
    // CmxWebComponentsFormsModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CwcWebComponentsFormModule,
  ],
  // providers: [CwcTrackByPipe, CwcCompareWithPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
