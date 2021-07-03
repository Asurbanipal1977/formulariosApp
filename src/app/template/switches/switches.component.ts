import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  @ViewChild("miFormulario") miFormulario!: NgForm;

  persona = {
    genero: '',
    notificaciones: false
  }
  terminosYCondiciones: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  terminosSeleccionado(){
    return this.miFormulario?.controls.terminos?.errors && 
           !this.miFormulario?.controls.terminos?.pristine;
  }

}
