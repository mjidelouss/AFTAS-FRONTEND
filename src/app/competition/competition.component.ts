import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from '../service/competition.service';
//declare var require: any;

@Component({
  templateUrl: './competition.component.html'
})
export class CompetitionComponent implements AfterViewInit {
  
  competitions!:any[];
  selectedStatus: string = '';

  constructor(private competitionService:CompetitionService, private router:Router) {
    
  }

  ngAfterViewInit() { }

  ngOnInit() {
   this.getCompetitions()
  }

  getCompetitions() {
    this.competitionService.getCompetitions().subscribe(
      (response) => {
        this.competitions = response.data;
      },
      (error) => {
        console.error('Error fetching Competitions:', error);
      }
    );
  }

  getCompetitionsByStatus() {
    this.competitionService.getCompetitionsByStatus(this.selectedStatus).subscribe(
      (response) => {
        this.competitions = response.data;
      },
      (error) => {
        console.error('Error fetching competitions:', error);
      }
    );
  }

  viewCompetition(competition: any) {
    this.router.navigate(['/competition-detail'], { state: { competition } });
  }

  editCompetition(competition: any) {
    this.router.navigate(['/edit-competition'], { state: { competition } });
  }

  deleteCompetition(id: number) {
    this.competitionService.deleteCompetition(id).subscribe(
      (response) => {
        console.log('Competition deleted successfully');
      },
      (error) => {
        console.error('Error deleting competition', error);
      }
    );
  }

}
