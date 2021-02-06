//ამოცანა N1
console.log("N1--------------");

let cars = ["audi","bmw", "lexus", "volkswagen", " porsche"];
var j=1;
while(j<cars.length){
    console.log(cars[j]);
    j++;
}
//ამოცანა N2
console.log("N2--------------");

let names =["jumbera", "lavrenti", "keso", "kakha", "besarioni", "nona","ika", "liza", "mari", "ia", "leonardo", "ketevani", "tamara"];
names.forEach(x =>{
    if(x.length>3){
        console.log(x);
    }
})
//ამოცანა N3
console.log("N3--------------");
     // loop-თაც კეთდებოდა, მაგრამ ეგრე უფრო ლამაზი ჩანს
let numbers =[1,2,3,676767676767,897654,34344,12334456,0,346346356356356,4,5,6,7,8];
let luwi = numbers.filter(x => x%2==0);
let kenti = numbers.filter(x => x%2 !=0);
console.log("luwi ricxvebia: "+ luwi);
console.log("kenti ricxvebia: " + kenti);
//ამოცანა N4
console.log("N4--------------");

let user = ['name', 'age', 25, 50, 'surname', [100, 500] ];
console.log(user[user.length-1][1]);
//ამოცანა N5
console.log("N5--------------");

var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
  };
console.log(person.eyecolor);  
//ამოცანა N6
console.log("N6--------------");

let array=["bagrationi", 34343443, "loremi", "23233", 1, 2, 4, 9];
array.forEach(x => console.log(x));
//ამოცანა N7
console.log("N7--------------");

let array1 = [5, 25, 89, 120, 36];
array1.push('kavascript', 'python');
array1.unshift('html', 'css');
console.log(array1.length);

array1.shift();
array1.pop();
console.log(array1.length);
//ამოცანა N8
console.log("N8--------------");

let fruit = ["orange", "banana", "pear"];
console.log(fruit.length);

fruit.push("apple", "pineapple");
fruit.unshift("watermelon");
console.log(fruit.length);

fruit.splice(1, 2);
fruit.unshift("watermelon", "orange", "mango");
console.log(fruit);

fruit.shift();
fruit.pop();
console.log(fruit.length);
//ამოცანა N9
console.log("N9--------------");

let cars1 = ["audi","bmw", "lexus", "volkswagen", "ferrary", "porsche", "bentley"];
for(let j = 2; j<6; j++){
    console.log(cars1[j]);
}
let cars2 = cars1.slice(1, 4);
console.log(cars2);
//ამოცანა N10
console.log("N10--------------");

let names1 = ["sandro", "rita", "julieta", "oleghi", "tamara", "niko", "zurikela", "zuka", "galaktioni","nika"];
let y = names1.length;
if(y == 5 && names1[y-1]=="nika"){
    console.log("masivis raodenoba :5 da bolo elementi Nika");
} else if(y== 7 || names1[0]=="sandro"){
    console.log("masivis raodenoba : 7 da pirveli elementia sandro");
}
//ამოცანა N11
console.log("N11--------------");

let array2 = [5, 10, 25, 100, 6, 18];
let array3 = array2.map(x => x/2);
console.log(array3);
//ამოცანა N12
console.log("N12--------------");

let array4 = ["hello", "javascript", "html", 43, "css", "scss", 76, "bootstrap", 88, 59];
let array5 = array4.filter(x => x/x!=1);
console.log(array5);
//ამოცანა N13
console.log("N13--------------");

let array6 = array4.filter(x => x/x==1);
console.log(array6);
//დასასრული :))))))))))


