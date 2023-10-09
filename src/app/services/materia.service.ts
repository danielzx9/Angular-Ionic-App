import { Injectable } from '@angular/core';
import { Materia } from '../materia';
import { MATERIAS } from '../lista-materias';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor() { }

  getMaterias():Observable <Materia[]> {
    return of(MATERIAS);
  }

  borraMateria(materia:Materia|number):Observable<Materia[]>{
    const id = typeof materia === 'number' ? materia:materia.id;
    if (id > -1) {
      MATERIAS.splice(id,1);
    }
    return of(MATERIAS);
  }

  getUnaMateria(id: number):Observable<Materia | undefined>{
    id = Number(id);
    return of(MATERIAS.find(x => x.id === id));
  }

  editarMateria(materia:Materia): Observable<Materia | undefined>{
    let id = Number(materia.id);
    let indice:number = MATERIAS.findIndex(x => x.id === id)
    MATERIAS[indice] = materia;
    return of(MATERIAS[indice]);
  }

  crearNuevo(materia:Materia): Observable<Materia>{
    MATERIAS.push(materia);
    let indice: number = MATERIAS.findIndex(x => x.id === materia.id);
    return of(MATERIAS[indice])
  }
}
