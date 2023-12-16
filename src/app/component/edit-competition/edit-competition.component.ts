import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from 'src/app/service/competition.service';

@Component({
  selector: 'app-edit-competition',
  templateUrl: './edit-competition.component.html',
  styleUrls: ['./edit-competition.component.scss']
})
export class EditCompetitionComponent {
  competition: any;

  constructor(private router: Router, private competitionService: CompetitionService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.competition = navigation?.extras.state['competition'];
    }
  }

  updateCompetition() {
    this.competitionService.updateCompetition(this.competition).subscribe(
      (response) => {
        this.competition = response.data;
      },
      (error) => {
        console.error('Error updating competition', error);
      }
    );
  }

}
