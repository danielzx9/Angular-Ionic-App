import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../services/materia.service';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Materia } from '../materia';

@Component({
  selector: 'app-nuevamateria',
  templateUrl: './nuevamateria.page.html',
  styleUrls: ['./nuevamateria.page.scss'],
})
export class NuevamateriaPage implements OnInit {

  nuevaMateria = {} as Materia;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private materiaService: MateriaService
  ) { }

  ngOnInit() {
  }

  regresar(): void{
    this.router.navigate(["tabs/materias"]);
  }

  ionViewDidEnter(){
    this.nuevaMateria = {} as Materia;
  }

  guardar(nuevaMateria:any){
    this.mostrarMensaje("Guardando...");
    this.nuevaMateria.id = Number(this.nuevaMateria.id);
    this.materiaService.crearNuevo(nuevaMateria).
    subscribe(materia =>{
      this.router.navigate(["tabs/materias"]);
      this.mostrarMensaje("Materia registrada");
    })
  }

  mostrarMensaje(mensaje:string){
    this.toastCtrl.create({
      message:mensaje,
      duration: 20000
    }).then(toast => toast.present());
  }

}
