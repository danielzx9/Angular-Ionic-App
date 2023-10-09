import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Materia } from '../materia';
import { MateriaService } from '../services/materia.service';

@Component({
  selector: 'app-editarmateria',
  templateUrl: './editarmateria.page.html',
  styleUrls: ['./editarmateria.page.scss'],
})
export class EditarmateriaPage implements OnInit {

  id : any; 
  materia? : Materia;
  seleccionado? : Materia;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private materiaService: MateriaService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params)=>{
      this.materiaService.getUnaMateria(params['id'])
        .subscribe(seleccionado =>{
          this.seleccionado = seleccionado;
        })
    })
  }

  regresar(): void{
    this.router.navigate(["tabs/materias"]);
  }

  editar(materia:Materia):void{
    this.materiaService.editarMateria(materia).subscribe(() => {
      this.mostrarMensaje("Registro exitoso");
      this.regresar();
    })
  }

  mostrarMensaje(mensaje:string){
    this.toastCtrl.create({
      message:mensaje,
      duration:2000
    }).then(toast => toast.present());
  }

}
