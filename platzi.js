document.addEventListener("keyup", movimientoCerdo);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var fondo = {
    url:"tile.png",
    cargaOK: false
}

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdos);

function cargarFondo()
{
    fondo.cargaOK = true
    dibujar();
}
function cargarVacas()
{
    vaca.cargaOK = true
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOK = true
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOK = true
    dibujar();
}


function dibujar ()
{
    if (fondo.cargaOK){
    papel.drawImage(fondo.imagen,0,0);
    }
    if (vaca.cargaOK){
        var cantidad = aleatorio(1,15)
    for (var v=0;v < cantidad ;v++ ){
        var x = aleatorio(0,7);
        var y = aleatorio(0,7);
        x = x*60;
        y = y*60;
        papel.drawImage(vaca.imagen,x,y);

        }
    }
    if (pollo.cargaOK){
        var cantidad = aleatorio(0,20)
    for (var v=0;v < cantidad ;v++ ){
        var x = aleatorio(0,7);
        var y = aleatorio(0,7);
        x = x*60;
        y = y*60;
        papel.drawImage(pollo.imagen,x,y);

        }
    }
    if (cerdo.cargaOK){
     var xc = aleatorio(0,420);
     var yc = aleatorio(0,420);
     papel.drawImage(cerdo.imagen,xc,yc);
    }

}

var xc = 250;
var yc = 250;
function movimientoCerdo(evento){
    var movimiento = 10;
       
    switch(evento.keyCode){
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
}

function aleatorio(min,maxi)
{
    var resultado;
    resultado = Math.floor(Math.random()*(maxi - min +1)) + min;
    return resultado;
}