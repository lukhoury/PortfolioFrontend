import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';	
import{ Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://http://localhost:52758/api'; //aca iria el url que sea
  token;

  constructor(private http: HttpClient, private router: Router) { }
  
  login(email: string, password: string) {
    this.http.post(this.url + '/authenticate', { email: email, password: password })
      .subscribe((resp: any) => {
        //redireccioanamos al usuario a su perfil
        this.router.navigate(['profile']);

        //guardamos el token en localStorage
        localStorage.setItem('auth_token', resp.token);
      })
    
  }

  //para cerrar sesion eliminamos el token del localStorage
  logout() { 
    localStorage.removeItem('token');
  }

  //un servicio para verificar si existe la sesion
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
  
}
