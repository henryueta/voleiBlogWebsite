
export type FormatedDateProps = Record<"day"|"month"|"year",number>


const useDate = ():{
    onFormatDate:(date:string)=>FormatedDateProps
}=>{

    const onFormatDate = (date:string)=>{

        return {
            day:new Date(date).getDate(),
            month:new Date(date).getMonth() + 1,
            year:new Date(date).getFullYear()
        }

    }

    return {
        onFormatDate
    }

}

export default useDate;