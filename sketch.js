//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variaveis da velocidade da bolinha
let velxbolinha = 5;
let velybolinha = -5;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 70;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//teste de biblioteca
let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw(){
  background(0);      //1 - desenha o background;
  desenhaBolinha();   //2 - desenha a bolinha;
  movimentoBolinha(); //3 - movimenta a bolinha;
  verificaBorda();   //4 - verifica a colisão da bolinha com as bordas;
  mostraRaquete(xRaquete, yRaquete);   //5 - desenha a raquete do jogador;
  movimentaRaqueteJogador();
  //verificaColisaoRaquete();
  verificaColisaoRaquetes(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentaRaqueteOponente();
  verificaColisaoRaquetes(xRaqueteOponente, yRaqueteOponente);
  mostraPlacar();
  marcaPonto();
}

function colisaoOponenteBiblioteca(){
  colidiu =
  collideRectCircle(xRaqueteOponente, yRaqueteOponente, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velxbolinha *= -1
  }
}

