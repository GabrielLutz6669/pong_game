function movimentoBolinha(){
    xBolinha += velxbolinha;
    yBolinha += velybolinha;
  }
  
function desenhaBolinha(){
    circle(xBolinha, yBolinha, diametro);
  }

function verificaBorda(){
    if (xBolinha + raio > width || xBolinha - raio < 0){
      velxbolinha *= -1;
    }
    
    if (yBolinha + raio > height || yBolinha - raio < 0){
      velybolinha *= -1;
    }
  }
  