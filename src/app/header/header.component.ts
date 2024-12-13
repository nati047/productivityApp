import { Component } from '@angular/core';

@Component({
  selector: 'prodApp-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userLoggedIn: boolean = false;
  appSection: string = "Calendar";

  constructor() {}
}