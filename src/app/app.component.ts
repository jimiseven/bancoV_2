import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesListComponent } from './estudiantes-list/estudiantes-list.component';
import { EstudianteFormComponent } from './estudiante-form/estudiante-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EstudiantesListComponent, EstudianteFormComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
