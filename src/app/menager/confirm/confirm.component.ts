import { Library } from './../../models/library';
import { LibraryService } from './../../services/library.service';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent implements OnInit {

  book:any;
  @Input() id;
  @Output() onDelete = new EventEmitter<string>();
  constructor(
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
     private bookService: LibraryService
  ) {}

  ngOnInit(): void {}

  confirm2(id) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
       accept: () => {
           this.deleteBooks(id);

       },
      reject: () => {
      console.log('noi')
      },
    });
  }

   deleteBooks(id:string) {
    this.bookService.deleteBook(id).subscribe();
    this.onDelete.emit(id);

   }
}
