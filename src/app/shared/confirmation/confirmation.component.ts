import { Library } from './../../models/library';
import { ToastComponent } from './../toast/toast.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  createForm: FormGroup;
  displayModal: boolean;
  date: Date;
  // book:Library;

  @ViewChild(ToastComponent) toast:ToastComponent;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      data:['',[Validators.required]]
    });
      this.toast.test;
  }
  showModalDialog() {
    this.displayModal = true;
  }

  closeModalDialog() {
    this.displayModal = false;
  }
  get title(): FormControl {
    return this.createForm.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.createForm.get('description') as FormControl;
  }
  get author(): FormControl {
    return this.createForm.get('author') as FormControl;
  }
  get category(): FormControl {
    return this.createForm.get('category') as FormControl;
  }
  get data(): FormControl{
    return this.createForm.get('data') as FormControl;
  }

  cretate() {
   if(this.title.hasError('required')){
     console.log(this.toast.showError());
   }
    console.log(this.createForm.value);
  }


}
