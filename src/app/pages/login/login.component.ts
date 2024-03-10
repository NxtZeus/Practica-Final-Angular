import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }
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

  userRegex = /^[a-zA-Z0-9]{3,20}$/;
  emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  passwordRegex = /^[a-zA-Z0-9]{6,20}$/;
  errorMessage: string = '';
  userName: string = '';
  userEmail: string = '';
  userPassword: string = '';

  onSubmit(): void {
    if (!this.userRegex.test(this.userName)) {
      this.errorMessage = 'Por favor, introduce un nombre de usuario válido.';
    } else if (!this.emailRegex.test(this.userEmail)) {
      this.errorMessage = 'Por favor, introduce un email válido.';
    } else if (!this.passwordRegex.test(this.userPassword)) {
      this.errorMessage = 'Por favor, introduce una contraseña válida.';
    } else if (this.usuarios[this.userName] && this.usuarios[this.userName].email === this.userEmail && this.usuarios[this.userName].password === this.userPassword) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Usuario, email o contraseña incorrectos.';
    }
  }
}
