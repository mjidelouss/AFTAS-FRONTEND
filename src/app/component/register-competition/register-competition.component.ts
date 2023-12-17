import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RankService } from 'src/app/service/rank.service';

@Component({
  selector: 'app-register-competition',
  templateUrl: './register-competition.component.html',
  styleUrls: ['./register-competition.component.scss']
})
export class RegisterCompetitionComponent {

  constructor(private router: Router, private rankService: RankService) {
    
  }

  registerMemberToCompetition(data: any) {
    this.rankService.registerMemberToCompetition(data).subscribe(
      (response) => {
        console.log('Member Register To Competition successfully', response);
      },
      (error) => {
        console.error('Error Registering member To Competition', error);
      }
    );
  }

}
