import OneItemFull from "@/components/ViewItems/OneItemFull";
import { apiRequest } from "@/services/services";
import IItem from "@/Interface/IItem";

export const getStaticPaths = async () =>{
    const data = await apiRequest.getAllItems();
    const paths = data.map(({_id})=>({
        params: {id: _id},
    }))
    return{
        paths,
        fallback: false,
    }
}

export const getStaticProps = async(context:any) =>{
    
    const {id} = context.params;
    const data = await apiRequest.getAloneItem(id)
    if(!data){
        return{
            notFound: true
        }
    }

    return{
       props:{item: data}, 
    }

}

const item = ({item}:any) =>{
    return(
           <OneItemFull item ={item}/>
    )
}
export default item;