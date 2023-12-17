import { Component } from '@angular/core';
import { LevelService } from 'src/app/service/level.service';

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.scss']
})
export class AddLevelComponent {

  constructor(private levelService: LevelService) {}

  addLevel(level: any) {
    console.log(level)
    this.levelService.addLevel(level).subscribe(
      (response) => {
        console.log('Level added successfully', response);
      },
      (error) => {
        console.error('Error adding Level', error);
      }
    );
  }

}
