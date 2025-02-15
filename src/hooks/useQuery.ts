import { useState } from "react";

type DefaultQueryProps = {
    id:string
}; 

const useQuery = ():{
    onSearchById : <T extends DefaultQueryProps>(id:string,list:T[])=>T | undefined
}=>{


    const onSearchById = <T extends DefaultQueryProps>(idParam:string,list:T[]):T | undefined =>{
        const result = list.find((item,index)=>{
           return item.id === idParam
        })
        return result
    }


return {
    onSearchById
}


}

export default useQuery;