class RedServidor{
    constructor(){
        this.redServidor = new Map();
    }

    agregarRed(nombreRed){
        if(this.redServidor.has(nombreRed) == false){
            this.redServidor.set(nombreRed,[]);
            console.log(`Servidor : [ ${nombreRed} ] se añadio correctamente`)
        }
    }

    conectarRed(Red1,Red2){
        this.agregarRed(Red1);
        this.agregarRed(Red2);

        this.redServidor.get(Red1).push(Red2);
        this.redServidor.get(Red2).push(Red1);
    }

    imprimirRedServidores(){
        console.log(`===RED DE SERVIDORES===`);
        for(let [estacion, conexiones] of this.redServidor){
            console.log(`${estacion} -> Conectado con: [ ${conexiones.join(", ")} ]`);
        }
    }
}

let redServidorLinea1 = new RedServidor();

redServidorLinea1.conectarRed("Servidor-correo","Servidor- BD");


redServidorLinea1.imprimirRedServidores();
