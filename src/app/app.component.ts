import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrameComponent } from './core/layaout/components/frame/frame.component';
import { TitleComponent } from "./core/layaout/components/title/title.component";
import { NavMenuComponent } from "./features/sidemenu/components/navmenu/navmenu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FrameComponent, TitleComponent, NavMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'arielAlvaroPortfolio';
}
