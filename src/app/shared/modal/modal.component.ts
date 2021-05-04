import { Library } from './../../models/library';
import { LibraryService } from '../../services/library.service';
import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  createForm: FormGroup;
  displayModal: boolean;
  date: Date;
  book: Library;
  @Output() onAdd = new EventEmitter<Library>();

  constructor(
    private formBuilder: FormBuilder,
    private bookService: LibraryService
  ) {}

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      data: ['', [Validators.required]],
    });
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
  get data(): FormControl {
    return this.createForm.get('data') as FormControl;
  }

  cretate(book: Library) {
    if(this.book?.id){
      console.log('update');
      this.bookService.update(this.book.id,this.book);
    }

    this.bookService.create(book).subscribe(() => {
      this.createForm.reset();
      this.closeModalDialog() ;
      this.onAdd.emit(book);
      console.log(book);
    });
  }


}
