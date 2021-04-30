import { ConfirmationComponent } from './../../shared/confirmation/confirmation.component';
import { LibraryService } from './../../services/library.service';
import { Library } from './../../models/library';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-manager-library',
  templateUrl: './manager-library.component.html',
  styleUrls: ['./manager-library.component.css'],
})
export class ManagerLibraryComponent implements OnInit {
  library: Library[];
  selectLibrary: Library[];
  statuses: any[];
  loading: boolean = false;
  @ViewChild('dt') table: Table;
  @ViewChild(ConfirmationComponent) modal: ConfirmationComponent;
  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.libraryService.getLibrary().then((customers) => {
      this.library = customers;
      this.loading = false;
      console.log(this.modal.displayModal);
    });
  }
  // onActivityChange(event) {
  //   const value = event.target.value;
  //   if (value && value.trim().length) {
  //     const activity = parseInt(value);

  //     if (!isNaN(activity)) {
  //       this.table.filter(activity, 'activity', 'gte');
  //     }
  //   }
  // }

  //onDateSelect(value) {
   // this.table.filter(this.formatDate(value), 'date', 'equals');
  //}

 // formatDate(date) {
    // let month = date.getMonth() + 1;
    // let day = date.getDate();

    // if (month < 10) {
    //   month = '0' + month;
    // }

    // if (day < 10) {
    //   day = '0' + day;
    // }

    // return date.getFullYear() + '-' + month + '-' + day;
 // }


  // onRepresentativeChange(event) {
  //   this.table.filter(event.value, 'representative', 'in');
  // }

  deleteLibrary(item) {
    let index = this.library.indexOf(item);
    this.library.splice(index, 1);
  }
}
