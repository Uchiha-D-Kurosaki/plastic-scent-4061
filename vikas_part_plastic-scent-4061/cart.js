 let data=[
    {
        img1:"https://cdn04.nnnow.com/web-images/medium/styles/E8MATF2IDYU/1605084283131/1.jpg",
        img2:"https://cdn07.nnnow.com/web-images/medium/styles/E8MATF2IDYU/1605084283128/2.jpg",
        titile:"Elizabeth Arden",
        name:"Green Tea Scent Spray",
        price:"2,675",
    },
    {
        img1:"https://cdn14.nnnow.com/web-images/medium/styles/GX1INCBAMS6/1487245292188/1.jpg",
        img2:"https://cdn14.nnnow.com/web-images/medium/styles/GX1INCBAMS6/1487245292188/1.jpg",
        titile:"DAVIDOFF",
        name:"Cool Water Sea Rose Eau De Toilette",
        price:"4600",
    },
    {
        img1:"https://cdn06.nnnow.com/web-images/medium/styles/MI7U8R8C848/1580463748784/1.jpg",
        img2:"https://cdn15.nnnow.com/web-images/medium/styles/MI7U8R8C848/1580463748782/2.jpg",
        titile:"BURBERRY",
        name:"Her Intense Eau De Parfum",
        price:"8250",
    },
  


];

console.log(data)



 let   cotainerLeft=  document.getElementById('cotainerLeft')


function leftappend(data){

data.forEach(function({img1,img2,titile,name,price }){

let imgtag1 =document.createElement("img")
imgtag1.src=img1

let imgtag2 =document.createElement("img")
imgtag1.src=img2
let h3=document.createElement("name")
h3.innerText=name;
let p1=document.createElement("p")
p1.innerText=titile;

let p2=document.createElement("p")
p2.innerText=price

let div= document.createElement("div")
div.append(img1,img2,h3,p1,p2)

cotainerLeft.append(div)

})




}

leftappend(data)

