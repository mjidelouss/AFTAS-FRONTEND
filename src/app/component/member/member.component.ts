import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/service/member.service';


@Component({
  selector: 'app-member',
  standalone: true,
  imports:[NgFor, FormsModule],
  templateUrl: 'member.component.html'
})
export class MemberComponent {
  members!:any[];
  searchTerm: string = '';

  constructor(private memberService: MemberService, private router:Router) {

  }

  goToAddMember() {
    this.router.navigate(['/add-member'])
  }

  viewMember(member: any) {
    this.router.navigate(['/member-detail'], { state: { member } });
  }

  editMember(member: any) {
    this.router.navigate(['/edit-member'], { state: { member } });
  }

  searchMembers() {
    this.memberService.searchMembers(this.searchTerm).subscribe((response) => {
      this.members = response.data;
    },
    (error) => {
      console.error('Error Searching for Member', error);
    });
  }

  deleteMember(id: number) {
    this.memberService.deleteMember(id).subscribe(
      (response) => {
        console.log('Member deleted successfully');
      },
      (error) => {
        console.error('Error deleting Member', error);
      }
    );
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
