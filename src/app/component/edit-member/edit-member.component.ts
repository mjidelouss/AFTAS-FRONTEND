import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss']
})
export class EditMemberComponent {
  member: any;

  constructor(private router: Router, private memberService: MemberService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.member = navigation?.extras.state['member'];
    }
  }

  updateMember() {
    this.memberService.updateMember(this.member).subscribe(
      (response) => {
        this.member = response.data;
      },
      (error) => {
        console.error('Error updating competition', error);
      }
    );
  }
}
