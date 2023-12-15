import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent {

  constructor(private router:Router) {}

  goBack() {
    this.router.navigate(['/member'])
  }

}
