import { Component } from '@angular/core';
import { HuntService } from 'src/app/service/hunt.service';

@Component({
  selector: 'app-hunt',
  templateUrl: './hunt.component.html',
  styleUrls: ['./hunt.component.scss']
})
export class HuntComponent {

  constructor(private huntService: HuntService) {}

  addHunt(hunt: any) {
    console.log(hunt)
    this.huntService.addHunt(hunt).subscribe(
      (response) => {
        console.log('Hunt added successfully', response);
      },
      (error) => {
        console.error('Error adding Hunt', error);
      }
    );
  }
}
