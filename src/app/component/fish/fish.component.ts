import { Component } from '@angular/core';
import {
  NgbDropdownModule,
  NgbModule,
  NgbCollapseModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdown-basic',
  standalone: true,
  imports: [NgbDropdownModule, NgbModule, NgbCollapseModule],
  templateUrl: './fish.component.html',
})
export class FishComponent {
  // This is for the collapse example
  public isCollapsed = false;
  public isCollapsed2 = false;

  collapsed = true;
}
