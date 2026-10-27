
class Transaccion{

    constructor(){
        this.operacion = new Map();
    }

    agregarOperacion(nombreOperacion){
        if(this.operacion.has(nombreOperacion) == false){
            this.operacion.set(nombreOperacion,[]);
        }
    }

    //Conectar dos cuentas, indicando el monto
    Transaccion(cuenta1, cuenta2, monto){
        this.agregarOperacion(cuenta1);
        
        this.operacion.get(cuenta1).push({cuenta2: cuenta2, Monto: monto});
    }

    imprimirTransaccion(){
        console.log("=====Imprimir transaccion=====");
        
        for(let [det, detaa] of this.operacion){
            let detalleTransacciones =  detaa.map(detalle => `${detalle.cuenta2} por el monto de: S/.(${detalle.Monto} )`).join(" , ");
            console.log(` ${det} -> Envio fondos a :  ${detalleTransacciones} `);
        }
    }
}

let HistorialBancario = new Transaccion();
HistorialBancario.Transaccion("cuenta-1","cuenta-2",5760);
HistorialBancario.Transaccion("cuenta-3","cuenta-4",8500);
HistorialBancario.imprimirTransaccion();