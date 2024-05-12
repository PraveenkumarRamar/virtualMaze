// Creating a class
class CRUDTable {
    // Create a Constructor

    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.data = [
            {
                name: "PraveenKumar",
                email: "praveen@gmail.com"
            }, {
                name: "Ragul",
                email: "ragul@gmail.com"
            }];
        this.heading = [
            {
                title: "Name"
            }, {
                title: "Email"
            }, {
                title: "Action"
            }
        ]
        this.action = [{
            title: "Edit",
            act: "edit",
            btn: "btn btn-primary"
        }, {
            title: "Delete",
            act: "delete",
            btn: "btn btn-danger"
        }
        ]
    }
    getHeader() {
        return `<thead>
        <tr>
            ${this.heading.map((items, index) =>
            `<th>${items.title}</th>`)}
        </tr>
    </thead>`
    }

    getRowData() {
        return 
        let tbody = document.createElement("tbody")
        tbody.innerHTML = `${this.data.map((item, index) => `
        <tr id="${index}">
            <td id="name_row${index}">${item.name}</td>
            <td id="email_row${index}">${item.email}</td>
            <td>
            ${this.action.map((actions) => `
            <button class="${actions.btn} m-2" onclick="crudTable.${actions.act} (${index})">${actions.title}</button>
            `).join(" ")}
            </td>
        </tr>
    `).join('')}`
        
    }

    render() {

        // let table = document.createElement('table')
        // table.append(this.getHeaderData(), this.getRowData())
        // return table
        this.container.innerHTML = `<table class="table table-striped">
                    ${this.getHeader,this.getRowData}
                    </table>
                    <div class=" text-center">    
                            <button class="btn btn-warning" onclick="crudTable.create()">Add New</button>
                    </div>
                `;
    }

    create() {
        const name = prompt("Enter name:");
        const email = prompt("Enter email:");
        this.data.push({ name, email });
        this.render();
    }

    edit(index) {

        let name = document.getElementById("name_row" + index)
        let email = document.getElementById("email_row" + index)

        // let nameValue = c
        // let emailValue = email.innerHTML

        // console.log(nameValue,emailValue);

        name.innerHTML = `<input type='text' id='name_text${index}' value=' ${this.data[index].name}'>`
        email.innerHTML = `<input type='text' id='email_text${index}' value=' ${this.data[index].email}'>`

        console.log(this.data[index].name);

        // const newName = prompt("Enter new name:", this.data[index].name);
        // const newEmail = prompt("Enter new email:", this.data[index].email);
        // this.data[index] = { name: nameValue, email: emailValue };
        this.render();
    }

    save(index) {
        let nameInput = document.getElementById("name_text" + index).value
        let emailInput = document.getElementById("email_text" + index).value

        console.log(nameInput, emailInput);

        document.getElementById("name_row" + index).innerHTML = nameInput
        document.getElementById("email_row" + index).innerHTML = emailInput
        // console.log(name,email);
    }

    delete(index) {
        if (confirm("Are you sure you want to delete this item?")) {
            this.data.splice(index, 1);
            this.render();
        }
    }
}

const crudTable = new CRUDTable('app');
crudTable.render();

// export default CRUDTable