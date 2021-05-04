import { ConfirmComponent } from './../confirm/confirm.component';

import { LibraryService } from './../../services/library.service';
import { Library } from './../../models/library';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-manager-library',
  templateUrl: './manager-library.component.html',
  styleUrls: ['./manager-library.component.css'],
})
export class ManagerLibraryComponent implements OnInit {
  library: any;
  @Input() id: string;
  selectLibrary: Library[];
  statuses: any[];
  loading: boolean = false;
  @ViewChild('dt') table: Table;
  @ViewChild(ModalComponent) modal: ModalComponent;
  @ViewChild(ConfirmComponent) confirm: ConfirmComponent;
  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {
  this.getBook();
  }


   getBook(){
    this.libraryService.getBook().subscribe((data) => {
    this.library = data;
    console.log(data);
    this.loading = false;
  });
}

deleteBook(id){
 const index = this.library.indexOf(this.id);
 console.log(index);
    this.library.splice(index,1);
    console.log( this.library.splice(index,1));
}


}
