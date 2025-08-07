import { Component } from '@angular/core';
import { AuthService } from '../../servicio/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario:string='';
  password:string='';
  error:string='';

  constructor(private authServicio: AuthService,
    private router: Router 
  ){}

  login=()=>{
    const sessionExitosa = this.authServicio.login(this.usuario, this.password)
    if(sessionExitosa){
      const redireccion = localStorage.getItem('redirectUrl') || '/productos';
      localStorage.removeItem('redirectUrl');
      this.router.navigateByUrl(redireccion);
    }else{
      this.error='Usuario o contraseña incorrectos';
    }
  }
}
