import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },

      {
        path: 'materias',
        loadChildren: () => import('../materias/materias.module').then(m => m.MateriasPageModule)
      },
      {
        path: 'estudiantes/:id',
        loadChildren: () => import('../estudiantes/estudiantes.module').then(m => m.EstudiantesPageModule)
      },
      {
        path: 'nuevamateria',
        loadChildren: () => import('../nuevamateria/nuevamateria.module').then(m => m.NuevamateriaPageModule)
      },
      {
        path: 'editarmateria/:id',
        loadChildren: () => import('../editarmateria/editarmateria.module').then(m => m.EditarmateriaPageModule)
      },

      {
        path: 'editarestudiante/:id',
        loadChildren: () => import('../editarestudiante/editarestudiante.module').then(m => m.EditarestudiantePageModule)
      },
      {
        path: 'nuevoestudiante',
        loadChildren: () => import('../nuevoestudiante/nuevoestudiante.module').then(m => m.NuevoestudiantePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      },

    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
