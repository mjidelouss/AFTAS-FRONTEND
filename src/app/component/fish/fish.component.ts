import { Component } from '@angular/core';
import { FishService } from 'src/app/service/fish.service';
import { NgFor } from '@angular/common';
import {
  NgbDropdownModule,
  NgbModule,
  NgbCollapseModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-dropdown-basic',
  standalone: true,
  imports: [NgbDropdownModule, NgbModule, NgbCollapseModule, NgFor],
  templateUrl: './fish.component.html',
})
export class FishComponent {
  // This is for the collapse example
  public isCollapsed = false;
  public isCollapsed2 = false;
  collapsed = true;

  fishes!:any[];

  constructor(private fishService:FishService) {}

  ngOnInit() {
    this.getFishes();
  }

  getFishes() {
    this.fishService.getFishes().subscribe(
      (response) => {
        this.fishes = response.data;
      },
      (error) => {
        console.error('error fetching Fishes', error);
      }
    )
  }
}
