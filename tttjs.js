$("input[type='text']").keypress(function(event) {
	if(event.which===13)
	{
		var todotext=$(this).val();
		if($(this).hasClass("input1"))
        $(".p1").html("<span id='message1'>"+todotext+"</span>'s turn");
        else
         $(".p2").html("<span id='message2'>"+todotext+"</span>'s turn");
	}
   
});
var turn="player1";
var squares=document.querySelectorAll(".square");
for(var i=0;i<squares.length;i++)
{
 squares[i].addEventListener("click",function(){
 	$(".p1").toggleClass("highlighted");
	$(".p2").toggleClass("highlighted");
	$(".p1").toggleClass("nothighlighted");
	$(".p2").toggleClass("nothighlighted");

 	
      if(turn=="player1")
      {
      	$(this).html("<p>X</p>");
      }
      else{
      	$(this).html("<p>O</p>");
      }
      turn=(turn=="player1"?"player2":"player1");
      var result=document.querySelector("#result");
      var message1=document.querySelector("#message1");
      var message2=document.querySelector("#message2");
     //horizontal win
     for(var first=0;first<9;first+=3)
     {
     	var textc=squares[first].textContent;
     	if(squares[first+1].textContent==textc&&squares[first+2].textContent==textc&&(textc=='X'||textc=='O'))
     	{
     		if(textc=="X")
     		result.textContent=message1.textContent+" is the winner!";
     	else
     		result.textContent=message2.textContent+" is the winner!";
     	}
     }    
     //vertical win
     for(var first=0;first<3;first++)
     {
     	var textc=squares[first].textContent;
     	if(squares[first+3].textContent==textc&&squares[first+6].textContent==textc&&(textc=='X'||textc=='O'))
     	{
     		if(textc=="X")
     		result.textContent=message1.textContent+" is the winner!";
     	else
     		result.textContent=message2.textContent+" is the winner!";
     	}
     }
     //diagonal win
     var first=0;
     var textc=squares[first].textContent;
     if(squares[first+4].textContent==textc&&squares[first+8].textContent==textc&&(textc=='X'||textc=='O'))
     	{
     		if(textc=="X")
     		result.textContent=message1.textContent+" is the winner!";
     	else
     		result.textContent=message2.textContent+" is the winner!";
     	}
     //other diagonal win
     var textc=squares[2].textContent;
     if(squares[4].textContent==textc&&squares[6].textContent==textc&&(textc=='X'||textc=='O'))
     	{
     	   if(textc=="X")
     		result.textContent=message1.textContent+" is the winner!";
     	else
     		result.textContent=message2.textContent+" is the winner!";	
     	}

     	 
var count=0;
for(var j=0;j<squares.length;j++)
{
	if(squares[j].innerHTML=="<p>X</p>"||squares[j].innerHTML=="<p>O</p>")
		{
			if(j==8)
				result.textContent="DRAW!";
		}
		else
			break;
}



});	
}

