import { Coffee } from "./Coffee";
import { IMilk } from "./IMilk";

export class Latte extends Coffee implements IMilk{
    public CoffeeDrink(): string {
        return "Latte";
    }
    
    constructor(){
        super(0)
    }
    
    public Price(): number {
        return 40;
    }

    MlMilk(): number {
        return 120;
    }
    
    public Strength(): string{
        return "Weak";
    }

    public GetCoffeeString(): string{
        return "Discount: " + this.Discount + ", Price: " + this.Price() + ", Strength: " + this.Strength() + ", MlMilk: " + this.MlMilk();
    }
}