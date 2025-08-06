import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  imagen = 'https://i.postimg.cc/L4P8zSwZ/Chat-GPT-Image-26-jul-2025-18-13-29-removebg-preview.png';
}
