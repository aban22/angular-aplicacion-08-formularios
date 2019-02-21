import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

    formulario: FormGroup;

    constructor() {
        this.formulario = new FormGroup({
            nombre:     new FormControl(null,   Validators.required),
            apellido:   new FormControl(null,   Validators.required),
            correo:     new FormControl(
                                        null,
                                        [
                                            Validators.required,
                                            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                        ])
        });
    }

    guardarCambios() {
        console.log(this.formulario.value);
        console.log(this.formulario);
    }

}
