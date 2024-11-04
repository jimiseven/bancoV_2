// src/app/estudiante-form/estudiante-form.component.ts
import { Component } from '@angular/core';
import { EstudiantesService } from '../estudiantes.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estudiante-form',
  standalone: true, // Marca el componente como autónomo
  imports: [CommonModule, FormsModule], // Importa FormsModule para ngModel
  templateUrl: './estudiante-form.component.html'
})
export class EstudianteFormComponent {
  nombre = '';
  apellido = '';
  mail = '';
  carrera = '';

  constructor(private estudiantesService: EstudiantesService) {}

  async addEstudiante() {
    await this.estudiantesService.addEstudiante({
      nombre: this.nombre,
      apellido: this.apellido,
      mail: this.mail,
      carrera: this.carrera,
    });
    alert('Estudiante agregado exitosamente');
    // Limpia el formulario
    this.nombre = '';
    this.apellido = '';
    this.mail = '';
    this.carrera = '';
  }
}
