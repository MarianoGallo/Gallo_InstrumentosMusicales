
let instrumentos = [
    
        { id: 'GE-0001', name: 'MAG Epsilon', imageUrl:'imagenes/MAG_Guitar_03.jpg', descripcion: 'Guitarra adaptable a usuarios con destreza izquierda o derecha.', precio: '$187500', stock: 6 },

        { id: 'BE-0004', name: 'MAG Omega', imageUrl:'imagenes/MAG_bajo_01.jpg', descripcion: 'Bajo adaptable a usuarios con destreza izquierda o derecha.', precio: '$185000', stock: 3 },

        { id: 'GA-0003', name: 'Fender California Newporter', imageUrl:'imagenes/Fender_newporter.jpg', descripcion: 'Guitarra acustica de caja grande para diestros', precio: '$104000', stock: 4 },

        { id: 'PI-0004', name: 'Roland XPS-30', imageUrl:'imagenes/PI-0004.jpg', descripcion: 'Sintetizador Expandible Roland XPS-30 5 octavas', precio: '$104000', stock: 4 },

        { id: 'BT-0004', name: 'TAMA RYTHM', imageUrl:'imagenes/BT-0002.jpg', descripcion: 'BATERIA TAMA RYTHM MATE 5 CUERPOS GLOSS NATURAL - SIN PLATOS', precio: '$185000', stock: 3 },

        { id: 'GE-0002', name: 'Fender Telecaster', imageUrl:'imagenes/GE-0002.jpg', descripcion: 'Guitarra electrica.', precio: '$187500', stock: 6 },
    ];

//export const getFetch = () =>{
export const getFetch = (id) =>{
        return new Promise((resolve, reject) => {
            setTimeout( ()=>{
                //resolve(instrumentos)
                if (id) {
                    resolve(instrumentos.find(producto => producto.id === id))       
                } else {
                    resolve(instrumentos)
                }
            }, 3000)
        })
}
//}
    
let instrumento = { id: 'GE-0001', name: 'MAG Epsilon', imageUrl:'imagenes/MAG_Guitar_03.jpg', descripcion: 'Guitarra adaptable a usuarios con destreza izquierda o derecha.', precio: '$187500', stock: 6 }

export const getFetchOne = () =>{    
    
    return new Promise( (resolve, reject)=>{   
        setTimeout(()=>{
            resolve(instrumento)   
        },3000)    
        
    })
}



/*
const instrumentoRandom = Math.floor(Math.random()*instrumentos.length);
const productoRandom = instrumentos[instrumentoRandom]
*/