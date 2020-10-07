export abstract class Coffee{

    public Discount:number;

    constructor(discount: number){
        this.Discount = discount;
    }

    public abstract Price(): number;

    public Strength(): string{
        return "Mild";
    }

}