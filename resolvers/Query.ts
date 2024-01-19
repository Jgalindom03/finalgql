import mongoose from "mongoose"
import { ContactoModel, ContactoModelType } from "../db/contactom.ts";
export const Query = {
getContact:async(_:unknown, args:{id:string}):Promise<ContactoModelType>=>{
    const contact= await ContactoModel.findById(args.id).exec()
    return contact
},
getContacts:async():Promise<ContactoModelType[]>=>{
    const contactos= await ContactoModel.find({}).exec()
    return contactos;
}

};