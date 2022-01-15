import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'src/app/shared/components/table/package.module';
import { DetailsModule } from 'src/app/shared/components/details/package.module';
import { PopupModule } from 'src/app/shared/components/popup/package.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MainComponent }]),
    TableModule,
    DetailsModule,
    PopupModule,
  ],
})
export class MainModule {}
