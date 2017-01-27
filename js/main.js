
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



/*
var texto=document.getElementById("mensajes");
texto.addEventListener("keyup", enviarMensaje); 


function enviarMensaje(evento){
    if(event.keyCode==13 && texto.value.length!=0){
        agregarMensaje();
    }
}


function agregarMensaje(){
   var mensaje=texto.value;
   var div=document.createElement("div");
   div.className="w-message w-message-out";
   var divDos=document.createElement("div");
   divDos.className="w-message-text";
   var divTres=document.getElementById("chat");
   var text=document.createElement("p");
   var time=document.createElement("div");
   time.className="time";
   var fecha=new Date();
   var hora=fecha.getHours();
   var minuto=fecha.getMinutes();
    if(minuto<10){
        minuto='0'+minuto;
    }
    divTres.scrollTop=divTres.scrollHeight; 
   time.innerHTML=hora+":"+minuto;
   text.innerHTML=mensaje;
   div.appendChild(divDos);
   divDos.appendChild(text);
   divDos.appendChild(time);
   divTres.appendChild(div);
   
   texto.value="";
   texto.focus();
}

var search = document.getElementById("search"),
   contacto = document.getElementsByTagName("h4"),
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






*/









