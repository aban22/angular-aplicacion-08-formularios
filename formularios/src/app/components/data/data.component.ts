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
            nombre: new FormControl('Fernando'),
            apellido: new FormControl(),
            correo: new FormControl()
        });
    }

    guardarCambios() {
        console.log(this.formulario.value);
    }

}
