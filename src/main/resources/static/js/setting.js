window.onload = function () {
    var li = document.querySelectorAll("#center_left ul li");
    var div = document.querySelectorAll(".center_right div");
    var index = 0;
    div[0].style.display = "block";

    for(var i = 0; i < li.length; i++) {
        var cl = li[i];
        cl.index = i;
        
        cl.onclick = function () {
            index = this.index;

            for(var j = 0; j < div.length; j++) {
                div[j].style.display = "none";
            }
            div[index].style.display = "block";
        }
    }
}