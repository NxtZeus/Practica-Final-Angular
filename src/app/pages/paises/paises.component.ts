// Importaciones necesarias
import { Component, OnInit } from '@angular/core';
import { ServicioPais } from '../../services/paises.service';
import { FormGroup, ReactiveFormsModule, FormsModule, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-pais',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  nuevoPais: FormGroup;
  constructor(private servicioPais: ServicioPais, private formBuilder: FormBuilder) {
    this.nuevoPais = this.formBuilder.group({
      nombre: ['', Validators.required],
      capital: ['', Validators.required],
      poblacion: [0, Validators.required],
      idioma_principal: ['', Validators.required]
    });
  }
  paises: any[] = [];
  
  
  // Aquí puedes usar los métodos del servicio de país, por ejemplo:
  obtenerPaises() {
    this.servicioPais.obtenerPaises(0, 100).subscribe(
      data => {
        this.paises = data.paises;
      }
    );
  }
  ngOnInit(): void {
    this.obtenerPaises();
  }
  agregarPais() {
    if (this.nuevoPais.valid) {
      this.servicioPais.agregarPais(this.nuevoPais.value).subscribe(
        (data: any) => {
          this.paises.push(data.pais);
          this.nuevoPais.reset();
        }
      );
    }
  }

  eliminarPais(nombre: string) {
    this.servicioPais.eliminarPais(nombre).subscribe(
      () => {
        this.paises = this.paises.filter(pais => pais.nombre !== nombre);
      }
    );
  }
}
