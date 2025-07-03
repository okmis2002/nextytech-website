import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  name: string = 'Fernanda';
  surname: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';

  getFormData() {
      console.log('has dado click en el boton');
      
      const data = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone
      }
      console.log('Los datos del formulario son: ', data);
    }

}
