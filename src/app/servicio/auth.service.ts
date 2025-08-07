import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';

 

  constructor() { }

  private UsuarioValido={
  usuario:'admin',
  password:'admin1234',
  }

  login=(usuario:string, password:string)=>{
    if(usuario==this.UsuarioValido.usuario && password==this.UsuarioValido.password){
      localStorage.setItem('user', usuario)
      return true;
    }
      return false;
  }
  sesionIniciada = ()=>{
    return localStorage.getItem('user') !=null;
  }

  logout=()=>{
    localStorage.removeItem('user');
  }
}
