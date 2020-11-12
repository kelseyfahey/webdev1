let wasClicked = false;

$('.box').click(function(){

    if(wasClicked){
        $('.box').css("background", "lightgreen")
    } else {
        $('.box').css("background", "teal")
    }

wasClicked = !wasClicked    

})

