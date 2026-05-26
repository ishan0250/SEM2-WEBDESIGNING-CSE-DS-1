//fetch("https://fakestoreapi.com/products")
    //.then((products)=> products.json());
    //.then((data) =>console.log((data)))
    //.catch((error)=>console.log(error));
/*fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())   // response.json() parses the JSON
  .then((data) => console.log(data))     // logs the parsed data
  .catch((error) => console.log(error)); // handles errors*/
const getData=async()=>{
    try{
    const response =await fetch("https://fakestoreapi.com/products")
    const data=await response.json()
    console.log(data)
    }
catch(error){
    console.log(error)
}
}
getData()