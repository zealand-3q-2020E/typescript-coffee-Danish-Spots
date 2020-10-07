import { BlackCoffee } from "./BlackCoffee";
import { Coffee } from "./Coffee";
import { Cortado } from "./Cortado";
import { Latte } from "./Latte";
import {IMilk} from "./IMilk"

let menuCount: number = 0;
let menuList: HTMLUListElement = <HTMLUListElement> document.getElementById("menuArea");
let menuButtonCount: number = 0;
let mT: HTMLTableElement = <HTMLTableElement> document.getElementById("menuTable");
let orderTable: HTMLTableElement = <HTMLTableElement> document.getElementById("orderTable");

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user: Person = { firstName: "John", lastName: "Doe" };

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
element.innerHTML = greeter(user);

let cort: Cortado =  new Cortado();
let latt: Latte = new Latte();
let bc: BlackCoffee = new BlackCoffee(4);
let bcNoDiscount: BlackCoffee = new BlackCoffee(0);
//let bc6: BlackCoffee = new BlackCoffee(6);
// console.log("Discount: " + cort.Discount + ", Price: " + cort.Price() + ", MlMilk: " + cort.MlMilk() + ", Strength: " + cort.Strength());
// console.log("Discount: " + latt.Discount + ", Price: " + latt.Price() + ", MlMilk: " + latt.MlMilk() + ", Strength: " + latt.Strength());
// console.log("Discount: " + bc.Discount + ", Price: " + bc.Price() + ", Strength: " + bc.Strength());
// console.log("Discount: " + bcNoDiscount.Discount + ", Price: " + bcNoDiscount.Price() + ", Strength: " + bcNoDiscount.Strength());
//console.log("Discount: " + bc6.Discount + ", Price: " + bc6.Price() + ", Strength: " + bc6.Strength());

function PrintCoffeeMenu(coffee: Coffee){
    console.log(coffee.GetCoffeeString());
}

// function CreateListItem(coffee: Coffee){
//     let newItem = document.createElement("li");
//     let newItemText: Text = document.createTextNode(coffee.GetCoffeeString());
//     let orderButtonText: Text = document.createTextNode("order");
//     let orderButton: HTMLButtonElement = document.createElement("button");
    
//     orderButton.appendChild(orderButtonText);
//     orderButton.setAttribute("id", "b" + menuButtonCount.toString());
//     orderButton.setAttribute("class", "orderButton");
    
//     newItem.appendChild(newItemText);
//     newItem.setAttribute("id", menuCount.toString());
//     newItem.setAttribute("class", "MenuItem");
//     newItem.appendChild(orderButton);
    
//     menuList.appendChild(newItem);

//     menuCount++;
//     menuButtonCount++;
// }

function CreateNewRowItem(coffee: Coffee, mlm: number){
    let table: HTMLTableElement = <HTMLTableElement> document.getElementById("menuTable");
    let newRow: HTMLTableRowElement = <HTMLTableRowElement> table.insertRow(-1);
    let name: HTMLTableCellElement = newRow.insertCell(0);
    let price: HTMLTableCellElement = newRow.insertCell(1);
    let discount: HTMLTableCellElement = newRow.insertCell(2);
    let strength: HTMLTableCellElement = newRow.insertCell(3);
    let mlmilk: HTMLTableCellElement = newRow.insertCell(4);
    let orderButtonCell: HTMLTableCellElement = newRow.insertCell(5);

    let orderButton: HTMLButtonElement = document.createElement("button");
    let orderButtonText: Text = document.createTextNode("order");
    orderButton.appendChild(orderButtonText);
    orderButton.setAttribute("id", "b" + menuButtonCount.toString());
    orderButton.setAttribute("class", "orderButton");

    name.innerHTML = coffee.CoffeeDrink();
    price.innerHTML = coffee.Price().toString();
    discount.innerHTML = coffee.Discount.toString();
    strength.innerHTML = coffee.Strength();
    mlmilk.innerHTML = mlm.toString();
    orderButtonCell.appendChild(orderButton);
}

PrintCoffeeMenu(cort);
PrintCoffeeMenu(latt);
PrintCoffeeMenu(bc);
PrintCoffeeMenu(bcNoDiscount);

// CreateListItem(cort);
// CreateListItem(latt);
// CreateListItem(bc);
// CreateListItem(bcNoDiscount);
CreateNewRowItem(cort, cort.MlMilk());
CreateNewRowItem(latt, latt.MlMilk());
CreateNewRowItem(bc, 0);
CreateNewRowItem(bcNoDiscount, 0);

mT.addEventListener("click", function(element){
    let clickedElement = <HTMLInputElement>element.target;

    if (element.target && clickedElement.nodeName == "BUTTON"){
        let orderedItem: HTMLTableRowElement = <HTMLTableRowElement> clickedElement.parentElement.parentElement.cloneNode(true);
        let orderedItemButton = orderedItem.lastElementChild.lastElementChild;
        orderedItemButton.innerHTML = "Delete";
        orderTable.appendChild(orderedItem);
        console.log("element Clicked")
    }
    //console.log(clickedElement.nodeName);  
});

orderTable.addEventListener("click", function(element){
    let clickedElement = <HTMLInputElement>element.target;

    if (element.target && clickedElement.nodeName == "BUTTON"){
        clickedElement.parentElement.parentElement.remove();
    }

})
