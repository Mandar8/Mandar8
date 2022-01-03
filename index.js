//XML  HTTP REQUEST(xhr) (VIA API)
// Step 01: create a XHR object
var  request= new XMLHttpRequest();
//Step 02:initatiate a connection(starting a connections)
//true is used if your api doesnot want to affect the remaining  execution of your code

request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
//step 03: sending a connection

request.send();
//step 04: once the data has been received successfully from server we need to extract te data  from JSON 

//some conversion is needed here 
request.onload=function(){
var data=JSON.parse(request.response);
console.log(data);
var rest = data.filter((x)=>{
return x.region === "Asia"

})
console.log(rest);

var data1 = data.filter((y)=>{
return y.population < 200000 ;
})
console.log(data1);

var data2 = data.forEach(z => {

console.log(`${z.name}   ${z.capital}  ${z.flag}`);
    
});
    
console.log(data2)

var data3 =  data.reduce((acc,curr)=> {

    return acc.population =+ curr.population 

})

console.log(data3);

var data4 = data.map((q)=>{
 return q.currencies === "USD" ;
 
})
console.log(data4);

}




