import { Component } from '@angular/core';
import { FComponent } from './f/f.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AG';
}
