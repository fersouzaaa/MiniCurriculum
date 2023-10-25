function somenteLetras(){
    var sDigitos="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZáéíóúÁÉÍÓÚãÃ ";
    //variavel que vai capturar a tecla pressionada
    var cTecla= event.key;
    //a função index of procura dentro da string caso não encontre nada 
    //retorna -1
    if (sDigitos.indexOf(cTecla)==-1){
        return false;
    }else{
        return true;
    }
}
function somenteNumeros(){
    var sDigitos="0123456789()-.,";
    //variavel que vai capturar a tecla pressionada
    var cTecla= event.key;
    //a função index of procura dentro da string caso não encontre nada 
    //retorna -1
    if (sDigitos.indexOf(cTecla)==-1){
        return false;
    }else{
        return true;
    }
}
/*
EXPRESÃO REGULAR- regex
\d - significa qualquer caractere numerico
\D - significa qualquer caractere que nao seja umerico
/g - encontra todas as ocorrencias (global)
^ - corresponde ao incio do texto
$ - corresponde ao final do texto
{n} - pesquisa n ocorrencias correspondentes ao caractere precedido
    \d{5}-\d{3} exemplo do padrao do CEP - o mesmo que \d\d\d\d\d-\d\d\d
{n,m} - executa a n menor correspondencia e a m maior correspondencia
() - agrupamento

http://turing.com.br/material/regex/introducao.html
*/
function mascTel(tel){//mascara para o telefone 
    //remove todos os caracteres não numericos
    tel = tel.replace(/\D/g, "");
    //Coloca parenteses em volta dos dois primeiros digitos
    tel = tel.replace(/^(\d{2})(\d)/g,"($1) $2");
    //coloca o traço depos do quarto caractere do fim para o começo
    tel = tel.replace(/(\d)(\d{4})$/, "$1-$2");
    return tel;
}
function mascCPF(cpf){
    cpf=cpf.replace(/\D/g,"");
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2");
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2");
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    return cpf;
}
function mascRG(rg){
    rg=rg.replace(/\D/g,"");
    rg=rg.replace(/(\d{2})(\d)/,"$1.$2");
    rg=rg.replace(/(\d{3})(\d)/,"$1.$2");
    rg=rg.replace(/(\d{3})(\d{1})$/,"$1-$2");
    return rg;
}
//função para utilizar a mascara
function mascara(objeto,funcao){
    v_obj = objeto;
    v_fun = funcao;
    setTimeout("executaMascara()",1); //executa a cada milisegundo
}
function executaMascara(){
    v_obj.value = v_fun(v_obj.value);
}
//função que executa no carregamento da pagina o mesmo onload do body
window.onload = function (){
    this.document.getElementById ("telefone").onkeyup = function(){mascara(this, mascTel)};
    this.document.getElementById ("cpf").onkeyup = function(){mascara(this, mascCPF)};
    this.document.getElementById ("rg").onkeyup = function(){mascara(this, mascRG)};
}