const actor ={
    name : "sakib khan",
    id : 121,
    address : "dhanmondi",
    isSingle : true,
    friends : ["apu","raaz", "salman","amir"],
    act : function(){
        console.log("acting like sakib khan")
    },
    movies : [
        {
            name: "no. 1",
            year: 2013,
        },
        {
            name : "King khan",
            year : 2018,
        }

    ],
    car:{
        brand:"tesla",
        price: 67890432,
        made: 2023,
        manufacturer:{
            name : "tesla",
            ceo : "elon mask",
            origin : "usa"
        }
    },
}


console.log(actor);
console.log(actor.friends);
console.log(actor.car);
console.log(actor.act);
actor.act();