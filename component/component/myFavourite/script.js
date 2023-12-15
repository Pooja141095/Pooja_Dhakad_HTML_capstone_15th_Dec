
    const fav = JSON.parse(localStorage.getItem('fav'));
   
    console.log(fav.length)
    document.getElementById('item_lent').innerHTML=`My Favourite ${fav.length}`
    fav.map((row)=>{
        console.log(row)
        console.log(row.image)
        const src=row.image
        console.log(src)
    
       const favPic=document.querySelector('.new')
   
    favPic.insertAdjacentHTML("beforeend",`
     <div class="fav_item"><img class="favPic" src="${src}"/>
     <button onclick="itemDlt(${row.id})" class="dlt">Delete</button>
     </div> 
          
    `)
    })
     function itemDlt(id){
      
        console.log(fav)
        // localStorage.clear()

        
        alert(id)
      const del=fav.filter((row)=>{
          console.log(row)
           
          return row.id!==id
           
            

        })
        console.log(del)
        localStorage.setItem('fav', JSON.stringify(del));
        window.location.reload()
     
        

   
   
       }
  
   
   


