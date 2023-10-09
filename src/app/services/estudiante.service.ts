import { Injectable } from '@angular/core';
import { Estudiante } from '../estudiante';
import { ESTUDIANTES } from '../lista-estudiantes';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor() { }

  getEstudiantePorMateria(id_materia: number): Observable<Estudiante[]> | undefined{
    id_materia = Number(id_materia);
    return of(ESTUDIANTES.filter(x => x.id_materia === id_materia));
  }

  borrarEstudiante(estudiante:Estudiante|number):Observable<Estudiante[]>{
    const id = typeof estudiante === 'number' ? estudiante:estudiante.id;
    if (id > -1) {
      ESTUDIANTES.splice(id,1);
    }
    return of(ESTUDIANTES);
  }
  getUnaMateria(id: number):Observable<Estudiante | undefined>{
    id = Number(id);
    return of(ESTUDIANTES.find(x => x.id === id));
  }
  crearNuevo(estudiante:Estudiante): Observable<Estudiante>{
    ESTUDIANTES.push(estudiante);
    let indice: number = ESTUDIANTES.findIndex(x => x.id === estudiante.id);
    return of(ESTUDIANTES[indice])
  }

  editarMateria(estudiante:Estudiante): Observable<Estudiante | undefined>{
    let id = Number(estudiante.id);
    let indice:number = ESTUDIANTES.findIndex(x => x.id === id)
    ESTUDIANTES[indice] = estudiante;
    return of(ESTUDIANTES[indice]);
  }
}
