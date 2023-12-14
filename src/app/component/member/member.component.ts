import { Component } from '@angular/core';
import { Product, TopSelling, TableRows, Employee } from './table-data';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-member',
  standalone: true,
  imports:[NgFor],
  templateUrl: 'member.component.html'
})
export class MemberComponent {
  topSelling: Product[];

  trow: TableRows[];

  constructor() {

    this.topSelling = TopSelling;
    this.trow = Employee;
  }

  ngOnInit() {
    setTimeout(()=>{   
      $('#membertables').DataTable({
       pagingType: 'full_numbers',
       pageLength: 5,
       processing: true,
       lengthMenu : [5, 10, 25],
      });
   }, 1);
  }
}
