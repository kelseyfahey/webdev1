/*var modal = document.getElementById("superModal");

var btn = document.getElementById("clickMe");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}*/


$("#clickMe").click(function(){
    $(".modal").show();
})

$(".close").click(function(){
    $(".modal").hide();
})

$(".modal-background").click(function(){
    $(".modal").hide();
})