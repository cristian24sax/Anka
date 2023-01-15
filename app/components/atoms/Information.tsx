import { FC, PropsWithChildren } from "react";

export interface InformationProps{
    title:string
    type?:string
}


export const Information:FC<InformationProps>=({title,type=''})=>{

    return(
        <div className={`Information ${type}`}>
            <h2 className="Information-h2">{title}</h2>
        </div>
    )
}