// enter your age down here "kids below=1-5,kids=6-12,teenage=13-19,adult=20-40,senior person=41-60,old=61 and above".

let age:number = 15
if(age >=1 && age <6){
    console.log("Hello Welcom to the Museum Park.For kids below the ticket is free")
}
else if(age >=6 && age <13){
     console.log("Hello Welcom to the Museum Park.For kids the price of ticket is 500");
}
else if(age >=13 && age <20){
    console.log("Hello Welcom to the Museum Park.For Teenageers the price of ticket is 650");
}
else if(age >=20 && age <41){
    console.log("Hello Welcom to the Museum Park.For Adults the price of ticket is 800");
}
else if(age >=41 && age <61){
    console.log("Hello Welcom to the Museum Park.For Senior Persons the price of ticket is 700");
}
else if(age >=6&& age <13){
    console.log("Hello Welcom to the Museum Park.For kids the price of ticket is 500");
}
else if(age >=6&& age <13){
    console.log("Hello Welcom to the Museum Park.For Old Peoples the ticket is free");
}
else{console.log("please enter age in correct way");
}