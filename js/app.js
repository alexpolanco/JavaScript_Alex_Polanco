var Calculadora = {
  num1  : 0,
  num2  : 0,
  init : function(num1, num2){
    var resultado = 0
  },
  actualizaResultado: function(nuevoResultado){
    resultado = nuevoResultado
  },
  sumar: function(){
    var resultado = this.num1 + this.num2
    this.actualizaResultado(resultado)
  },
  restar: function(){
    var resultado = this.num1 - this.num2
    this.actualizaResultado(resultado)
  },
  multiplicar: function(){
    var resultado = this.num1 * this.num2
    this.actualizaResultado(resultado)
  },
  dividir: function(){
    var resultado = this.num1 / this.num2
    this.actualizaResultado(resultado)
  },
  resultado: function() {
    return resultado
  },
  pantalla : function(valor){
    var mostrar = document.getElementById('display')
    mostrar.innerText = valor
  },
  efecto_boton  : function(){
    var boton = document.createElement("style")
    boton.innerHTML = "img.tecla:active {border: 2px inset transparent;}"
    document.head.appendChild(boton)
  },
  operaciones : function(){
    var mostrar = document.getElementById('display')
    // Creamos un array vacio
    var botones_pulsados = new Array()
    // Capturamos el click y lo pasamos a una funcion
    document.onclick = CapturarBotonPulsado
    // Contador de clicks
    var i = mostrar.innerText.length
    var c_puntos = 0
    var c_signos = 0

    function CapturarBotonPulsado(e) {
    	// Funcion para capturar el click del raton
    	var id_boton
    	if (e != null) {
    		// Si ha hecho click sobre un destino, lo leemos
    		id_boton = e.target.id
        i++
    	}
    	// Añadimos el elemento al array de elementos
    	botones_pulsados.push(id_boton)
    	// Una prueba con salida en consola
    	//console.log("Has hecho clic en el botón: " + id_boton)
      console.log("Clic realizados: " + i)

      //Salida en pantalla
      if(id_boton == "on"){
        mostrar.innerText = 0
        i = 0
        c_puntos = 0
        c_signos = 0
      } else
      //Mostrar elementos siempre y cuando no sobrepase la cantidad de ocho caracteres
      if ((mostrar.innerText.length - c_puntos - c_signos) < 8 || id_boton == "sign") {
        // Operaciones sobre los números
        switch (id_boton) {
          case "punto":
            if(c_puntos == 0){
              mostrar.innerText += "."
              c_puntos++
            }
            break
          case "sign":
            if (id_boton = "sign") {
              if(c_signos > 0){
                mostrar.innerText = mostrar.innerText.replace("-", "")
                c_signos = 0
              } else {
                if(mostrar.innerText != "0"){
                  mostrar.innerText = "-" + mostrar.innerText
                  c_signos++
                }
              }
            }
            break
          case "dividido":
            mostrar.innerText += "/"
            break
          case "por":
            mostrar.innerText += "*"
            break
          case "menos":
            mostrar.innerText += "-"
            break
          case "mas":
            mostrar.innerText += "+"
            break
          case "igual":
            mostrar.innerText += "="
            break
          case "raiz":
            //No es necesario implementarlo en este proyecto
            break
          default:
            //Introducir los números
            if(mostrar.innerText.length == 1 && mostrar.innerText == 0){
              mostrar.innerText = id_boton
            } else {
              mostrar.innerText += id_boton
            }
            break
        }
        console.log("Puntos:" + c_puntos + " Signos:" + c_signos + "Total:" +(mostrar.innerText.length-c_puntos-c_signos));
      }
    }
  }
}
Calculadora.efecto_boton()
Calculadora.operaciones()
