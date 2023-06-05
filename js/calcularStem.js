function calcula_densidad(){
    var radio= 20;
    var tiempo= 4.3;
    var v= 2*Math.PI*(radio*10*10*10);
    var velocidad= v/tiempo;
    var a=4*Math.PI*Math.PI*(radio*10*10*10);
    var aceleracion=a/(tiempo*tiempo);
    var d=document.getElementById("resultadoA");
    d.innerHTML='La velocidad es = '+velocidad+' metros/segundo Aceleracion= '+aceleracion+' metros/segundo^2';
    
}