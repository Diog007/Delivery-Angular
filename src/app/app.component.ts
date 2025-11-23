import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterFixedComponent } from './components/footer-fixed/footer-fixed.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterFixedComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conceitos-basicos';
}
