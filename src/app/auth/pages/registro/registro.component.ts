import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  constructor( private fb: FormBuilder, private vs: ValidatorService, private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset(
      {
        nombre: 'Miguel Ángel Martínez',
        email: 'test1@test.com',
        username: 'test1',
        password: '123456',
        password2: '123456'
      }
    );
  }

  get emailErrorMsg(): string{

    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.required)  return 'El email es obligatorio';
    else if (errors?.pattern) return 'El campo tiene un formato de correo incorrecto';
    else if (errors?.emailTomado) return 'El correo ya existe';

    return "";
  }

  miFormulario: FormGroup = this.fb.group(
    {
      nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)] ],
      email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator] ],
      username: ['', [Validators.required, this.vs.noPuedeSerStrider] ],
      password: ['', [Validators.required, Validators.minLength(6)] ],
      password2: ['', [Validators.required] ],
    }, {
      validators: [this.vs.camposIguales('password','password2')]
    }
  )


  campoNoValido ( campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }


  submitFormulario ()
  {
    console.log(this.miFormulario.value);

    if (this.miFormulario.invalid)
    {
      this.miFormulario.markAllAsTouched();
      return;
    }
  }

}
