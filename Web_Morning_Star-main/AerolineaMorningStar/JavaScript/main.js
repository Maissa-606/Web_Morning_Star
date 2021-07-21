function pago(){
  document.getElementById("foto").style.display="none";
  document.getElementById("titulo").style.display="block";
  document.getElementById("linea1").style.display="block";
  document.getElementById("linea2").style.display="block";
  document.getElementById("linea3").style.display="block";
  document.getElementById("linea4").style.display="block";
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
  document.getElementById("rnum1").innerHTML="Pais de Origen : "+ origen;
  document.getElementById("rnum1").style.display="block";
  document.getElementById("rnum2").innerHTML="Pais de Destino : "+ destino;
  document.getElementById("rnum2").style.display="block";
  document.getElementById("rnum3").innerHTML="Fecha Inicial : "+ finicio;
  document.getElementById("rnum3").style.display="block";
  document.getElementById("rnum4").innerHTML="Fecha Final : "+ ffinal;
  document.getElementById("rnum4").style.display="block";
  document.getElementById("rnum5").innerHTML="Cliente : "+ ncomprador;
  document.getElementById("rnum5").style.display="block";
  document.getElementById("rnum9").style.color="black";
  if(ninos>0){
    document.getElementById("rnum6").innerHTML="Cantidad de niños : "+ ninos;
    sub += (250 * ninos);
    document.getElementById("rnum6").style.display="block";
    if(joven>0){
      document.getElementById("rnum7").innerHTML="Cantidad de jovenes : "+ joven;
      sub += (500 * joven);
      document.getElementById("rnum7").style.display="block";
      if(adulto>0){
        document.getElementById("rnum8").innerHTML="Cantidad de adultos : "+ adulto;
        sub += (1000 * adulto);
        document.getElementById("rnum8").style.display="block";
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
      }
      else{
        document.getElementById("rnum8").style.display="none";
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
      }
    }
    else{
      document.getElementById("rnum7").style.display="none";
      if(adulto>0){
        document.getElementById("rnum8").innerHTML="Cantidad de adultos : "+ adulto;
        sub += (1000 * adulto);
        document.getElementById("rnum8").style.display="block";
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
      }
      else{
        document.getElementById("rnum8").style.display="none";
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
      }
    }
  }
  else{
    document.getElementById("rnum6").style.display="none";
    if(joven>0){
      document.getElementById("rnum7").innerHTML="Cantidad de jovenes : "+ joven;
      sub += (500 * joven);
      document.getElementById("rnum7").style.display="block";
      if(adulto>0){
        document.getElementById("rnum8").innerHTML="Cantidad de adultos : "+ adulto;
        sub += (1000 * adulto);
        document.getElementById("rnum8").style.display="block";
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
      }
      else{
        document.getElementById("rnum8").style.display="none";
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
      }
    }
    else{
      document.getElementById("rnum7").style.display="none";
      if(adulto>0){
        document.getElementById("rnum8").innerHTML="Cantidad de adultos : "+ adulto;
        sub += (1000 * adulto);
        document.getElementById("rnum8").style.display="block";
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
      }
      else{
        document.getElementById("rnum8").style.display="none";
        document.getElementById("rnum9").innerHTML="Digite la cantidad de personas ! ! !";
        document.getElementById("rnum9").style.display="block";
        document.getElementById("rnum9").style.color="red";
        document.getElementById("rnum10").style.display="none";
        document.getElementById("rnum11").style.display="none";
        document.getElementById("rnum12").style.display="none";
      }
    }
  }
  return 0;
}
function borrador(){
  document.getElementById("foto").style.display="block";
  document.getElementById("linea1").style.display="none";
  document.getElementById("linea2").style.display="none";
  document.getElementById("linea3").style.display="none";
  document.getElementById("linea4").style.display="none";
  document.getElementById("titulo").style.display="none";
  document.getElementById("num5").value="";
  document.getElementById("num6").value="";
  document.getElementById("num7").value="";
  document.getElementById("num8").value="";
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
function traspaso(){
  var pais = document.getElementById("pais").value;
  localStorage.setItem("text1",pais);
  var lugar = document.getElementById("lugar").value;
  localStorage.setItem("text2",lugar);
  var start1 = document.getElementById("start1").value;
  localStorage.setItem("text3",start1);
  var start2 = document.getElementById("start2").value;
  localStorage.setItem("text4",start2);
  return false;
}