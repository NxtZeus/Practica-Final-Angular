// Importaciones necesarias
import { Component, OnInit } from '@angular/core';
import { ServicioPais } from '../../services/paises.service';
import { FormGroup, ReactiveFormsModule, FormsModule, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pais', // Selector del componente
  standalone: true, // Indica que el componente es independiente y no necesita otros componentes para funcionar
  imports: [ReactiveFormsModule, FormsModule], // Importa los módulos necesarios para el formulario reactivo
  templateUrl: './paises.component.html', // URL del archivo de plantilla HTML asociado al componente
  styleUrls: ['./paises.component.css'] // URL del archivo de estilos CSS asociado al componente
})
export class PaisesComponent implements OnInit {
  nuevoPais: FormGroup; // FormGroup para el formulario de agregar país

  constructor(private servicioPais: ServicioPais, private formBuilder: FormBuilder) {
    // Inicialización del FormGroup con sus controles y validadores
    this.nuevoPais = this.formBuilder.group({
      nombre: ['', Validators.required],
      capital: ['', Validators.required],
      poblacion: [0, Validators.required],
      idioma_principal: ['', Validators.required]
    });
  }

  paises: any[] = []; // Arreglo para almacenar los países

  // Método para obtener la lista de países
  obtenerPaises() {
    this.servicioPais.obtenerPaises(0, 100).subscribe(
      data => {
        this.paises = data.paises; // Asigna la lista de países obtenida del servicio
      }
    );
  }

  ngOnInit(): void {
    this.obtenerPaises(); // Llama al método para obtener la lista de países al inicializar el componente
  }

  // Método para agregar un nuevo país
  agregarPais() {
    if (this.nuevoPais.valid) { // Verifica si el formulario es válido
      this.servicioPais.agregarPais(this.nuevoPais.value).subscribe(
        (data: any) => {
          this.paises.push(data.pais); // Agrega el nuevo país a la lista de países
          this.nuevoPais.reset(); // Reinicia el formulario
        }
      );
    }
  }

  // Método para eliminar un país
  eliminarPais(nombre: string) {
    this.servicioPais.eliminarPais(nombre).subscribe(
      () => {
        // Filtra los países para eliminar el país con el nombre especificado
        this.paises = this.paises.filter(pais => pais.nombre !== nombre);
      }
    );
  }
}
