// src/app/estudiantes.service.ts
import { Injectable } from '@angular/core';
import { supabase } from './supabase.client';

@Injectable({
  providedIn: 'root',
})
export class EstudiantesService {
  async getEstudiantes() {
    const { data, error } = await supabase.from('estudiantes').select('*');
    if (error) throw error;
    return data;
  }

  async addEstudiante(estudiante: any) {
    const { data, error } = await supabase.from('estudiantes').insert([estudiante]);
    if (error) throw error;
    return data;
  }
}
