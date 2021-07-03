import { R3BoundTarget } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

interface MenuiItem
{
  texto: string,
  ruta: string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    li {cursor:pointer}
  `
  ]
})
export class SidemenuComponent implements OnInit {

  templateMenu: MenuiItem[] = [
    {
      texto:'Básicos',
      ruta: './template/basicos'
    },
    {
      texto:'Dinámicos',
      ruta: './template/dinamicos'
    },
    {
      texto:'Switches',
      ruta: './template/switches'
    }
  ];

  reactiveMenu: MenuiItem[] = [
    {
      texto:'Básicos',
      ruta: './reactive/basicos'
    },
    {
      texto:'Dinámicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto:'Switches',
      ruta: './reactive/switches'
    }

  ]

  authMenu: MenuiItem[] = [
    {
      texto:'Login',
      ruta: './auth/login'
    },
    {
      texto:'Registro',
      ruta: './auth/registro'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
