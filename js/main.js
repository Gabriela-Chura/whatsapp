//Lógica 

function Chat(_nombre, _imagen)
{
	this.nombre =  _nombre;
	this.imagenURL = _imagen;
	this.ultimoMensaje = "";
	this.horaUltimoMensaje = '';
	//this.mensaje = [];
	/*this.borrarMensajes = function()
	{
		alert("borrado");
	};*/
}


var dataListaChats = [
	new Chat("Raymi Saldomando", 'image/raymi.jpg'),
	new Chat("Mariana Costa", 'image/mariana.jpg'),
	new Chat("Ana María Martinez Franklin", 'image/anamaria.jpg'),
	new Chat("Rodulfo Prieto", 'image/rodulfo.jpg')
];

//Parte visual

var liListItem = null; 

function init(){
	
	initChatList()
}

function initChatList(){
	var elListaChats = document.getElementById("lista-chats");
	
	for (var i in dataListaChats){
		
		var htmlChatItem = '<li><div class="avatar">' +
			'<img src="' + dataListaChats[i].imagenURL +  '" alt="" class="wh-44">' +
			'<h4 class="w-contact-name">' + dataListaChats[i].nombre + '</h4>' +
			'<p class="w-last-message" id="mensaje">' + dataListaChats[i].ultimoMensaje + '</p>' +
			'</div>' +
			'<div class="time" id="hora">' + dataListaChats[i].horaUltimoMensaje + '</div></li>';
		
		//dataListaChats[i].borrarMensajes();
		elListaChats.innerHTML += htmlChatItem;
	}
	
	
	setEventsChatList();
	
}

function setEventsChatList(){
	var listaChats = document.getElementById('lista-chats');
	var arrListItems = listaChats.getElementsByTagName('li');
	
	for (var i=0; i<arrListItems.length; i++){
		
		arrListItems[i].addEventListener('click', onChatItemClick);
	}
}

function onChatItemClick(evt){
	
	var contactName= evt.currentTarget.getElementsByClassName('w-contact-name')[0].textContent;
	var imgURL = evt.currentTarget.getElementsByClassName("wh-44")[0].src;
	
	actualizarCabeceraChat(contactName, imgURL, "contectado");

}


function onMensajeKey(evt){
	
	if(evt.keyCode == 13){
		
var elMensajes=document.getElementById("mensajes");
		crearChat(elMensajes.value);
		crearMensaje(elMensajes.value); 
	elMensajes.value=""; 
	}
}

function crearMensaje(_mensaje){
	
	var htmlMensajeIn = '<div class="w-message w-message-in">'+
		'<div class="w-message-text">' + '<h5 class="green-1">Maria Paula Rivarola</h5>' + '<p>Jajaja Sii finalmente se corto!!</p>' + '<div class="time">11:13</div>'+'</div>' + '</div>';
	
	var d = new Date();
	var htmlMensajeOut = '<div class="w-message w-message-out">'+'<div class="w-message-text">'+'<p>'+_mensaje+'</p>'+'<div class="time">'+d.getHours()+':'+d.getMinutes()+'</div>'+'</div>'+'</div>';
	
	var mensaje = liListItem.getElementsByClassName("w-last-message")[0];
	mensaje.innerHTML = _mensaje;
	
	//var mensaje = liListItem.getElementById("mensaje");
	
	var elConversacion = document.getElementById("chat");
	elConversacion.innerHTML += htmlMensajeOut; 
	elConversacion.scrollTop= elConversacion.scrollHeight;
} 

/*function crearListaChats(){
	
}

function borrarPanel(){
	

		if()
		{
			
		}else{
			
		}

}*/

function actualizarCabeceraChat(_contactName, _imageURL, _estado){
	
	var chatHeader = document.getElementById("chat-header");
	chatHeader.getElementsByClassName('w-contact-name')[0].innerHTML=_contactName;
	chatHeader.getElementsByClassName('w-users-messages')[0].innerHTML=_estado;
	chatHeader.getElementsByTagName('img')[0].src=_imageURL;
}


function crearChat(_mensaje){
	
	var elListaChats = document.getElementById("lista-chats");
	
	if(liListItem == null){
		liListItem = document.createElement('LI'); 
	
	
	var htmlChatItem ='<div class="avatar">'+'<img src="image/logocodeacademy.png" alt="" class="wh-44">'+'<h4 class="w-contact-name">Laboratoria Perú</h4>'+'<p class="w-last-message" id="mensaje">'+_mensaje+'</p>'+'</div><div class="time" id="hora">14:27</div>';
	
	liListItem.innerHTML=htmlChatItem;
elListaChats.insertBefore(liListItem,elListaChats.childNodes[0]);
	
		}
	
	setEventsChatList();
}


var search = document.getElementById("search"),
	listaContacto= document.getElementById("lista-chats"),
  contacto =listaContacto.getElementsByClassName("w-contact-name"),
   forEach = Array.prototype.forEach;

search.addEventListener("keyup", function(e){
   var choice = this.value;
 
   forEach.call(contacto, function(f){
       if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
           f.parentNode.parentNode.style.display = "none";
           
           
       else
          f.parentNode.parentNode.style.display = "block";      
   });
},
false);



