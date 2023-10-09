import { Estudiante } from './estudiante';

export const ESTUDIANTES: Estudiante[] = [
  {
    id: 1,
    nombre_estudiante: 'Daniel Rivera',
    faltas: 1,
    nota_uno: 40,
    nota_dos: 40,
    nota_tres: 40,
    definitiva: 40+40+40 / 3,
    id_materia: 1,
  },
  {
    id: 2,
    nombre_estudiante: 'Juan Jose',
    faltas: 2,
    nota_uno: 20,
    nota_dos: 20,
    nota_tres: 20,
    definitiva: (20 + 20 + 20) / 3,
    id_materia: 2,
  },
  {
    id: 3,
    nombre_estudiante: 'Pedro',
    faltas: 3,
    nota_uno: 20,
    nota_dos: 35,
    nota_tres: 39,
    definitiva: (20 + 35 + 39) / 3,
    id_materia: 3,
  },
];
