import { BlackCoffee } from "./BlackCoffee";
import { Cortado } from "./Cortado";
import { Latte } from "./Latte";

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
console.log("Discount: " + cort.Discount + ", Price: " + cort.Price() + ", MlMilk: " + cort.MlMilk() + ", Strength: " + cort.Strength());
console.log("Discount: " + latt.Discount + ", Price: " + latt.Price() + ", MlMilk: " + latt.MlMilk() + ", Strength: " + latt.Strength());
console.log("Discount: " + bc.Discount + ", Price: " + bc.Price() + ", Strength: " + bc.Strength());
console.log("Discount: " + bcNoDiscount.Discount + ", Price: " + bcNoDiscount.Price() + ", Strength: " + bcNoDiscount.Strength());
//console.log("Discount: " + bc6.Discount + ", Price: " + bc6.Price() + ", Strength: " + bc6.Strength());
