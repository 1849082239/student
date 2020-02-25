window.onload = function () {
    var lbt = document.getElementById("lbt");
    var li = document.querySelectorAll("#lbt ul li");
    var span = document.querySelectorAll("#lbt p span");
    var index = 0;
    li[0].style.display = "block";
    span[0].style.background = "rgba(255,255,255,.7)";
    var t;

    function f(){
        for(var i = 0; i < li.length; i++) {
            li[i].style.display = "none";
            span[i].style.background = "rgba(0,0,0,.7)";
        }
        li[index].style.display = "block";
        span[index].style.background = "rgba(255,255,255,.7)";
    }

    function lb(){
        t = setInterval(function () {
            index++;
            if(index > 2){index = 0;}
            f();
        },3000)
    }

    lb();

    lbt.onmouseover = function () {
        clearInterval(t);
    }

    lbt.onmouseout = function () {
        lb();
    }

    for(var i = 0; i < span.length; i++) {
        var sp = span[i];
        sp.index = i;

        sp.onclick = function () {
            index = this.index;
            f();
        }
    }
}
document.getElementsByClassName("mask_box1")[0].addEventListener("click",function () {
    taggleBank(1);
})
document.getElementsByClassName("mask_box2")[0].addEventListener("click",function () {
    taggleBank(2);
})
document.getElementsByClassName("mask_content")[0].addEventListener("click",function (e) {
    e.stopPropagation();
    return false;
})
document.getElementsByClassName("mask_content")[1].addEventListener("click",function (e) {
    e.stopPropagation();
    return false;
})
function taggleBank(index) {
    let mask =document.getElementsByClassName("mask_box"+index)[0];
    let input = document.getElementsByClassName("input_box");
    for (let i =0 ;i<input.length ;i++){
        input[i].value = "";
    }
    if (mask.classList.length <2){
        mask.classList.add("mask_show");
    } else{
        mask.classList.remove("mask_show");
    }
}