import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../services/materia.service';
import { AlertController } from '@ionic/angular';
import { Materia } from '../materia';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
})
export class MateriasPage implements OnInit {
  public mismaterias?: Materia[];

  constructor(
    private materiaService: MateriaService,
    public alertController: AlertController
  ) {}

  getMaterias(): void {
    this.materiaService
      .getMaterias()
      .subscribe((materias) => (this.mismaterias = materias));
  }

  ngOnInit() {
    this.getMaterias();
  }

  async borrarMateria(materia: Materia) {
    const alert = await this.alertController.create({
      header: 'Borrar',
      message: '¿Estás seguro de que quieres borrar la materia?',
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
            this.mismaterias = this.mismaterias?.filter(
              (h) => h !== materia
            );
            this.materiaService.borraMateria(materia).subscribe();
          },
        },
      ],
    });
    await alert.present();
  }
}
