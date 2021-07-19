function pago(){
  var pais = document.getElementById("pais").value
  var lugar = document.getElementById("lugar").value
  switch(pais){
    case "Camaro":{
      switch(lugar){
        case "Camaro":{
        }
        break;
        case "Corvette":{
        }
        break;
        case "Impala":{
        }
        break;
        case "Colorado":{
        }
        break;
        default:{
        }
      }
    }
    break;
    case "Corvette":{
      switch(lugar){
        case "Camaro":{
        }
        break;
        case "Corvette":{
        }
        break;
        case "Impala":{
        }
        break;
        case "Colorado":{
        }
        break;
        default:{
        }
      }
    }
    break;
    case "Impala":{
      switch(lugar){
        case "Camaro":{
        }
        break;
        case "Corvette":{
        }
        break;
        case "Impala":{
        }
        break;
        case "Colorado":{
        }
        break;
        default:{
        }
      }
    }
    break;
    case "Colorado":{
      switch(lugar){
        case "Camaro":{
        }
        break;
        case "Corvette":{
        }
        break;
        case "Impala":{
        }
        break;
        case "Colorado":{
        }
        break;
        default:{
        }
      }
    }
    break;
    default:{
    }
  }
  document.getElementById("contenido1").innerHTML="Su pais de viaje : " + pais;
  document.getElementById("contenido2").innerHTML="Lugar de destino : " + lugar;
}