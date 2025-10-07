import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavarComponent } from './app-shell/navar-component/navar/navbar.component';
import { SidebarComponent } from './app-shell/navar-component/sidebar/sidebar.component';
import { LoaderComponent } from "./app-shell/share/component/loader/loader.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavarComponent, SidebarComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskManager';
}
