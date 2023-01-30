const input = document.getElementById('input');
const childDiv =document.getElementById('display_images');
var imagecontainer = document.getElementById('imagecontainer');
async function DispImages(){

const inp = input.value;
console.log(inp);

const res = await fetch(`https://app.zenserp.com/api/v2/search?apikey=292d0ba0-9ffc-11ed-acf5-f354ec8fa194&q=${inp}&tbm=isch`)
   // console.log(res);
   const data = await res.json()
   // console.log(data);

   childDiv.innerHTML="";
   const array = data.image_results;
   // console.log(array);
   if(inp=="" ){
       alert("Please search an image to display!")
       childDiv.innerHTML="Try searching 'A cute Dog'!!!";
       childDiv.style.fontSize='25px';
       childDiv.style.color='white';
       childDiv.style.textAlign='center';
   }
   else{

   array.map((ele)=>{
       imagecontainer.innerHTML =`
           Your Search for "${inp}" returned ${ele.sourceUrl.length} results :
       `
       var innerimage = document.createElement("div")
       innerimage.innerHTML = `<img src="${ele.sourceUrl}" alt="">`

       childDiv.appendChild(innerimage);
    
   })
}

}