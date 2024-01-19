export const getCapital= async(pais:string)=>{
    const base_url=`https://api.api-ninjas.com/v1/country?name=${pais}`
    const NINJA_API_KEY=  Deno.env.get("NINJA_API_KEY");
    const data= await fetch(base_url,{headers:{"X-Api-Key":NINJA_API_KEY}})
    const response= await data.json();
    console.log(response)
    console.log(response[0].capital)
    return response[0].capital;
}