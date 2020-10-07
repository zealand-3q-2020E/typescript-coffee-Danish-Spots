import { Coffee } from "./Coffee";

export class BlackCoffee extends Coffee{
    public CoffeeDrink(): string {
        return "Black Coffee";
    }
    constructor(discount: number){
        if (discount > 5 || discount < 0){
            throw new RangeError("The entered discount is outside the allowed range")
        }
        super(discount)
    }
    
    public Price(): number {
        return 20 - this.Discount;
    }
    
    public Strength(): string{
        return "Strong";
    }
}