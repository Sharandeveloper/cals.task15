let Xhr = new XMLHttpRequest();
console.log(Xhr);
Xhr.open("GET","https://restcountries.com/v3.1/all" );
Xhr.send();
Xhr.onload = function() {
    const data = JSON.parse(Xhr.response);
    console.log(data);
    console.log(Xhr.status);

    
}
 data.map((value) => { console.log(
    `
    Region : ${value.region}
    `

 );}
 );

  data.Filter((value) => value.region === "Asia");
 console.log(FiltredArray);
 


 