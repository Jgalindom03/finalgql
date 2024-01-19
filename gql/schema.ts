export const typeDefs = `#graphql

    type Query {
        getContact(id:ID!):Contactog!
        getContacts:[Contactog!]!
    },

    type Mutation { 
        addContact(name:String!,numero:String!):Contactog!,
        deleteContact(id:ID!):Boolean!,
        updateContact(id:ID!, name:String, numero:String):Contactog!
    }
    type Contactog{
        name:String!,
        numero:String!,
        pais:String,
        hora:String
    }
`;