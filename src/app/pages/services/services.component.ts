import { Component } from '@angular/core';
import IService from "../../models/IService";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  public services: IService[] = [
    {
      title: 'Desarrollo de software',
      description: 'Creamos soluciones personalizadas que se ajustan a sus necesidades específicas y objetivos comerciales.',
      callToAction: () => {
        console.log('Desarrollo de software')
      }
    },
    {
      title: 'Desarrollo web y móvil',
      description: 'Diseñamos y desarrollamos sitios web y aplicaciones móviles que son atractivos, fáciles de usar y optimizados para el rendimiento.',
      callToAction: () => {
        console.log('Desarrollo web y móvil')
      }
    },
    {
      title: 'Integración de sistemas',
      description: 'Conectamos las soluciones desarrolladas para que trabajen sin problemas y mejoren la eficiencia.',
      callToAction: () => {
        console.log('Integración de sistemas')
      }
    },
    {
      title: 'Consultoría de software',
      description: 'Brindamos asesoría experta para ayudarle a elegir la mejor solución de software para su negocio.',
      callToAction: () => {
        console.log('Consultoría de software')
      }
    },
    {
      title: 'Soporte y mantenimiento de software',
      description: 'Ofrecemos soporte continuo para asegurarnos de que el software funcione sin problemas y esté actualizado.',
      callToAction: () => {
        console.log('Soporte y mantenimiento de software')
      }
    }
  ]
}
