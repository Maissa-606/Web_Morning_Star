function pago(){
  var origen = document.getElementById("num1").value;
  var destino = document.getElementById("num2").value;
  var finicio = document.getElementById("num3").value;
  var ffinal = document.getElementById("num4").value;
  var ncomprador = document.getElementById("num5").value;
  var ninos = Number(document.getElementById("num6").value);
  var joven = Number(document.getElementById("num7").value);
  var adulto = Number(document.getElementById("num8").value);
  var totalp = ninos + joven + adulto;
  var sub = 0;
  var isv, total;
  document.getElementById("rnum1").innerHTML="Pais de viaje : "+ origen;
  document.getElementById("rnum1").style.display="block";
  document.getElementById("rnum2").innerHTML="Destino : "+ destino;
  document.getElementById("rnum2").style.display="block";
  document.getElementById("rnum3").innerHTML="Fecha inicial : "+ finicio;
  document.getElementById("rnum3").style.display="block";
  document.getElementById("rnum4").innerHTML="Fecha final : "+ ffinal;
  document.getElementById("rnum4").style.display="block";
  document.getElementById("rnum5").innerHTML="Cliente : "+ ncomprador;
  document.getElementById("rnum6").style.display="block";
  if(ninos>0){
    document.getElementById("rnum6").innerHTML="Cantidad de niños : "+ ninos;
    sub += (250 * ninos);
    document.getElementById("rnum6").style.display="block";
  }
  else{
    document.getElementById("rnum6").style.display="none";
  }
  if(joven>0){
     document.getElementById("rnum7").innerHTML="Cantidad de jovenes : "+ joven;
     sub += (500 * joven);
     document.getElementById("rnum7").style.display="block";
  }
  else{
    document.getElementById("rnum7").style.display="none";
  }
  if(adulto>0){
    document.getElementById("rnum8").innerHTML="Cantidad de adultos : "+ adulto;
    sub += (1000 * adulto);
    document.getElementById("rnum8").style.display="block";
  }
  else{
    document.getElementById("rnum8").style.display="none";
  }
  document.getElementById("rnum9").innerHTML="Cantidad de personas : "+ totalp;
  document.getElementById("rnum9").style.display="block";
  document.getElementById("rnum10").innerHTML="Sub-total : L. "+ sub;
  document.getElementById("rnum10").style.display="block";
  isv= sub * 0.15;
  document.getElementById("rnum11").innerHTML="15% ISV : L. "+ isv;
  document.getElementById("rnum11").style.display="block";
  total = sub + isv;
  document.getElementById("rnum12").innerHTML="Gran total: L. "+ total;
  document.getElementById("rnum12").style.display="block";
  return 0;
}
function borrador(){
  borrar.reset();
  document.getElementById("rnum1").style.display="none";
  document.getElementById("rnum2").style.display="none";
  document.getElementById("rnum3").style.display="none";
  document.getElementById("rnum4").style.display="none";
  document.getElementById("rnum5").style.display="none";
  document.getElementById("rnum6").style.display="none";
  document.getElementById("rnum7").style.display="none";
  document.getElementById("rnum8").style.display="none";
  document.getElementById("rnum9").style.display="none";
  document.getElementById("rnum10").style.display="none";
  document.getElementById("rnum11").style.display="none";
  document.getElementById("rnum12").style.display="none";
  return 0;
}