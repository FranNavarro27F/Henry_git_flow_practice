function laCajaDePandora(numero){
    // proximamente escribiremos codigo aqui

    let arrBin = ''
    let arrHex = ''
    let hexas = [10, 11, 12, 13, 14, 15]
    let hexasLet = ['A', 'B', 'C', 'D', 'E', 'F']

    if(numero % 2 === 0){

        while(numero > 0){
            let rest = numero % 2;
            arrBin = rest + arrBin;
            numero = Math.floor(numero/2);
        }

    return arrBin

    }else{
        while(numero > 0){
            let rest = numero % 16;
            if(rest > 9){
                let index = hexas.indexOf(rest)
                arrHex = hexasLet[index] + arrHex
                numero = Math.floor(numero/16)
            }else{
                arrHex = rest + arrHex
                numero = Math.floor(numero/16)
            }
        }
    return arrHex
    }
    }

console.log(laCajaDePandora(451))
    