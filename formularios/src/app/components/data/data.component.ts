import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

    formulario: FormGroup;

    usuario = {
        nombrecompleto: {
            nombre: 'Fernando',
            apellido: 'Herrera'
        },
        correo: 'email@email.com',
        password1: null,
        password2: null
    };

    constructor() {
        this.formulario = new FormGroup({
            nombrecompleto: new FormGroup({
                nombre:     new FormControl(
                                        null,
                                        [
                                            Validators.required,
                                            Validators.minLength(3)
                                        ]),
                apellido:   new FormControl(
                                        null,
                                        [Validators.required,
                                        this.noHerrera
                                    ]),
            }),
            correo:     new FormControl(
                                        null,
                                        [
                                            Validators.required,
                                            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                        ]),
            password1: new FormControl(null, Validators.required),
            password2: new FormControl()
        });
        this.formulario.controls['password2'].setValidators([Validators.required, this.noIgual.bind(this.formulario)]);
        this.formulario.setValue(this.usuario);
    }


    noHerrera(control: FormControl): {[s: string]: boolean} {
        if (control.value === 'herrera') {
            return {
                noHerrera: true
            };
        }
        return null;
    }

    noIgual(control: FormControl): {[s: string]: boolean} {
        const formulario: any = this;
        if (control.value !== formulario.controls['password1'].value) {
            return {
                noiguales: true
            };
        }
        return null;
    }

    guardarCambios() {
        console.log(this.formulario.value);
        console.log(this.formulario);

        // this.formulario.reset(this.usuario);
    }

}
