import { BrowserModule } from '@angular/platform-browser';
import { ToastComponent } from './../toast/toast.component';
import { ConfirmationComponent } from './../confirmation/confirmation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [ConfirmationComponent,ToastComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    ToastModule,
    CalendarModule

  ],
  exports:[ConfirmationComponent,ToastComponent],
})
export class SharedModule { }
