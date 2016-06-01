$(document).ready(function(){
	var topics, container, row;
	topics = [
		{name:"Diseño",img:"images/diseño.jpg", url:"#"},
		{name:"Juegos",img:"images/juegos.jpg", url:"#"},
		{name:"Tecnología",img:"images/tecnologia.jpg", url:"#"},
		{name:"Social",img:"images/social.jpg", url:"social.html"},
		{name:"Medio Ambiente",img:"images/medioambiente.jpg", url:"#"},
		{name:"Estilo de Vida",img:"images/estilodevida.jpg", url:"#"},
		{name:"Artesania",img:"images/artesania.jpg", url:"#"},
		{name:"Otros",img:"images/otros.jpg", url:"#"}];

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
		t.content.querySelector("a.button").href = elm.url;
		clone = document.importNode(t.content, true);
		container.find("div.row").last().append($(clone));
	});
});