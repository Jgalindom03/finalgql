import { GraphQLError } from "graphql";
import { ContactoModel, ContactoModelType } from "../db/contactom.ts";
import { getCity } from "../getApis/getCity.ts";
import { getCapital } from "../getApis/getCapital.ts";
import { getHora } from "../getApis/getHora.ts";
import { getvaltel } from "../getApis/getvaltel.ts";
export const Mutation = {
    addContact:async(_:unknown, args:{name:string,numero:string}):Promise<ContactoModelType>=>{
        const val:boolean= await getvaltel(args.numero);

        if(!val){
            throw new GraphQLError("El telefono no es valido")
        }
        const contacto= new ContactoModel({
            name:args.name,
            numero:args.numero,
            pais: await getCity(args.numero),
        })
        await contacto.save();
        return contacto;
    },
    deleteContact:async(_:unknown, args:{id:string}):Promise<boolean>=>{
            const contactoborrado= await ContactoModel.findByIdAndDelete(args.id).exec();
            if(!contactoborrado){return false};
            return true;
    },
    updateContact: async(_:unknown, args:{id:string, name:string, numero:string}):Promise<ContactoModelType>=>{
        const contactoactualizado= await ContactoModel.findByIdAndUpdate({_id:args.id}, { numero:args.numero},{runValidators:true});
        return contactoactualizado
    
    }
};