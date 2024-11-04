import { Component, Output, EventEmitter } from '@angular/core';
import { EstudiantesService } from '../estudiantes.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estudiante-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './estudiante-form.component.html'
})
export class EstudianteFormComponent {
  @Output() estudianteAgregado = new EventEmitter<void>();

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

    // Emitir el evento después de guardar el estudiante
    this.estudianteAgregado.emit();

    // Limpia el formulario
    this.nombre = '';
    this.apellido = '';
    this.mail = '';
    this.carrera = '';
  }
}
