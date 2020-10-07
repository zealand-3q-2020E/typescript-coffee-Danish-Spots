import { Coffee } from "./Coffee";
import { IMilk } from "./IMilk";

export class Latte extends Coffee implements IMilk{
    
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
}