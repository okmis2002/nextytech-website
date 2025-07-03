import { Component } from '@angular/core';
import IWorth from "../../models/IWorth";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  public worths: IWorth[] = [
    {
      title: 'Innovación',
      description: 'Estamos constantemente buscando nuevas y mejores formas de hacer las cosas, fomentando asi una' +
          ' cultura de creatividad y experimentación.'
    },
    {
      title: 'Calidad',
      description: 'Nos comprometemos a entregar productos y servicios de calidad. Contamos con un proceso de' +
          ' control de calidad riguroso enfocado en satisfacer a nuestros clientes.'
    },
    {
      title: 'Colaboración',
      description: 'Fomentamos un entorno de trabajo colaborativo en el que todos se sientan cómodos compartiendo ideas y' +
          ' trabajando juntos para lograr nuestros objetivos comunes.'
    },
    {
      title: 'Enfoque en el cliente',
      description: 'Ponemos a nuestros clientes en primer lugar, comprendemos sus necesidades y expectativas,' +
          ' esforzandonos por proporcionar una experiencia excepcional.'
    },
    {
      title: 'Integridad',
      description: 'Actuamos con honestidad y ética en todas nuestras interacciones a fin de merecer la confianza de' +
          ' nuestros clientes, colaboradores y socios.'
    },
    {
      title: 'Aprendizaje continuo',
      description: 'Fomentamos una cultura de aprendizaje animando así a nuestros colaboradores a desarrollar sus' +
          ' habilidades y conocimientos logrando una evolución constante en su dinámicas de trabajo.'
    },
    {
      title: 'Pasión',
      description: 'Estamos formados por personas apasionadas por el software y la tecnología, esto se hace evidente en' +
          ' el trabajo que realizamos.'
    },
    {
      title: 'Responsabilidad',
      description: 'Somos responsables de nuestras acciones y decisiones, nos comprometemos a tener un impacto positivo' +
          ' en el mundo.'
    }
  ]
}
