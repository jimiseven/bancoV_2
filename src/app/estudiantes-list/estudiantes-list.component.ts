// src/app/estudiantes-list/estudiantes-list.component.ts
import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../estudiantes.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estudiantes-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './estudiantes-list.component.html'
})
export class EstudiantesListComponent implements OnInit {
  estudiantes: any[] = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'mail', 'carrera']; // Define las columnas a mostrar

  constructor(private estudiantesService: EstudiantesService) {}

  async ngOnInit() {
    this.estudiantes = await this.estudiantesService.getEstudiantes();
  }
}
