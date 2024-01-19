export const getHora=async(capital:string)=>{
    const base_url= `https://api.api-ninjas.com/v1/worldtime?city=${capital}`
    const NINJA_API_KEY=  Deno.env.get("NINJA_API_KEY");
    const data2= await fetch(base_url,{headers:{"X-Api-Key":NINJA_API_KEY}})
    const response2= await data2.json();
    return response2.hour+" : "+response2.minute+" : " +response2.second;
}