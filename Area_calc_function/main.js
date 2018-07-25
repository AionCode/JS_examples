function calc(){
    var w = document.getElementById("width").value; // .value znaci da dobija vrednost iz polja u koje unosimo
    var h = document.getElementById("height").value;

    var area = w * h;
    document.getElementById("answer").value = area;
}