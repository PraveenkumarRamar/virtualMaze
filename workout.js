import Table from "./script";


let Screen1_button = document.createElement("button")
Screen1_button.setAttribute('id','screen1')
Screen1_button.innerText = "Screen1"
Screen1_button.addEventListener("click",()=>{
    tables.makeTable()
})


let Screen2_button = document.createElement("button")
Screen2_button.setAttribute('id','screen2')
Screen2_button.innerText = "Screen2"
Screen2_button.addEventListener("click",()=>{
    tables2.makeTable()

})


document.body.append(Screen1_button,Screen2_button)



class Screen1{
    constructor(data,fetching_data){
        this.table1 = new Table(data,fetching_data);
    }
    makeTable(){
        this.table1.tableStructure()
        // console.log("make table is working");
    }
}



class Screen2{
    constructor(data,fetching_data){
        this.table2 = new Table(data,fetching_data);
    }
    makeTable(){
        this.table2.tableStructure()
        // console.log("make table is working");
    }
}



let tables = new Screen1([
    {
        keyId: "title",
        label: "Title"
    },
    {
        keyId: "description",
        label: "Description",
    },
    {
        keyId: "action",
        label: "Action",
        action: ["Edit", "Delete", "Save"]

    }
], [
    {
        id: "1",
        title: "title 1",
        description: "Direct-message",
    },
    {
        id: "2",
        title: "title 2",
        description: "Legacy",
    },
    {
        id: "3",
        title: "title 3",
        description: "Direct-message",
    }
])



let tables2 = new Screen2([
    {
        keyId: "title",
        label: "Title",
        // formate() {

        // }
    },
    {
        keyId: "description",
        label: "Description",
        // formate() {

        // }
    }
    , {
        keyId: "reason",
        label: "Reason",
        // action: ["Edit", "Delete", "Save"]

        // formate() {

        // }
    }, {
        keyId: "date",
        label: "Date",
        // action: ["Edit", "Delete", "Save"]
        // formate() {

        // }
    },
    {
        keyId: "action",
        label: "Action",
        action: ["Edit", "Delete", "Save"]

        // formate() {

        // }

    }
],
[
    {
        id: "1",
        title: "title 1",
        description: "Direct",
        reason: "nothing",
        date: 122001
    },
    {
        id: "2",
        title: "title 2",
        description: "Legacy",
        reason: "no reason",
        date: 123002
    },
    {
        id: "3",
        title: "title 3",
        description: "Direct",
        reason: "only reason",
        date: 125001
    },
    {
        id: "3",
        title: "title 3",
        description: "Direct",
        reason: "yes yes",
        date: 112001
    }

])


// })


// document.body.append(screen1);
