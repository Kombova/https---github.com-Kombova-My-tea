

abstract class Aproduct {
    id: string;
    type: string;   //тип чай ложки тарелки наркотики
    images: string[];
    title: string;
    description: string;
    price: number;
    amount: number;
    typeAmount: string;
    stepAmount: string;

    constructor(id:string, type:string, images:string[], title:string, description:string ,price:number ,amount:number, typeAmount: string, stepAmount: string) {
        this.id=id;
        this.type=type;
        this.images=images;
        this.title=title;
        this.description=description;
        this.price=price;
        this.amount=amount;
        this.typeAmount=typeAmount;
        this.stepAmount=stepAmount;
    }
}

abstract class Atea extends Aproduct {
    country?: string;
    region?: string;
    collectionYear?: Date;
    pressingYear?: Date;
    arrSteps?: string[];

    constructor(id:string, type:string, images:string[], title:string, description:string ,price:number ,amount:number, typeAmount: string, stepAmount: string ,country?: string, region?: string, collectionYear?: Date, pressingYear?: Date, arrSteps?: string[]){
        super(id, type, images, title, description, price, amount, typeAmount, stepAmount);
        this.country=country;
        this.region=region;
        this.collectionYear=collectionYear;
        this.pressingYear=pressingYear;
        this.arrSteps=arrSteps;
    }
}

export {Aproduct,Atea}