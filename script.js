


var user=[

    {
        nombre:"jorge",
        apellido: "eliecer",
        edad:24,
        hobies:"música",
        sexo:"masculino",
        imagen: "avatar1.png"
    },
    {
        nombre:"miguel",
        apellido: "eliecer",
        edad:24,
        hobies:"deporte",
        sexo:"masculino",
        imagen: "avatar2.png"
    },
    {
        nombre:"Duvan",
        apellido: "eliecer",
        edad:24,
        hobies:"música",
        sexo:"masculino",
        imagen: "avatar3.png"
    },
    {
        nombre:"steven",
        apellido: "eliecer",
        edad:24,
        hobies:"sexo",
        sexo:"masculino",
        imagen: "avatar4.png"
    },
    {
        nombre:"maicol",
        apellido: "eliecer",
        edad:24,
        hobies:"deporte",
        sexo:"masculino",
        imagen: "avatar5.png"
    }
    
]



var btnsearc = this.document.getElementById("search");

var result = this.document.getElementById('result');
var hobbie = document.getElementById('inputPassword')
var genero = document.getElementById("inputState");


function  search() {
  
    result.innerHTML="";
    var totalusuario= user.length;
    
  
   
    for(var i=0; i<totalusuario; i++){
       
        if(hobbie.value===user[i].hobies ){
            result.innerHTML+=' <div class="row">\
            <div class="col-lg-5 col-md-6 pink my-3">\
              <img src="images/'+user[i].imagen +'" />\
              <div class="person-info">\
                <div>'+user[i].nombre+'</div>\
                <div>'+user[i].sexo+'</div>\
                <div>'+user[i].hobies+'</div>\
              </div>\
              <button type="button" class="btn btn-primary">añadir amigos</button>\
            </div>\
          </div>';

        }
       
    }
    


}

btnsearc.addEventListener("click", search);


