let Person = {
    name: "Praveen",
    age: 23,
    skills: ["ReactJS", "NodeJS", "ExpressJS"],
    address: {
        city: "Salem",
        state: "TamilNadu"
    },

    
    get Details(){
        return `Name : ${this.name}, Age : ${this.age}`;
    },

    set Details(a){
        return this.name = a
    },

    showLanguages(){
        this.skills.forEach(function(e){
            console.log(`${this.name} and his Skills are : ${e}`)
        }.bind(this))
    },

    checking(){
        console.log(this)
    }
}


Person.Details = "Praveena"

// Person.checking()

// Person.showLanguages()

function trial(a){
    console.log(a);
    console.log(this);
}

// trial.call({module:"Core_Javascript"})
trial.apply({module:"OOP_Javascript"},["Processing"])