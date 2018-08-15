import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { UsuarioService } from "../../providers/usuario";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  correo:string = "";
  contrasena:string = "";
  inicioSesion: any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private _us:UsuarioService ) {

  }

  ingresar(){
    // console.log(this.correo);
    // console.log(this.contrasena);
    this._us.ingresar(this.correo, this.contrasena);
   
  }

}
