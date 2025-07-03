import { Component } from '@angular/core';
import IFormulario from 'src/app/models/IFormulario';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  name: string = 'Fernanda';
  surname: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';

  getFormData() {
    console.log('has dado click en el boton');
    
    const data: IFormulario = {
      name: this.name,
      surname: this.surname,
      email: this.email,
      phone: this.phone
    }
    console.log('Los datos del formulario son: ', data);
  }

}
