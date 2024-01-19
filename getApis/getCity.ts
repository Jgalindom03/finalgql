export const getCity= async(numero:string)=>{
    const base_url=`https://api.api-ninjas.com/v1/validatephone?number=${numero}`
    const NINJA_API_KEY=  Deno.env.get("NINJA_API_KEY");
    const data= await fetch(base_url,{headers:{"X-Api-Key":NINJA_API_KEY}})
    const response= await data.json();
    console.log(response.country)
    console.log(response)
    return response.country;
    }