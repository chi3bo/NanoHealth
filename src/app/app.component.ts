import { Component } from '@angular/core';
import { SignupComponent } from "./layout/auth/signup/signup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ SignupComponent , SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NanoHealth';
}
