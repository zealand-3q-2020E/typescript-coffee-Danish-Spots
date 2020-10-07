import { Coffee } from "./Coffee"
import { IMilk } from "./IMilk";

export class Cortado extends Coffee implements IMilk{
    
    public CoffeeDrink(): string {
       return "Cortado"
    }

    constructor(){
        super(0);
    }

    MlMilk(): number {
        return 25;
    }

    public Price(): number {
        return 25;
    }

    public Strength(): string{
        return "Weak";
    }

    public GetCoffeeString(): string{
        return "Discount: " + this.Discount + ", Price: " + this.Price() + ", Strength: " + this.Strength() + ", MlMilk: " + this.MlMilk();
    }
}