/*
function Chat()
{
	this.nombre = '';
	this.people = [];
	this.messages = [];
	this.chatAvatar = '';
}
function Person(_name, _avatar)
{
	this.name = _name;
	this.avatar = _avatar;
}
function Message(_message, _sender)
{
	this.message = _message;
	this.sender = _sender;
	this.received = false;
}
function Whatsapp()
{
	this.chats = [];
	this.selectedChat = null;
	this.searchChat		= function(_keyword){};     
    this.getChatFromId	= function(_chatId){};
	this.drawChatList	= function(_htmlTarget){
		var ulChatList = document.getElementById('chat-list');

		for (var i in this.chats) {
			console.log(this.chats[i].messages);
			var htmlChatList = '<li class="listChat" ><div class="avatar">' +
					'<img src="' + this.chats[i].chatAvatar + '" alt="" class="wh-44">' +
					'<h4 class="w-contact-name">' + this.chats[i].nombre +'</h4>' +
					'<p class="w-last-message">' + this.chats[i].messages[this.chats[i].messages.length-1].message + '</p>' +
				'</div>' +
				'<div class="time">03/01/2016</div>' +
			'</li>';
			ulChatList.innerHTML += htmlChatList;
		}
	};
    
    
	this.drawMessageList= function(){
		var divChat = document.getElementById('chat');
		divChat.innerHTML = '';

		for (var i in this.selectedChat.messages) {
			if (object.hasOwnProperty(i)) {
				console.log(this.selectedChat.messages[i]);
				this.sendMessage(this.selectedChat.messages[i], false);
			}
		}
	};
	this.getLastMessage = function(){
		return this.selectedChat.messages[this.selectedChat.messages.length-1];
	};
	this.sendMessage	= function(_message, _in){
       var fecha = new Date();
       var hora=fecha.getHours();
       var minuto=fecha.getMinutes();
        if(minuto<10){
            minuto='0'+minuto;
        }
       
        
		var htmlMessageIn = '<div class="w-message w-message-in"><div class="w-message-text"><p>' + _message.message + '</p><div class="time">' + hora + ':' + minuto + '</div></div></div>';
		var htmlMessageOut = '<div class="w-message w-message-out"><div class="w-message-text"><p>' + _message.message + '</p><div class="time">' + hora + ':' + minuto + '</div></div></div>';
		var divChat = document.getElementById('chat');
        
       
		this.selectedChat.messages.push(_message);

		if(_in)
		{
			divChat.innerHTML += htmlMessageIn;
		}else{
			divChat.innerHTML += htmlMessageOut;
		}

		divChat.scrollTop = divChat.scrollHeight;
	};
}






var wapp = new Whatsapp();

var me = new Person('Gerson');
var zare = new Person('Zare');
var liset = new Person('Liset');

var chat = new Chat();
chat.nombre = "Chat";
chat.people.push(zare);
chat.chatAvatar = 'https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png';

wapp.chats.push(chat);


var chat2 = new Chat();
chat2.nombre = "Liset";
chat2.chatAvatar = 'https://upload.wikimedia.org/wikipedia/en/5/55/Xbox_NXE_avatar.png';
chat2.people.push(liset);

wapp.chats.push(chat2);

wapp.selectedChat = chat;

wapp.sendMessage(new Message('Hola', zare),zare);
wapp.sendMessage(new Message('Que tal?', me));
wapp.sendMessage(new Message('Yo muy bien, tu que tal?', zare),zare);


wapp.selectedChat = chat2;

wapp.sendMessage(new Message('Hola', me));
wapp.sendMessage(new Message('Tienes un peine?', liset), liset);

wapp.drawChatList();
console.log(wapp.getLastMessage().sender);


window.onload = init;

var inputMessage;
var divChat;
var chatPanel;

function init()
{
	inputMessage = document.getElementById('mensajes');
	divChat = document.getElementById('chat');
	//chatPanel = document.querySelector('.w-chat-panel');

	inputMessage.addEventListener('keyup', onInputKeyUp);
}

function onInputKeyUp(evt)
{
	console.log(evt.keyCode);
	if(evt.keyCode == 13)
	{
		wapp.sendMessage(new Message(evt.target.value, me));
		evt.target.value = '';
	}
}


var search = document.getElementById("search"),
   contacto = document.getElementsByClassName("listChat"),
   forEach = Array.prototype.forEach;

search.addEventListener("keyup", function(e){
   var choice = this.value;
 
   forEach.call(contacto, function(f){
       if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
           f.style.display = "none";
           
           
       else
          f.style.display = "block";        
   });
},
false);


 var contacto = document.getElementsByClassName("listChat");
contacto[0].addEventListener("click", chatCero);
contacto[1].addEventListener("click", chatUno);
contacto[2].addEventListener("click", chatDos);
contacto[3].addEventListener("click", chatTres);

function chatCero(){
    document.getElementById("chat").innerHTML="";
    document.getElementById("avatar").innerHTML="";
    
    document.getElementById("avatar").innerHTML = '<img src="image/logocodeacademy.png" alt=""><h4 class="w-contact-name">Laboratoria Perú</h4><ul class="w-users-messages"><li>Ana María, </li><li>Aldo, </li><li>Gian, </li><li>Mariana, </li><li>Papu, </li><li>Tú</li></ul>';
}

function chatUno(){
    document.getElementById("chat").innerHTML="";
    document.getElementById("avatar").innerHTML="";
    
    document.getElementById("avatar").innerHTML = '<img src="image/raymi.jpg" alt="" class="wh-44"><h4 class="w-contact-name">Raymi Saldomando</h4><p>Ult. vez hoy</p>';
}

function chatDos(){
    document.getElementById("chat").innerHTML="";
    document.getElementById("avatar").innerHTML="";
    
    document.getElementById("avatar").innerHTML = '<img src="https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png" alt="" class="wh-44"><h4 class="w-contact-name">Chat</h4><p>Ult. vez hoy</p>';
}

function chatTres(){
    document.getElementById("chat").innerHTML="";
    document.getElementById("avatar").innerHTML="";
    
    document.getElementById("avatar").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/en/5/55/Xbox_NXE_avatar.png" alt="" class="wh-44"><h4 class="w-contact-name">Liset</h4><p>Ult. vez hoy</p>';
}

*/










