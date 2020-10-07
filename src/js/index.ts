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

let cort: Cortado =  new Cortado(5);
let latt: Latte = new Latte(10);
console.log("Discount: " + cort.Discount + ", Price: " + cort.Price() + ", MlMilk: " + cort.MlMilk() + ", Strength: " + cort.Strength());
console.log("Discount: " + latt.Discount + ", Price: " + latt.Price() + ", MlMilk: " + latt.MlMilk() + ", Strength: " + latt.Strength());
