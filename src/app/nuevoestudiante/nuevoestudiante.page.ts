import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Estudiante } from '../estudiante';
import { EstudianteService } from '../services/estudiante.service';

@Component({
  selector: 'app-nuevoestudiante',
  templateUrl: './nuevoestudiante.page.html',
  styleUrls: ['./nuevoestudiante.page.scss'],
})
export class NuevoestudiantePage implements OnInit {

  nuevoEstudiante = {} as Estudiante;

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private estudianteService: EstudianteService

  ) { }

  ngOnInit() {
  }
  regresar(): void{
    this.router.navigate(["tabs/materias"]);
  }
  ionViewDidEnter(){
    this.nuevoEstudiante = {} as Estudiante;
  }

  guardar(nuevoEstudiante:any){
    this.mostrarMensaje("Guardando...");
    this.nuevoEstudiante.id = Number(this.nuevoEstudiante.id);
    this.estudianteService.crearNuevo(nuevoEstudiante).
    subscribe(estudiante =>{
      this.router.navigate(["tabs/materias"]);
      this.mostrarMensaje("Estudiante registrado");
    })
  }
  mostrarMensaje(mensaje:string){
    this.toastCtrl.create({
      message:mensaje,
      duration: 20000
    }).then(toast => toast.present());
  }


}
