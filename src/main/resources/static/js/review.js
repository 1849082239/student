window.onload = function () {
    var center_right_top = document.getElementById("center_right_top");
    var center_right_top_content = document.getElementById("center_right_top_content");
    if(center_right_top_content.offsetHeight > 198) {
        center_right_top.style.overflowY = "scroll";
    }else{
        center_right_top.style.overflowY = "none";
    }

    var answer_pre = document.getElementById("answer_pre");
    var answer_next = document.getElementById("answer_next");
    answer_pre.onclick = function () {
        answer_pre.style.display = "none";
        answer_next.style.display = "block";
    }

}