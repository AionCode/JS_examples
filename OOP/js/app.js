/* 
aca("1996.")

function aca(godiste){
    console.log("Acino godiste je " + godiste);
}


function person(name, favColor){
    console.log("Hello, my name is " + name + " and my favorite color is " + favColor + "");
}

person("Aca", "black");
person("Luka", "green");
person("Radovan", "red");

*/

var john = {
    name: "John Doe",
    favColor: "red",
    greet: function(){
        console.log("Hello, my name is " + john.name + " and my favorite color is " + john.favColor + ".");
    }
}

john.greet();




/* person(john.name, john.favColor);
*/
