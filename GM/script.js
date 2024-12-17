var wd = 100;
var hg = 10;
var x = 10;
var y = 30;	
var upp = false;
var lp = false;
var rp = true;
var dp = false;
var canvas = document.getElementById('myC');
var ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
            
        function UPP(){
            
            upp = true;
            lp = false;
            rp = false;
            dp = false;

            console.log("up: " + upp + "\ndown: " + dp + "\nleft: "+ lp + "\nright: "+ rp);
            
        }
        function LP(){
            lp = true; 
            upp = false;
            rp = false;
            dp = false;

            console.log("up: " + upp + "\ndown: " + dp + "\nleft: "+ lp + "\nright: "+ rp);
           
        }

         function RP(){
            rp = true; 
            lp = false;
            upp = false;
            dp = false;
            console.log("up: " + upp + "\ndown: " + dp + "\nleft: "+ lp + "\nright: "+ rp);

        }
        

         function DP(){
            
            dp = true; 
            lp = false;
            rp = false;
            upp = false;

            console.log("up: " + upp + "\ndown: " + dp + "\nleft: "+ lp + "\nright: "+ rp);

            

        }


        function VMU(){
            ctx.clearRect(x,y,wd,hg);

				y-=10;
                if (y <= 0) {
                    gameOver();
                }
			
			ctx.fillRect(x,y,wd,hg);
        }

         function VMD(){
            ctx.clearRect(x,y,wd,hg);

                y+=10;
                
                if (y >= 490) {
                    gameOver();
                }
			
			ctx.fillRect(x,y,wd,hg);
        }

         function HMR(){
            ctx.clearRect(x,y,wd,hg);

				x+=10;
                if (x >= 700) {
                    gameOver();
                }
			
			ctx.fillRect(x,y,wd,hg);
        }

         function HML(){
            ctx.clearRect(x,y,wd,hg);

				x-=10;
			if (x <= 0) {
                gameOver();
            }
			
			ctx.fillRect(x,y,wd,hg);
        }
        
document.querySelector("#up").addEventListener("click",UPP);
document.querySelector("#down").addEventListener("click",DP);
document.querySelector("#left").addEventListener("click",LP);
document.querySelector("#right").addEventListener("click",RP);


        function gameOver(){
            clearInterval(timer);
        }   

        function move(){
            if(upp === true){
                VMU()
            }
            else if(dp === true){
                VMD();
            } 
            else if(lp === true){
                HML();
            } 
            else if(rp === true){
            HMR();
            }
        }
var timer = setInterval(move,100);

		
		