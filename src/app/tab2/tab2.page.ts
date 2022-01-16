import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // variables
  nombre: string;
  tip_documento: string;
  num_documento: number;
  telefono: number;
  direccion: string;
  nombre_producto: string;
  descripcion_producto: string;
  factura: string;
  extra1: string;
  extra2: string;
  extra3: string;
  subtotal: string;
  precio_neto: number;
  iva: number;
  total: number;

  // funcion que capturan los inputs
  datos_pagos = {
    nombre: '',
    tip_documento:'cc',
    num_documento: '',
    telefono: '',
    direccion: '',
    nombre_producto: '',
    descripcion_producto: '',
    factura: '',
    precio_neto: '',
    iva: '',
    extra1: '',
    extra2: '',
    extra3: '',
    total: '',
  };

  constructor() {}

  ngOnInit(){}


  //llaves epayco
  window: any = window;
  handler = this.window.ePayco.checkout.configure({
    key: "d42ae82ca25bd9b0f3877a574183c4d7", //public_key d42ae82ca25bd9b0f3877a574183c4d7
    test: false
  });


  epayco(){
    console.log('Form submit');
    console.log( this.datos_pagos );

    var data = {
        //Parametros compra (obligatorio)
        name: this.datos_pagos.nombre_producto,
        description: this.datos_pagos.descripcion_producto,
        invoice: this.datos_pagos.factura,
        currency: "cop",
        amount: this.datos_pagos.precio_neto+this.datos_pagos.iva,
        tax_base: this.datos_pagos.precio_neto,
        tax: this.datos_pagos.iva,
        country: "co",
        lang: "en",
        //Onpage="false" - Standard="true"
        external: "false",

        //Atributos opcionales
        extra1: this.datos_pagos.extra1,
        extra2: this.datos_pagos.extra2,
        extra3: this.datos_pagos.extra3,
        confirmation: "http://localhost/test-david/confirmation.php",
        response: "http://localhost/test-david/response.php",

        //Atributos cliente
        name_billing: this.datos_pagos.nombre,
        address_billing: this.datos_pagos.direccion,
        type_doc_billing: this.datos_pagos.tip_documento,
        mobilephone_billing: this.datos_pagos.telefono,
        number_doc_billing: this.datos_pagos.num_documento,

        //atributo deshabilitación metodo de pago
        //methodsDisable: ["TDC", "PSE","SP","CASH","DP"]
        methodsDisable: [], //habilito los otros metodos de pago
    };
    this.handler.open(data);
    console.log( data );
  }

}
