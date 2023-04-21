function mostraPlacar(){
    fill (255)
    text (meusPontos, 278, 26)
    text (pontosOponente, 321, 26)
  }
  
  function marcaPonto(){
    if (xBolinha > 590){
      meusPontos += 1;
    }
    if (xBolinha < 10){
      pontosOponente += 1;
    }
  }