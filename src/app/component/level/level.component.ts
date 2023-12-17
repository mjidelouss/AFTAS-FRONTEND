import { Component } from '@angular/core';
import { LevelService } from 'src/app/service/level.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent {
    levels!:any[]
    constructor(private levelService:LevelService) {}

    ngOnInit() {
      this.getLevels();
    }

    getLevels() {
      this.levelService.getLevels().subscribe(
        (response) => {
          this.levels = response.data;
        },
        (error) => {
          console.error('error fetching levels', error)
        }
      )
    }

    deleteLevel(id: number) {
      this.levelService.deleteLevel(id).subscribe(
        (response) => {
          console.log('Level deleted successfully');
        },
        (error) => {
          console.error('Error deleting Level', error);
        }
      );
    }
}
