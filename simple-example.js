function createCart(){
    let items = [];

    return {  // returns an object
        addItem(item){
        items.push(item)
        console.log(`${item} added to cart successfully `)
        },
        showItems(){
            console.log('Cart Items', items)
        }

        
    }
}

let person = createCart()
console.log(person)
person.addItem('Car')
person.addItem('Laptop')

person.showItems()



person.addItem('Book')
person.addItem('Pen')

person.showItems()