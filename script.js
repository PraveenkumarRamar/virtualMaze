

const formatMilliseconds = (milliseconds) => {

    milliseconds = parseFloat(milliseconds || 0)

    // Create a new Date object using the milliseconds
    let date = new Date(milliseconds);

    // Get the components of the date and time
    let day = date.getDate().toString().padStart(2, '0'); // Get day and pad with zero if needed
    let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so add 1 and pad with zero
    let year = date.getFullYear().toString(); // Get full year
    let hours = date.getHours().toString().padStart(2, '0'); // Get hours and pad with zero
    let minutes = date.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with zero

    // Construct the formatted date and time string
    let formattedDateTime = `${day}/${month}/${year}, ${hours}:${minutes}`;

    return formattedDateTime;

}

class Table {
    constructor(
        data = [],
        fetching_data = []) {

        this.data = data;
        this.fetching_data = fetching_data
        this.formContainer = null
    }

    getHeader() {
        let thead = document.createElement("thead")
        let tr = document.createElement("tr")
        tr.style.textAlign = "center"


        this.data.forEach((data, index) => {
            let th = document.createElement("th");
            th.innerText = data.label ? data.label : "-";
            tr.append(th)
        })

        // console.log(this.data);
        // console.log(this.fetching_data);
        thead.append(tr)
        // console.log(thead);
        return thead
    }


    // getActionButton(actions,id) {
    //     let button_data = document.createElement("td");
    //     button_data.style.textAlign = "center";

    //     actions.forEach((action,index) => {
    //         let button = document.createElement("button");
    //         button.style.margin = "10px";
    //         button.setAttribute("id",id)
    //         button.innerText = action;
    //         // button.addEventListener("click", () => {
    //         //     deploy.`${action}Data`(id)})
    //         button_data.appendChild(button);
    //     });

    //     return button_data;
    // }
    // getData() {
    //     let tbody = document.createElement('tbody');

    //     this.fetching_data.forEach((data,index) => {
    //         let tr = document.createElement("tr");
    //         tr.setAttribute("id", `row${index}`);

    //         this.data.forEach((item) => {
    //             let td = document.createElement("td");
    //             td.style.textAlign = "center";
    //             td.setAttribute("class", `data${index}`)

    //             td.innerText = data[item.keyId] !== undefined ? data[item.keyId] : "-";
    //             // data[item.keyId] == "action" ? return : "-";

    //             tr.append(td)

    //         });

    //         if (Array.isArray(data.action)) {
    //             let buttons = this.getActionButton(data.action,index);
    //             tr.appendChild(buttons);
    //         }
    //         else {
    //             let emptyCell = document.createElement("td");
    //             tr.appendChild(emptyCell);
    //         }
    //         console.log(tr);
    //         tbody.appendChild(tr);
    //     });

    //     return tbody;
    // }


    // getData() {
    //     let tbody = document.createElement('tbody');

    //     this.fetching_data.forEach((data, index) => {
    //         let tr = document.createElement("tr");
    //         tr.setAttribute("id", `row${index}`);

    //         this.data.forEach((item) => {
    //             let td = document.createElement("td");
    //             td.style.textAlign = "center";
    //             td.setAttribute("class", `data${index}`);

    //             if (item.keyId !== "action") {
    //                 td.innerText = data[item.keyId] !== undefined ? data[item.keyId] : "-";
    //                 tr.append(td);
    //             } else {
    //                 let buttonsCell = document.createElement("td");
    //                 buttonsCell.appendChild(this.getActionButton(item.action, index)); // Pass data.id as row ID
    //                 tr.appendChild(buttonsCell);
    //             }
    //         });

    //         tbody.appendChild(tr);
    //     });

    //     return tbody;
    // }


