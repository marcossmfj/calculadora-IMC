var pesovalor = document.getElementById('entradaPeso');
var alturavalor = document.getElementById('entradaAltura');
var btSaida = document.getElementById('btinput');
var valorIMC =document.getElementById('saidaIMC');

var calculo;
var peso;
var altura;


function capturaImc (){
    var peso1 = pesovalor.value;
        peso = peso1;


    var altura1 = alturavalor.value;
    var alturaConvert = altura1.replace(/,/, '.' );  
    altura = alturaConvert;

    calculo = peso / (altura * altura);

    convertido = calculo.toFixed(2) 



    

    if(convertido < 16.0 ){
       document.getElementById( 'saidaImc').value = ('O Imc é: ') +  convertido +(' Magreza Grau III');
    }else if(convertido > 16.0 && convertido < 16.9){
        document.getElementById( 'saidaImc').value = ('O Imc é: ') +  convertido +(' Magreza Grau II');
    }else if(convertido > 17.0 && convertido < 18.4){
        document.getElementById( 'saidaImc').value = ('O Imc é: ') +  convertido +(' Magreza Grau I');
    }else if(convertido > 18.5 && convertido <  24.9){
        document.getElementById( 'saidaImc').value = ('O Imc é: ') +  convertido +(' Adequado');
    }else if(convertido > 25.0 && convertido <  29.9){
        document.getElementById( 'saidaImc').value = ('O Imc é: ') +  convertido +(' Pré-Obeso');
    }else if(convertido > 30.0 && convertido <   34.9){
        document.getElementById( 'saidaImc').value =('O Imc é: ') +  convertido + (' Obesidade Grau I');
    }else if(convertido > 35.0 && convertido <   39.9){
        document.getElementById( 'saidaImc').value = ('O Imc é: ') +  convertido + ('Obesidade Grau II');
    }else if (convertido > 40.0){
        document.getElementById( 'saidaImc').value = ('O Imc é: ') +  convertido +(' Obesidade Grau III');
    }else{
        document.getElementById( 'saidaImc').value = ('Digite um Valor Valido');
    }




    //document.getElementById('saidaImc').value = convertido;
    
}


btSaida.onclick = function(){
    capturaImc ();
} 






