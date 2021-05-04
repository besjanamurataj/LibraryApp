import { LibraryService } from './services/library.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenubarModule} from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { CommonModule } from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastComponent } from './shared/toast/toast.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    HttpClientModule,
    DialogModule
  ],
  providers: [LibraryService,MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
