import { Component } from '@angular/core';
import * as epayco from 'epayco-sdk-node';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  //Varibles 
  nombres: string;
  apellidos: string;
  tipodedocumento: string[]=["CC","CE","PPN", "LIC", "NIT", "TI", "DNI"];
  numerodedocumento: number;
  correoelectronico: string;
  direccion: string;
  ciudad: string;
  telefono: number;
  celular: number;
  valor_a_pagar: number;
  nombretitulartarjeta: string;
  numerotarjetatc: number;
  mes_expiracion: number;
  ano_expiracion: number;
  cvc_tc: number;
  cuotas: number;

  //Capturar imputs formulario
  datos_pagos_tc = {
    nombres: '',
    apellidos: '',
    tipodedocumento:'CC',
    numerodedocumento: '',
    correoelectronico: '',
    direccion: '',
    ciudad: '',
    telefono: '',
    celular: '',
    valor_a_pagar: '',
    nombretitulartarjeta: '',
    numerotarjetatc: '',
    mes_expiracion: '',
    ano_expiracion: '',
    cvc_tc: '',
    cuotas: '',
  }

  constructor() {}

  ngOnInit(){ }

  

  EpaycoSdk(){
    console.log('Form submit');
    console.log( this.datos_pagos_tc);

    var require: any;

    var epayco = require("epayco-node-master")({
      apiKey: "d42ae82ca25bd9b0f3877a574183c4d7", //public_key d42ae82ca25bd9b0f3877a574183c4d7
      privateKey: "7eba53ab76dbb2c39a7435a79d27b6f8", //private_key 7eba53ab76dbb2c39a7435a79d27b6f8
      lang: "ES",
      test: true,
      });

      var credit_info = {
        "card[number]": this.datos_pagos_tc.numerotarjetatc,
        "card[exp_year]": this.datos_pagos_tc.ano_expiracion,
        "card[exp_month]": this.datos_pagos_tc.mes_expiracion,
        "card[cvc]": this.datos_pagos_tc.cvc_tc
        };

        epayco.token.create(credit_info).then(function (token) {
          console.log(token);
  
          // var customer_info = {
          //     token_card: token.id,
          //     name: this.datos_pagos_tc.nombres,
          //     last_name: this.datos_pagos_tc.apellidos,
          //     email: this.datos_pagos_tc.correoelectronico, 
          //     default: true,
          //     city: this.datos_pagos_tc.ciudad,
          //     address: this.datos_pagos_tc.direccion,
          //     phone: this.datos_pagos_tc.telefono,
          //     cell_phone: this.datos_pagos_tc.celular,
          // };
  
      }).catch(function (err) {
          console.log("err: " + err);
      });



  }

}
