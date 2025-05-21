
    let cart = (function(){
        let items=[];
        return {
            addItem(item){
                items.push(item);
            },
            showItems(){
                return items;
            },
            deleteItem(item){
                let array = [];
             array = items.filter(i =>{
                if(i!==item)
                    return true;
                
              })
              items = array;

              console.log('the items left: ',items)

            }
        }
    })()
    console.log(cart.showItems())

    document.getElementById("addItem-btn").addEventListener('click',function(){
    let item = document.getElementById('item').value
    if(item.trim() === ''){
        
    }else{
        cart.addItem(item)
        console.log(cart.showItems())
        alert('Item added to cart')
        showCartItems()
        document.getElementById('item').value = ''
    }

    })
         
   // document.getElementById("showItems-btn").addEventListener('click',showCartItems)


    function deleteAction(item){
        cart.deleteItem(item)
        showCartItems();
    }






    // function to show all the cart items
    function showCartItems(){
        let Items = cart.showItems();
        let container = document.getElementById('items-container');
        container.innerHTML = '';
        Items.forEach(item => {
        let p = document.createElement('p');
        const div = document.createElement('div');
        const deleteBtn = document.createElement('button');
        
        deleteBtn.className = 'deleteItemButton';
        div.className = "item-container";
        p.className = 'cart-item';
        
        p.innerHTML = item;
        deleteBtn.innerHTML = 'delete 🗑️';

        deleteBtn.addEventListener("click",()=>{
                deleteAction(item);
        })
  
        div.appendChild(p);
        div.appendChild(deleteBtn);
        container.appendChild(div);
        });
    }