function movimentaRaqueteOponente(){
    velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete /2 - 30;
    yRaqueteOponente += velocidadeYOponente;
  }

function movimentaRaqueteJogador(){
    if (keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
    }
  }

function mostraRaquete(x, y){
    rect(x, y, comprimentoRaquete, alturaRaquete)
  }
  
//Não esta mais sendo utilizada, pois a biblioteca p5.collide2d funciona melhor.
function verificaColisaoRaquete(){
      if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete) {
        velxbolinha *= -1
   }
  }

function verificaColisaoRaquetes(x, y){
    colidiu =
    collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
    if (colidiu){
      velxbolinha *= -1
    }
  }
  