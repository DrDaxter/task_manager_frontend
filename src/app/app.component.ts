import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavarComponent } from "./navar-component/navar/navbar.component";
import { SidebarComponent } from "./navar-component/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavarComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'taskManager';
}
