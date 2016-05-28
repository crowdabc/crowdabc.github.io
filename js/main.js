$(document).ready(function(){
	var topics;
	topics = [
		{name:"Diseño",img:"images/diseño.jpg"},
		{name:"Juegos",img:"images/juegos.jpg"},
		{name:"Tecnología",img:"images/tecnologia.jpg"},
		{name:"Social",img:"images/social.jpg"},
		{name:"Medio Ambiente",img:"images/medioambiente.jpg"},
		{name:"Estilo de Vida",img:"images/estilodevida.jpg"},
		{name:"Artesania",img:"images/artesania.jpg"}];


	topics.forEach(function(elm,ind){
		var t = document.querySelector("#topic_tpl");
		t.content.querySelector("img").src = elm.img; 
		t.content.querySelector("a.button").innerHTML = elm.name;
		var clone = document.importNode(t.content, true);
		$(".row-topic").append(clone);
		console.log(elm.name)
	});
});