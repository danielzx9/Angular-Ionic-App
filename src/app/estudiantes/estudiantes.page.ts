import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute,Router, ParamMap,Params } from '@angular/router';
import { EstudianteService } from '../services/estudiante.service';
import { MateriaService } from '../services/materia.service';
import { Estudiante } from '../estudiante';
import { Materia } from '../materia';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {

  id:any;
  seleccionado?:Materia;
  public estudiantes?:Estudiante[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private materiaService: MateriaService,
    private estudianteService: EstudianteService,
    public alertController: AlertController
  ) { }
  

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.materiaService.getUnaMateria(params['id']).subscribe(selecionado => {
        this.seleccionado = selecionado;
      });
    this.estudianteService.getEstudiantePorMateria(params["id"])?.subscribe(estudiantes => {
      this.estudiantes = estudiantes;
    })
    });
  }

  regresar(){
    this.router.navigate(['/tabs/materias']); 
  }

  async borrarEstudiante(estudiante: Estudiante) {
    const alert = await this.alertController.create({
      header: 'Borrar',
      message: '¿Estás seguro de que quieres borrar el estudiante?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancela borrado');
          },
        },
        {
          text: 'Si',
          handler: (blah) => {
            this.estudiantes = this.estudiantes?.filter(
              (h) => h !== estudiante
            );
            this.estudianteService.borrarEstudiante(estudiante).subscribe();
          },
        },
      ],
    });
    await alert.present();
  }

}
