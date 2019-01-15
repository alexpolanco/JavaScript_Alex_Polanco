var Calculadora = {
  init : function(){
    self = this
    op = ""
    total = n1 = n2 = id_boton = c_puntos = c_signos = c_ops = 0

    this.efecto_boton()
    this.capturar_boton()
  },
  efecto_boton  : function(){
    var boton = document.createElement("style")
    boton.innerHTML = "img.tecla:active {border: 2px inset transparent;}"
    document.head.appendChild(boton)
  },
  leer_numeros  : function(){
    if(mostrar.innerText.length == 1 && mostrar.innerText == 0){
      mostrar.innerText = id_boton
    } else {
      if(mostrar.innerText.length <= 7)
          mostrar.innerText += id_boton
    }
  },
  pre_operacion : function(id_boton){
    op = id_boton
    c_puntos = 0
    if(c_ops == 0){
      n1 = mostrar.innerText
    } else {
      c_ops--
    }
    mostrar.innerText = ""
  },
  mas: function(){
    total = parseFloat(n1) + parseFloat(n2)
    return total
  },
  menos: function(){
    total = parseFloat(n1) - parseFloat(n2)
    return total
  },
  por: function(){
    total = parseFloat(n1) * parseFloat(n2)
    return total
  },
  dividido: function(){
    total = parseFloat(n1) / parseFloat(n2)
    return total
  },
  punto : function(){
    if(c_puntos == 0){
      mostrar.innerText += "."
      c_puntos++
    }
  },
  cambiar_signo:  function(){
    if(c_signos > 0 || mostrar.innerText == 0 ){
      mostrar.innerText = mostrar.innerText.replace("-", "")
      n1 = mostrar.innerText
      c_signos = 0
    } else {
      mostrar.innerText = "-" + mostrar.innerText
      n1 = mostrar.innerText
      c_signos++
    }
  },
  inicializar_variables: function(){
    // Inicializar las variables
    c_puntos = c_signos = c_ops = n1 = n2 = mostrar.innerText = 0;
  },
  igual : function(){
    if(c_ops == 0){
      n2 = mostrar.innerText
      c_ops++
    }

    // Sumar, restar, multiplicar o dividir los números introducidos
    switch (op) {
      case "mas":
        mostrar.innerText = self.mas()
        break
      case "menos":
        mostrar.innerText = self.menos()
        break
      case "por":
        mostrar.innerText = self.por()
        break
      case "dividido":
        mostrar.innerText = self.dividido()
        break
      default:
        break
    }

    total = String(total).substring(0,8)
    mostrar.innerText = total
    n1 = total
  },
  capturar_boton : function(){
    mostrar = document.getElementById('display')

    var botones_pulsados = new Array()
    // Capturamos el click y lo pasamos a la funcion CapturarBotonPulsado
    document.onclick = operaciones_por_boton

    function operaciones_por_boton(e) {

    	if (e != null) {
    		// Si se ha hecho click sobre un botón, lo leemos
    		id_boton = e.target.id
    	}
    	// Añadimos el elemento al array de elementos
    	botones_pulsados.push(id_boton)

      // Operaciones sobre los botones
      switch (id_boton) {

        // Operación cuando se pulse el botón on
        case "on":
          self.inicializar_variables()
        break

        // Operación cuando se pulse el botón punto
        case "punto":
          self.punto()
          break

        // Operación cuando se pulse el botón signo
        case "sign":
          self.cambiar_signo()
          break

        // Operación cuando se pulse el botón dividido
        case "dividido":
          self.pre_operacion(id_boton)
          break

        // Operación cuando se pulse el botón por
        case "por":
          self.pre_operacion(id_boton)
          break

        // Operación cuando se pulse el botón menos
        case "menos":
          self.pre_operacion(id_boton)
          break

        // Operación cuando se pulse el botón suma
        case "mas":
          self.pre_operacion(id_boton)
          break

        // Operación cuando se pulse el botón igual
        case "igual":
          self.igual()
          break

        //Introducción de los números
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
          self.leer_numeros()
          break
        case "raiz": //No es necesario implementarlo en este proyecto
        default:
          break
      }
    }
  }
}

// Inicializar objeto Calculadora
Calculadora.init()
