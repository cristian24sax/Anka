import { Generals,Polylang} from '../interfaces'
import { baseApi } from './baseApi'

export const getGenerals = async ()=>{
    try{

        const [{data:options},{data:polylang}] = await Promise.all([
            baseApi.get<Generals>('/general?populate=deep,10'),
            baseApi.get<Polylang>('/multilanguae?populate=deep'),
        ])
        return {options:options.data,polylang:polylang.data}
    }
    catch(error:any){
        console.log(error.message)
        throw new Error(error.message)
    }


}