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
  imagePaths: string[] = [
    'assets/images/fish/1.jpg',
    'assets/images/fish/12.jpg',
    'assets/images/fish/11.jpg',
    'assets/images/fish/10.jpg',
    'assets/images/fish/2.jpg',
    'assets/images/fish/3.jpg',
    'assets/images/fish/4.jpg',
    'assets/images/fish/5.PNG',
    'assets/images/fish/6.PNG',
    'assets/images/fish/7.jpg',
    'assets/images/fish/8.jpg',
    'assets/images/fish/9.jpg',
  ];

  constructor(private fishService:FishService) {}

  ngOnInit() {
    this.getFishes();
  }

  getFishes() {
    this.fishService.getFishes().subscribe(
      (response) => {
        this.fishes = response.data.map((fish: any, index: number) => ({
          ...fish,
          imageUrl: this.imagePaths[index] || 'assets/images/fish/1.jpg',
        }));
      },
      (error) => {
        console.error('error fetching Fishes', error);
      }
    )
  }
}
