const player1 ="x";
const player2 ="O";
var playTime = player1;
var gameOver = false;

atualizaMostrador();

inicializar();
function atualizaMostrador(){

    if(gameOver){return;}
    
    if (playTime == player1) {
        var player = document.querySelectorAll("div#mostrar img")[0];
        player.setAttribute("src","imagens/x.png");
    }else{
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "imagens/o.png");
    }



}

function inicializar(){
    var espacos = document.getElementsByClassName('espaco');
    for (let i = 0; i < espacos.length; i++) {
        espacos[i].addEventListener("click", function(){

            if(gameOver) {return;}

            if(this.getElementsByTagName("img").length == 0){
            
                if(playTime == player1){
                    this.innerHTML = "<img src='imagens/x.png'>";
                    this.setAttribute("jogada",player1);
                    playTime= player2;
                }else{

                    this.innerHTML = "<img src='imagens/o.png'>";
                    this.setAttribute("jogada",player1);
                    playTime= player1;


                }
                atualizaMostrador();
            }
        }
        
    
}
