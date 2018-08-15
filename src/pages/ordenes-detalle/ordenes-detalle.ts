import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { CarritoService } from "../../providers/carrito";

@Component({
  selector: 'page-ordenes-detalle',
  templateUrl: 'ordenes-detalle.html',
})
export class OrdenesDetallePage {

  orden:any = {}

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private _cs:CarritoService ) {

    this.orden = this.navParams.get("orden");

  }

  borrar_orden( orden_id:string ){
    console.log(orden_id);
    this._cs.borrar_orden(orden_id);
    this.viewCtrl.dismiss(true);

  }


}
