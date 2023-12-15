

    const fav = JSON.parse(localStorage.getItem('cart'));
    function cart(){
    document.getElementById('item_lent').innerHTML=`My Favourite ${fav.length}`
    fav.map((row,i)=>{
        console.log(row)
        console.log(row.image)
        const src=row.image
        console.log(src)
        const price=row.value
        console.log(row.quantity)
        
       
    
       const favPic=document.querySelector('.new')
   
    favPic.insertAdjacentHTML("beforeend",`
    <div class=cartItem>
    <div class="cart_item"><img class="favPic" src="${src}"/>
    <h4 class="price">₹${price}</h4>
    <button class='increase' data-action="increase">+</button>
    <h4 class="quant">${row.quantity}</h4>
    <button class='decrease' data-action="decrease" )'>-</button>
    <button class="dlt" onclick='itemDlt(${row.id})' >Delete</button>
    </div> 
    </div>
    
     
          
    `)
    const cartItem=favPic.querySelectorAll('.cartItem')
    cartItem.forEach((item)=>{
      console.log(item.querySelector('.price').innerText==price)
      if( item.querySelector('.price').innerText==price

      ){
        


      }
      else{
        item
        .querySelector('[data-action=increase]')
        .addEventListener("click",()=>{
          fav.forEach((cartItm)=>{
            console.log(item)
            if( cartItm.value==price)
            {
           
             const inc=  item.querySelector(".quant").innerText=++row.quantity
           let total=0
           console.log(inc)
           console.log(price)
           total +=price*inc
           console.log(total)
           document.querySelector(".totalPrice").innerText=total
         
            

            }

          })
        });

        item
        .querySelector('[data-action=decrease]')
        .addEventListener("click",()=>{
          fav.forEach((cartItm)=>{
            console.log(item)
            if( cartItm.value==price)
            {
           
              const inc= item.querySelector(".quant").innerText=--row.quantity
              let total=0
               total +=price*inc
               console.log(total)
               document.querySelector(".totalPrice").innerText=total
            
  
            }
  
          })
        })
       

      }
      







    })


    // total()
    })
    }
    cart()
    function buy(){
     const url="../form/index.html"
     window.open(url,'_blank')
      
    }
     function itemDlt(id){
      
        console.log(fav)
        // localStorage.clear()

        
        alert(id)
      const del=fav.filter((row)=>{
          console.log(row)
           
          return row.id!==id
           
            

        })
        console.log(del)
        localStorage.setItem('cart', JSON.stringify(del));
        window.location.reload()
    
   
       }
      
      
      
   
   


