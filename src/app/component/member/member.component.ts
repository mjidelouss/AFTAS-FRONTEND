import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MemberService } from 'src/app/service/member.service';



@Component({
  selector: 'app-member',
  standalone: true,
  imports:[NgFor],
  templateUrl: 'member.component.html'
})
export class MemberComponent {
  members!:any[];

  constructor(private memberService: MemberService) {
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
   this.getMembers()
  }

  getMembers() {
      this.memberService.getMembers().subscribe(
        (response) => {
          this.members = response.data;
        },
        (error) => {
          console.error('Error fetching members:', error);
        }
      );
    }
}
