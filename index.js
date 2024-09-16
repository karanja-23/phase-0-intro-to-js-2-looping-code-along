 
let names = ["Gadalupe", "Ollie", "Aki"]

function writeCards(names, event){
    for(let i = 0; i < names.length; i++){
        let newNames = [
            "Thank you, Guadalupe, for the wonderful surprise gift!",
            "Thank you, Ollie, for the wonderful surprise gift!",
            "Thank you, Aki, for the wonderful surprise gift!",
        ];
        return newNames;
    }
}
   

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(number){
    while (number >= 0){

        console.log(number--);
    }
}
countDown(4);