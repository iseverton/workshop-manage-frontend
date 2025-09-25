import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tab-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tab-menu.html',
  styleUrl: './tab-menu.css',
})
export class TabMenu {}
