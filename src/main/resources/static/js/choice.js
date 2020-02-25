window.onload = function () {
    var center_right = document.querySelectorAll(".center .center_right");
    var center_right_content = document.getElementsByClassName("center_right_content");
    var li = document.querySelectorAll(".center_left ul li");
    var index = 0;
    center_right[0].style.display = "block";

    f();
    function f() {
        for(var i = 0; i < center_right.length; i++) {
            center_right[i].style.display = "none";
        }
        center_right[index].style.display = "block";
    }

    for(var i = 0; i < li.length; i++) {
        var cr = li[i];
        cr.index = i;

        cr.onclick = function(){
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