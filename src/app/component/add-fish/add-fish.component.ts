import { Component } from '@angular/core';
import { FishService } from 'src/app/service/fish.service';

@Component({
  selector: 'app-add-fish',
  templateUrl: './add-fish.component.html',
  styleUrls: ['./add-fish.component.scss']
})
export class AddFishComponent {
  constructor(private fishService: FishService) {}

  addFish(fish: any) {
    console.log(fish)
    this.fishService.addFish(fish).subscribe(
      (response) => {
        console.log('Fish added successfully', response);
      },
      (error) => {
        console.error('Error adding Fish', error);
      }
    );
  }
}
