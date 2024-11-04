// src/app/app.component.ts
import { Component } from '@angular/core';
import { EstudiantesListComponent } from './estudiantes-list/estudiantes-list.component';
import { EstudianteFormComponent } from './estudiante-form/estudiante-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EstudiantesListComponent, EstudianteFormComponent], // Importa los componentes autónomos aquí
  templateUrl: './app.component.html'
})
export class AppComponent {}