    getData() {
        let tbody = document.createElement('tbody');

        tbody.id = 'content-table-body'

        this.fetching_data.forEach((data, index) => {
            let tr = document.createElement("tr");
            tr.setAttribute("id", `row${index}`);
            // console.log(data);

            this.data.forEach((item) => {

                let td = document.createElement("td");
                td.style.textAlign = "center";
                td.setAttribute("class", `data${index}`);


                if (item.keyId !== "action") {
                    td.innerText = data[item.keyId] !== undefined ? data[item.keyId] : "-";

                    if (data[item.keyId] !== undefined) {
                        if (item.type == "number") {
                            let number = data[item.keyId]

                            td.innerHTML = item.format ? item.format(number) : number
                        }
                    } else {
                        td.innerHTML = 'notAvailable';
                    }

                    tr.append(td);
                } else {
                    let buttonsCell = document.createElement("td");
                    buttonsCell.appendChild(this.getActionButton(item.action, index)); // Pass data.id as row ID
                    tr.appendChild(buttonsCell);
                }
            });

            tbody.appendChild(tr);
        });

        let id = this.fetching_data.length
        // console.log(id);

        // Add a new row for adding data
        // let newRow = document.createElement("tr");
        // newRow.setAttribute("id", `row${id}`);
        // this.data.forEach((item) => {
        //     let td = document.createElement("td");
        //     td.style.textAlign = "center";
        //     td.setAttribute("class", `data${id}`)

        //     if (item.keyId !== "action") {
        //         let input = document.createElement("input");
        //         input.setAttribute("type", "text");
        //         input.setAttribute("class", `text_data${id}`);
        //         input.setAttribute("placeholder", item.label);
        //         td.appendChild(input);
        //         newRow.appendChild(td);
        //     } else {
        //         let addButton = document.createElement("button");
        //         addButton.id = id
        //         addButton.classList.add('row-action-btn')
        //         addButton.innerText = "Add";
        //         td.appendChild(addButton);

        //         newRow.appendChild(td);
        //     }
        // });
        // id++;

        // tbody.appendChild(newRow);

        return tbody;
    }



    addData(id) {

        console.log(id, 'sadasd');

        let inputElements = document.querySelectorAll(`.text_data${id}`);
        console.log(inputElements);
        let newData = {};

        // console.log(inputElements, 'inputElements');

        inputElements.forEach((input, index) => {
            let keyId = this.data[index].keyId;
            // console.log(keyId, 'keyy');
            newData[keyId] = input.value;
            // console.log(input.value);
        });

        this.fetching_data.push(newData);
        this.tableStructure();


        // } else {
        //     this.fetching_data.push({ title: title, description: description });
        // }
        // this.tableStructure();

        // console.log(data);
        // // return data
    }


    getActionButton(actions, id) {
        let buttonContainer = document.createElement("div"); // Create a container for buttons
        buttonContainer.style.display = "flex"; // Align buttons horizontally
        buttonContainer.style.justifyContent = "center"

        actions.forEach((action) => {
            let button = document.createElement("button");
            button.style.margin = "5px";
            button.setAttribute("id", `${action}_${id}`); // Unique ID for each button based on row ID
            button.innerText = action;

            // Add event listener based on action type
            switch (action) {
                case "Edit":
                    button.addEventListener("click", () => this.editData(id));
                    break;
                case "Delete":
                    button.addEventListener("click", () => this.deleteData(id));
                    break;
                case "Save":
                    button.style.display = "none"; // Hide the Save button initially
                    button.addEventListener("click", () => this.saveData(id));
                    break;
                default:
                    break;
            }

            buttonContainer.appendChild(button);
        });

        return buttonContainer;
    }

    tableStructure() {
        let table = document.createElement("table");
        let headingTable = this.getHeader();
        let dataTable = this.getData();
        table.append(headingTable, dataTable);

        // console.log(table);
        let appBody = document.getElementById("app");
        appBody.innerHTML = ''; // Clear previous content
        
        appBody.append(table); // Append the table
        
        let addButton = this.addDataButton()
        appBody.appendChild(addButton); // Append the table
        // console.log(table);

        // let add_btn =  this.addDataButton() 

        // appBody.append(add_btn)


       
       
    }

