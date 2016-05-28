$(document).ready(function(){
	var topics, container, row;
	topics = [
		{name:"Diseño",img:"images/diseño.jpg"},
		{name:"Juegos",img:"images/juegos.jpg"},
		{name:"Tecnología",img:"images/tecnologia.jpg"},
		{name:"Social",img:"images/social.jpg"},
		{name:"Medio Ambiente",img:"images/medioambiente.jpg"},
		{name:"Estilo de Vida",img:"images/estilodevida.jpg"},
		{name:"Artesania",img:"images/artesania.jpg"},
		{name:"Otros",img:"images/otros.jpg"}];

	container = $(".container-topics");

	topics.forEach(function(elm,ind){
		var t,clone,tr,cloner;

		if(ind % 3 === 0 ){
			tr = document.querySelector("#row-topic-tpl");
			cloner = document.importNode(tr.content, true);
			row = $(cloner);			
			container.append(row);
		}

		t = document.querySelector("#topic-tpl");
		t.content.querySelector("img").src = elm.img; 
		t.content.querySelector("a.button").innerHTML = elm.name;
		clone = document.importNode(t.content, true);
		container.find("div.row").last().append($(clone));
	});
});