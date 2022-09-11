function laCajaDePandora(numero){
    // proximamente escribiremos codigo aquí
    
        //si es par,pasar a binario:
        if (numero%2 === 0){
            
            let numeroBinario=[];
            
            while(numero > 0){
                numeroBinario.unshift(numero%2);
                numero=Math.floor(numero/2);
            }
            return numeroBinario.join("");
        }
        else{
             let arrHex="";
             let hexas = [10, 11, 12, 13, 14, 15]
             let hexasLet = ['A', 'B', 'C', 'D', 'E', 'F']

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
             //asfasg
             //fasfayh
             ///asgh
             //holis
        }

    }
    console.log(laCajaDePandora(451))
