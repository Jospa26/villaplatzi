document.addEventListener("keydown", movimientoCerdo);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var xc = 250;
var yc = 250;
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

var fondo = {
  url: "tile.png",
  cargaOK: false,
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false,
};

var vaca = {
  url: "vaca.png",
  cargaOK: false,
};

var pollo = {
  url: "pollo.png",
  cargaOK: false,
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarCerdos() {
  cerdo.cargaOK = true;
  dibujar()
}

function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollos() {
  pollo.cargaOK = true;
  dibujar();
}

var scenario = {
  pollos: {carga: false, coordenadas:[]},
  vacas: {carga: false, coordenadas:[]},
};

function dibujar() {
  if (fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
    papel.drawImage(cerdo.imagen, xc, yc);
  }
  if (vaca.cargaOK && !scenario.vacas.carga) { 
    var cantidad = aleatorio(1, 5);
    for (var v = 0; v < cantidad; v++) {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      x = x * 60;
      y = y * 60;
      papel.drawImage(vaca.imagen, x, y);
      scenario.vacas.coordenadas.push([x, y]);
    }
    scenario.vacas.carga = true;
  }
  if (scenario.vacas.carga){
    scenario.vacas.coordenadas.forEach(coord => { 
        papel.drawImage(vaca.imagen, coord[0], coord[1])
    });
  }
  if (pollo.cargaOK && !scenario.pollos.carga) {
    var cantidad = aleatorio(0, 20);
    for (var v = 0; v < cantidad; v++) {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      x = x * 60;
      y = y * 60;
      papel.drawImage(pollo.imagen, x, y);
      scenario.pollos.coordenadas.push([x, y]);
    }
    scenario.pollos.carga = true;
  }
  if(scenario.pollos.carga){
    scenario.pollos.coordenadas.forEach(coord => { 
        papel.drawImage(pollo.imagen, coord[0], coord[1])
    });
  }
}

function movimientoCerdo(evento) {
  var movimiento = 10;
  console.log(evento)
  switch (evento.keyCode) {
    case teclas.DOWN:
      yc = yc + movimiento;
      
      break;
    case teclas.UP:
      yc = yc - movimiento;
      
      break;
    case teclas.LEFT:
      xc = xc - movimiento;
      
      break;
    case teclas.RIGHT:
      xc = xc + movimiento;
      
      break;
  }
  dibujar()
}

function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
