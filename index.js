//1

class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    toText (){
        return `${this.name} ${this.price}€ in total. ${this.price*0.16} € VAT incl.`
    }

    containedVAT(){
        return `${this.price*0.16} € VAT incl.`
    }
}

const tracksuit = new Product("Adidas tracksuit", 150.0)
const shoes = new Product("Puma running shoes", 85.99)
const socks = new Product("Socks set", 4.99)

console.log(tracksuit.toText())
console.log(tracksuit.containedVAT())

//2

class Cart {
    constructor(){
        this.products = []
    }

    addProduct(shoppedProduct) {
        if(shoppedProduct instanceof Product){
            this.products.push(shoppedProduct)
            return `${this.products.length} product is in the cart.`
        } else {return "The product is not available in the shop."
        }
    }

    getProductInfoCart() {

    }
}

const cart = new Cart()

console.log(cart.addProduct(tracksuit))
console.log(cart.addProduct(shoes))
console.log(cart.addProduct("potato"))
console.log(cart.addProduct(socks))


