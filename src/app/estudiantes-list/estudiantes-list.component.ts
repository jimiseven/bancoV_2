// src/app/estudiantes-list/estudiantes-list.component.ts
import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../estudiantes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estudiantes-list',
  standalone: true, // Esto marca el componente como autónomo
  imports: [CommonModule], // Importa CommonModule para directivas de Angular
  templateUrl: './estudiantes-list.component.html'
})
export class EstudiantesListComponent implements OnInit {
  estudiantes: any[] = [];

  constructor(private estudiantesService: EstudiantesService) {}

  async ngOnInit() {
    this.estudiantes = await this.estudiantesService.getEstudiantes();
  }
}
