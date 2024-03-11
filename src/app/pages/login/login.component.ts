import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { } // Constructor del componente que inyecta el servicio Router

  // Objeto con información de usuarios
  usuarios: any = {
    'Ruben': {
      email: 'ruben@email.com',
      password: 'Ruben1234'
    },
    'Pablo': {
      email: 'pablo@email.com',
      password: 'Pablo1234'
    },
    'Use': {
      email: 'use@email.com',
      password: 'Use1234'
    }
  };

  // Expresiones regulares para validar entrada de usuario, email y contraseña
  userRegex = /^[a-zA-Z0-9]{3,20}$/;
  emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  passwordRegex = /^[a-zA-Z0-9]{6,20}$/;

  // Variable para almacenar mensajes de error
  errorMessage: string = '';

  // Variables para almacenar datos de usuario ingresados en el formulario
  userName: string = '';
  userEmail: string = '';
  userPassword: string = '';

  // Método para manejar el envío del formulario
  onSubmit(): void {
    // Validación de nombre de usuario
    if (!this.userRegex.test(this.userName)) {
      this.errorMessage = 'Por favor, introduce un nombre de usuario válido.';
    } 
    // Validación de dirección de correo electrónico
    else if (!this.emailRegex.test(this.userEmail)) {
      this.errorMessage = 'Por favor, introduce un email válido.';
    } 
    // Validación de contraseña
    else if (!this.passwordRegex.test(this.userPassword)) {
      this.errorMessage = 'Por favor, introduce una contraseña válida.';
    } 
    // Verificación de credenciales de usuario
    else if (this.usuarios[this.userName] && 
             this.usuarios[this.userName].email === this.userEmail && 
             this.usuarios[this.userName].password === this.userPassword) {
      // Redirección al componente 'home' si las credenciales son correctas
      this.router.navigate(['/home']);
    } 
    // Mensaje de error en caso de credenciales incorrectas
    else {
      this.errorMessage = 'Usuario, email o contraseña incorrectos.';
    }
  }
}