    editData(id) {

        let data = document.querySelector(`#row${id}`)
        // console.log(id);

        let td_cells = data.querySelectorAll(`.data${id}`)
        // console.log(td_cells.length);

        let keyData = this.data;
        // let f_dataKeys = Object.keys(this.fetching_data[id]);
        // console.log(f_dataKeys);
        let f_data = this.fetching_data[id]


        for (let i = 0; i < td_cells.length; i++) {

            if (keyData[i].type == "select") {
                // console.log(keyData[i]);
                let selectElement = document.createElement("select");
                selectElement.setAttribute("name", "table");
                selectElement.classList.add(`select_data${id}`)
                selectElement.setAttribute("id", "table-select-element");
                td_cells[i].innerHTML = ""
                td_cells[i].append(selectElement)


                let selectDataLength = keyData[i].option.length
                // console.log(selectDataLength);

                for (let j = 0; j < selectDataLength; j++) {

                    // console.log( f_data.title[i].selectTitle);
                    let option = document.createElement("option");
                    option.setAttribute("value", keyData[i].option[j]);
                    option.innerText = keyData[i].option[j]
                    selectElement.appendChild(option);
                }
            }



            else if (keyData[i].type == "radio") {
                let radioOptions = keyData[i].option
                // console.log(radioOptions);

                let radioContainer = document.createElement("div"); // Container for radio inputs and labels
                for (let j = 0; j < radioOptions.length; j++) {
                    let input = document.createElement("input");
                    input.setAttribute("type", keyData[i].type);
                    input.setAttribute("name", `radio_data${id}`); // Unique name for radio group
                    input.setAttribute("value", radioOptions[j]);
                    input.checked = f_data.gender == radioOptions[j] ? true : false;
                    let label = document.createElement("label");
                    label.innerText = radioOptions[j];

                    radioContainer.appendChild(input);
                    radioContainer.appendChild(label);
                    // }
                    td_cells[i].innerHTML = ""; // Clear cell content
                    td_cells[i].appendChild(radioContainer);
                }
            }

            else if (keyData[i].type == "text") {
                // console.log(keyData[i], td_cells[i].innerHTML);
                let input = document.createElement("input");
                input.setAttribute("type", keyData[i].type);
                input.classList.add(`input_data${id}`)
                input.setAttribute("name", `text_${id}`); // Unique name for radio group
                input.setAttribute("value", f_data[keyData[i].keyId]);
                td_cells[i].innerHTML = input.outerHTML
            }

            else if (keyData[i].type == "number") {
                let numberInput = document.createElement('input')
                let number = f_data[keyData[i].keyId]
                numberInput.classList.add(`input_data${id}`)
                numberInput.setAttribute('type', keyData[i].type);
                numberInput.setAttribute("value", number)
                td_cells[i].innerText = ""
                td_cells[i].appendChild(numberInput)
            }

            let editBtn = document.querySelector(`#Edit_${id}`)
            editBtn.style.display = "none"

            // console.log(editBtn);

            let saveBtn = document.querySelector(`#Save_${id}`)
            saveBtn.style.display = "inline"
            // saveBtn.addEventListener("click", () => this.saveData(id))


        }
    }

    deleteData(id) {
        console.log(id);
        if (confirm("Are you sure you want to delete this item?")) {
            this.fetching_data.splice(id, 1);
            this.tableStructure();
        }
    }

    saveData(id) {
        let dataRow = document.querySelector(`#row${id}`)
        let td_cells = dataRow.querySelectorAll(`.data${id}`)
        // console.log(td_cells);
        // let input_data = document.querySelectorAll(`#text_data${id})

        let keyData = this.data;
        let f_data = this.fetching_data[id]
        let newData = {};

        for (let i = 0; i < td_cells.length; i++) {
            if (keyData[i].type == "radio") {
                let radios = document.getElementsByName(`radio_data${id}`);
                // console.log(id);
                // console.log(radios);

                for (let data of radios) {
                    if (data.checked) td_cells[i].innerHTML = data.value;
                    // data.checked?console.log("checked",data.value):console.log("no",data.value);
                }
            }
            else if (keyData[i].type == "select") {
                let data = td_cells[i].querySelector(`.select_data${id}`)
                // console.log(data.value);
                // for (let selected of data) {
                let value = data.value
                td_cells[i].innerHTML = value
                // }
            }
            else if ((keyData[i].type == "number") || (keyData[i].type == "text")) {
                let data = td_cells[i].querySelector(`.input_data${id}`).value

                td_cells[i].innerHTML = keyData[i].format ? keyData[i].format(data) : data

            }
        }

        let editBtn = document.querySelector(`#Edit_${id}`)
        editBtn.style.display = "inline"

        // console.log(editBtn);

        let saveBtn = document.querySelector(`#Save_${id}`)
        saveBtn.style.display = "none"

        // this.tableStructure();
        // this.fetching_data.push(newData);

    }

