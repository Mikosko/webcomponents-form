import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentViewComponent } from './component-view/component-view.component';

@NgModule({
  declarations: [ComponentViewComponent],
  exports: [ComponentViewComponent],
  imports: [CommonModule],
})
export class SharedModule {}
