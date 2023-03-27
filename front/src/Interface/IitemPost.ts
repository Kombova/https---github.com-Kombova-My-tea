interface IitemPost {
    // _id?: string;
    [key:string]:any;
    typeOfProduct: string;
    classOfProduct: string;
    title: string;
    description: string;
    price: number;
    amount: number;
    step: number;
    mainImg: File | null | string;
    images?: FileList;
    country?: string;
    region?: string;
    collectionYear?: Date;
    yearOfPresetting?: Date;
    stepVariants?: string[];
}   
export default IitemPost;