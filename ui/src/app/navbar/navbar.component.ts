import { Component, computed } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {
  username = computed(() => this.sharedService.username())
  constructor(private sharedService:SharedService){}
}
