function Person(fullName, favColor){
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function(){
        console.log("Hello there, my name is " + this.name + " and my favorite color is " + this.favoriteColor + " .");
    }
}

var john = new Person ( "John Doe", "blue" );
john.greet();

var jane = new Person ( "Jane", "red" );
jane.greet();