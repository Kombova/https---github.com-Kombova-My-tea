interface IItem {
    _id: string;
    typeOfProduct: string;
    classOfProduct: string;
    title: string;
    description: string;
    price: number;
    amount: number;
    step: number;
    mainImg: string;
    images?: string[];
    country?: string;
    region?: string;
    collectionYear?: string;
    yearOfPresetting?: string;
    stepVariants: string[];
}   
export default IItem;