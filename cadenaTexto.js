function CadenaT(){
    var resultado =""

    do{
        var cadena =prompt("Introduce una cadena");
        if(resultado ==""){
            resultado = resultado + cadena;
        }
        else{
            resultado = resultado +"-"+cadena;
        }
    }while(confirm("¿Desea continuar?"))
}