    formData() {
        let div = document.createElement("div")
        div.setAttribute("class", "forms-section")

        let form = document.createElement("form")
        form.setAttribute("class", "form-container")
        div.append(form)
        return div
    }


    addAddingRow(){

        let parentContainer = document.querySelector('#content-table-body')

        let id = this.fetching_data.length

        let newRow = document.createElement("tr");
        newRow.setAttribute("id", `row${id}`);

        this.data.forEach((item) => {
            let td = document.createElement("td");
            td.style.textAlign = "center";
            td.setAttribute("class", `data${id}`)

            if (item.keyId !== "action") {
                let input = document.createElement("input");
                input.setAttribute("type", "text");
                input.setAttribute("class", `text_data${id}`);
                input.setAttribute("placeholder", item.label);
                td.appendChild(input);
                newRow.appendChild(td);
            } else {
                let addButton = document.createElement("button");
                addButton.id = id
                addButton.classList.add('row-action-btn')
                addButton.innerText = "Add";
                td.appendChild(addButton);

                newRow.appendChild(td);
            }
        });
        id++;        
    
        parentContainer.appendChild(newRow);

        let main_add_btn = document.querySelector('#addButton')
        let add_btn_event = newRow.querySelector('.row-action-btn')
        add_btn_event?.addEventListener('click', () => {


            this.addData(add_btn_event.id)

            add_btn_event.parentElement.parentElement.remove()
            main_add_btn.style.display='flex'
        })

    }

    addDataButton() {

        let id = this.fetching_data.length

        let addBtn = document.createElement("button")
        addBtn.innerHTML = "Add";
        addBtn.style.textAlign = "center"
        
        addBtn.setAttribute("id", "addButton")
        
        addBtn.addEventListener("click", () => {
            this.addAddingRow()
            addBtn.style.display = 'none'
        })
        
        return addBtn
    }
}



let deploy = new Table([
    {
        keyId: "name",
        label: "Name",
        type: "text",
        format(value) {

            return value || 'N/A'

        }
    },
    {
        keyId: "gender",
        label: "Gender",
        type: "radio",
        option: ["male", "female", "trans"]
    }
    , {
        keyId: "department",
        label: "Department",
        type: "select",
        option: ["IT", "Software", "Mech"]
    }, {
        keyId: "designation",
        label: "Designation",
        type: "select",
        option: ["Manager", "developer",]
    },
    {
        keyId: "date",
        label: "Date",
        type: "number",
        format: (value) => {

            return formatMilliseconds(value)

        }
    },
    {
        keyId: "action",
        label: "Action",
        action: ["Edit", "Delete", "Save"]
    }
],
    [
        {
            name: "Raja",
            date: 1725895,
            gender: 'male', // 0,1,2
            department: "Software", // IT, Software, Mech
            designation: "Developer" // Manager, developer, 
        },
        // {
        //     name: "Praveen",
        //     date: 1725895215663,
        //     gender: 'male', // 0,1,2
        //     department: "Software", // IT, Software, Mech
        //     designation: "Developer" // Manager, developer, 
        // },
        // {
        //     name: "Ajin",
        //     date: 1725895215663,
        //     gender: 'male', // 0,1,2
        //     department: "Software", // IT, Software, Mech
        //     designation: "Developer" // Manager, developer, 
        // }
    ])

deploy.tableStructure()
export default Table
