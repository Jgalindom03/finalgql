import { ContactoModel,ContactoModelType } from "../db/contactom.ts"
import { getCity } from "../getApis/getCity.ts";
import { getCapital } from "../getApis/getCapital.ts";
import { getHora } from "../getApis/getHora.ts";
export const Contactog={
    hora: async(parent:ContactoModelType)=>{
        if(parent.pais){
            const capital= await getCapital(parent.pais)
            return await getHora(capital);
        }
    }
}