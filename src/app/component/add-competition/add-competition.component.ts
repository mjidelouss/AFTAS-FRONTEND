import { Component } from '@angular/core';
import { CompetitionService } from 'src/app/service/competition.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrls: ['./add-competition.component.scss']
})
export class AddCompetitionComponent {

  constructor(private competitionService: CompetitionService, private router: Router) {}

  addCompetition(competition: any) {
    this.competitionService.addCompetition(competition).subscribe(
      (response) => {
        // Display success message
        Swal.fire({
          icon: 'success',
          title: 'Competition Added',
          text: 'Competition added successfully!',
        });
  
        console.log('Competition added successfully', response);
  
        // Navigate to the "/competition" route
        this.router.navigate(['/competition']);
      },
      (error) => {
        // Display error message
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to add competition. Please try again.',
        });
  
        console.error('Error adding Competition', error);
      }
    );
  }
  
}
