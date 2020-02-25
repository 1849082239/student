window.onload = function () {
    var center_left_top = document.getElementById("center_left_top");
    var center_left_bot = document.getElementById("center_left_bot")
    var center_left_top_content = document.getElementById("center_left_top_content");
    var li1 = document.querySelectorAll("#center_left_top_content ul li");
    console.log(li1);
    var center_left_bot_content = document.getElementById("center_left_bot_content");
    var li2 = document.querySelectorAll("#center_left_bot_content ul li");
    if(center_left_top_content.offsetHeight > 175) {
        center_left_top.style.overflowY = "scroll";
    }else{
        center_left_top.style.overflowY = "none";
    }
    if(center_left_bot_content.offsetHeight > 175) {
        center_left_bot.style.overflowY = "scroll";
    }else{
        center_left_bot.style.overflowY = "none";
    }

    var center_right = document.querySelectorAll(".center .center_right");
    var center_right_content = document.getElementsByClassName("center_right_content");
    var index = 0;
    center_right[0].style.display = "block";

    f();
    function f() {
        for(var i = 0; i < center_right.length; i++) {
            center_right[i].style.display = "none";
        }
        center_right[index].style.display = "block";
    }

    for(var i = 0; i < li1.length; i++) {
        var cr = li1[i];
        cr.index = i;

        cr.onclick = function(){
            index = this.index;
            f();
        }
    }
    for(var i = 0; i < li2.length; i++) {
        var cr = li2[i];
        cr.index = i;

        cr.onclick = function () {
            index = this.index;
            f();
        }
    }

    for(var i = 0; i < center_right.length; i++) {
        if(center_right_content[0].offsetHeight > 500) {
            center_right[i].style.overflowY = "scroll";
        }else{
            center_right[i].style.overflowY = "none";
        }
    }
}