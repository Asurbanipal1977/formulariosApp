import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group(
    {
      nombre: [,[Validators.required, Validators.minLength(3)]],
      favoritos: this.fb.array([
          ['Metal Gear',Validators.required],
          ['Fifa 2021',Validators.required]
      ],[Validators.required, Validators.minLength(2)])
    }
  );

  nuevoFavorito: FormControl = this.fb.control('',[Validators.required]);

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  campoNoEsValido ( campo: string){
     return this.miFormulario.controls[campo].invalid &&
            this.miFormulario.controls[campo].touched
  }

  agregarFavorito()
  {
    if (this.nuevoFavorito.invalid) return;

    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ) );

    this.nuevoFavorito.reset();
  }

  eliminar(index: number) {
    console.log(index);
    this.favoritosArr.removeAt(index);
  }

  guardar(){

    if (this.miFormulario.invalid)
    {
      this.miFormulario.markAllAsTouched();
      return;
    }

    //this.miFormulario.reset();

  }

}
