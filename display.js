function r(){

    document.getElementById("name").innerHTML = localStorage.getItem("name");
    document.getElementById("email").innerHTML = localStorage.getItem("email");
    document.getElementById("textarea").innerHTML = localStorage.getItem("textarea");

}