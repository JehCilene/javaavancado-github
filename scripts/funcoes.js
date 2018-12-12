function mostrar(){
	alert('Mensagem Github');
}
function mostrar2(){
	alert('Allianz - Nova Mensagem');
}
var btn = document.getElementById("botao");
btn.addEventListener('click', mostrar);

var bt2 = document.getElementById("botao2");
bt2.addEventListener('click', mostrar2);