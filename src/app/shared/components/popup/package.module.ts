import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { MaterialModule } from '../../shared modules/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PopupComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [PopupComponent],
})
export class PopupModule {}
