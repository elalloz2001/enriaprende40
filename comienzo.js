 
  var persona; //variable que toma los datos de la persona seleccionada al azar desde la pagina 
  url = 'https://randomuser.me/api/'; //pagina desde donde se extraen datos
  fetch(url)
    .then(response => response.json()) 
    //devuelve el json de una sola persona en forma aleatoria
    .then(data => {

      // Extracción del nombre
      persona=data.results[0]; // en var persona tenemos los resultados obtenidos
      let element_nombre = document.getElementById("nombre");
      cadena_nombre = 
      persona.name["title"] + " " + 
      persona.name["first"] + " " + 
      persona.name["last"];
      element_nombre.innerHTML = cadena_nombre;
      // FIN Extracción del nombre
      // Extracción de foto
      let element_foto = document.getElementById("foto");
      let foto_web = persona.picture["medium"]; //extrae la foto tamaño media
      element_foto.innerHTML = "<img src='" + foto_web + "' />"; 
      // FIN extraccion de foto

      // Extracción de los otros datos personales (genero, ciudad, email y telefono)
      let element_genero = document.getElementById("genero");
      let element_ciudad = document.getElementById("ciudad");
      let element_email = document.getElementById("email");
      let element_telefono = document.getElementById("telefono");
      cadena_genero = "GENERO: " + persona.gender;
      cadena_ciudad = "LOCALIZACION: " + persona.location["city"] + " " + persona.location["state"];
      cadena_email = "EMAIL: " + persona.email;
      cadena_telefono = "TELEFONO: " + persona.phone;
      element_genero.innerHTML = cadena_genero;
      element_ciudad.innerHTML = cadena_ciudad;
      element_email.innerHTML = cadena_email;
      element_telefono.innerHTML = cadena_telefono;
      mostrarPersona(); //muestra el apellido solamente, en menù experiencia
    });
     
    function mostrarPersona() 
    {
     var contenedorInfo = document.getElementById("infoPersona");
     contenedorInfo.innerHTML = JSON.stringify(persona.name["title"]+" "+persona.name["last"]+" "+persona.name["first"]);
    }

// OMIENZO function activar pestañas de menu-->
    function activar(evt, opcion) 
     {
      var i, contenido, tablinks;
      contenido = document.getElementsByClassName("contenido");
      for (i = 0; i < contenido.length; i++) {
        contenido[i].style.display = "none";
    }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(opcion).style.display = "block";
  evt.currentTarget.className += " active";
}
// FINAL function activar las pestañas del menu--> 