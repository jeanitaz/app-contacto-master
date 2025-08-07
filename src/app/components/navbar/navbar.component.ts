import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../servicio/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  imagen = 'https://i.postimg.cc/L4P8zSwZ/Chat-GPT-Image-26-jul-2025-18-13-29-removebg-preview.png';
  constructor(public authServicio: AuthService, private router: Router) { }
  logout=()=> {
    this.authServicio.logout();
    this.router.navigate(['/login']);
  }
}
