var flag = true;
function show_menu1() {
    let menu1 = document.getElementById("menu1");
    if (flag){
        menu1.style.display = "block";
    }else {
        menu1.style.display = "none";
    }
    flag = !flag;
}


function show_menu() {
    let menu = document.getElementById("menu1");
    menu.style.display = "none";
    flag = !flag;
}