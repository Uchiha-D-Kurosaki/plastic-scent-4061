function navbar(){
    return `
      
    <div id="container">
    <div>
 <a href="">
  <img src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png" alt="">
 </a>
</div>
 <div>
  <a href="">
    <i class="fa fa-map-marker" style="font-size:20px ; color:rgb(255, 31, 147);"></i>  Store Location
  </a>
</div>
<div>
  <a href="">
      <span id="color"> * * *</span> Get 10 % OFF on your first purchase.Use Code   <span id="color">* * *</span> <br> <span style="margin-left:40%;">BEAUTY10</span> 
  </a>
</div>
<div>
  <a href="">
    <i class="fa fa-mobile" style="font-size:20px; color:rgb(255, 31, 147);"></i>    Get APP
  </a>
</div>
<div>
    <a href="">
        <i class='fa fa-cube' style="font-size:20px; color: rgb(255, 31, 147);"></i> Track Order
    </a>
</div>
<div>
    <a href="">
        <i class="fa fa-trophy" aria-hidden="true"style="font-size:20px; color: rgb(255, 31, 147);"></i>  Loyalty
    </a>
</div>
</div>

<br>
<div id="container2">
<div class="srcha"> 
    <i class="fa fa-search" aria-hidden="true"style="font-size:24px;color: rgb(255, 31, 147);margin-left:20px"></i>   <input type="text" placeholder="Search SEPHORA" id="srch">
</div>

 <div>
    <img src="https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png" alt="">
</div>

 <div id="icon">
   <a href="index.html">   <div class="love" ><i class="fa fa-heart" aria-hidden="true"style="font-size:24px" ></i></div> </a>
   <a href="index.html"><div     class="bag"><i class="fa fa-shopping-bag" aria-hidden="true"style="font-size:24px"></i></div></a> 
<a href="index.html"><div class="person"><i class="fa fa-user" style="font-size:24px"></i> <span style="color:black ;">Login</span></div></a>   

 </div>

</div>

<div class="text">
     <ul>
     <li><a href="">SALE</a> </li>

     
     <li><a href="">MAKEUP</a>  <ul>
      <li> FACE</li>
      <li>LIP</li>
      <li>CHEEKS</li>
      <li>NAIL MAKEUP</li>
      <li>MAKEUP ACCESSORIES</li>
      <li>VEGAN</li>
   </ul>
  </li> 
   
      <li><a href="">SKINCARE</a>   <ul>
        <li>MOISTURIZERS</li>
        <li>CLEANSERS</li>
        <li>TREATMENT & HIGH TECH TOOL</li>
        <li>MARKS</li>
        <li>BATH & SHOWER</li>
        <li>VEGAN</li>
     </ul>
    </li> 
   
     <li><a href="">FRAGRANCE</a>
      <ul>
        <li>WOMENS</li>
        <li>MENS</li>
     </ul></li>  
    
     <li><a href="">HAIRCARE</a>
      <ul>
        <li>SHAMPOO & CONDITIONER</li>
        <li>HAIR STYLING & TREATEMENT</li>
     </ul>
    </li> 
  
    <li>  <a href="">TOOLS & BRUSHES</a>
      <ul>
        <li>BRUSHES</li>
        <li>TOOLS</li>
        <li>VEGAN</li>
     </ul></li> 
  
    <li> <a href="">BRANDS</a>
      <ul>
        <li>TOP MAKEUP BRANDS</li>
        <li>TOP SKINCARE BRANDS</li>
        <li>TOP MAKEUP BRANDS</li>
        <li>NEW IN</li>
        <li>BRANDS A-Z</li>
     </ul>
    </li>
   
    </ul> 
</div>
   
    `
}

export default navbar








// html part mai lgana hai 

import navbar from './components/navbar.js';
console.log('navbar:',navbar)

// vaha se hata ke div container navbar ke liye or footercontainer footer ke liye 


let container = document.getElementById("nav_container")
container.innerHTML = navbar()