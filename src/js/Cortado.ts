import { Coffee } from "./Coffee"
import { IMilk } from "./IMilk";

export class Cortado extends Coffee implements IMilk{

    constructor(discount: number){
        super(discount);

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
}