// reduce 
//                   que retorna                    extra
// forEach              nada            
// map                  nuevo array               lo que yo retorne sera un elemento del nuevo array
// filter                nuevo array                lo que yo retorne es la condicion que deben cumplir los nuevos elements del array 
// every                 booleano                   retorno la condicion que deben cumplr los elementos 
// some                 boolean                     retorno la condicion que debe cumplir al menos un elemento 
// find                  un elemento                encontrar el primer elemento que cumple una condicion 


// reduce recibe dos parametros: una funcion y OTRA COSA 
// Array.reduce((acumuladora, valorActual) => {}, otraCosa) 

// la funcion de reduce tiene dos parametros obligatorios: acumuladora y valorActual
// retorna un solo valor, definido por mi

const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let acumuladora = 0
for (let i = 0; i < notas.length; i++) {
  console.log("acumuladora", acumuladora)
  console.log("nota actual", notas[i])
  acumuladora += notas[i]
}

console.log(acumuladora)

// reduce recibe dos parametros: una funcion, y el valor inicial de la acumuladora
// esa funcion recibe a su vez, dos parametros: la acumuladora y el valorActual
// la acumuladora inicia en el valor que especificamos, y valor Actual inicia en el primer elemento del array
// en cada vueta, la acumuladora es lo que retorne en la vuelta anterior
// y valorActual es el actual elemento del array
// reduce retorna el ultimo valor de la acumuladora 

const numbers = [6, 1, 34, 94, 3, 17];

const resultadoDelReduce = numbers.reduce((acumuladora, valorActual) => {
  console.log("----")
  console.log("acumuladora", acumuladora)
  console.log("valorActual", valorActual)
  return acumuladora * valorActual
}, 1)

console.log(resultadoDelReduce)


const nombres = [
    {
      nombre: "Caro",
      edad: 12
    },
    {
      nombre: "Maca",
      edad: 25
    },
    {
      nombre: "Ana",
      edad: 105
    },
  ]
  
  const resultado = nombres.reduce((acc, curr) => {
    console.log("acc", acc)
    console.log("curr", curr)
    return acc + curr.nombre
  }, '')
  
  console.log(resultado)