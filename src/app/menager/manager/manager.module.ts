import { ConfirmComponent } from './../confirm/confirm.component';
import { SharedModule } from './../../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerLibraryComponent } from '../manager-library/manager-library.component';
import {TableModule} from 'primeng/table';
import {ProgressBarModule} from 'primeng/progressbar';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [ManagerLibraryComponent, ConfirmComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ConfirmDialogModule

  ]
})
export class ManagerModule { }
