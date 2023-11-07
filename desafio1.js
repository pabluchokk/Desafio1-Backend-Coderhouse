class ProductManager {
    constructor(){
        this.products = [];
        this.newId = 1;
    }

    addProduct(title,description,price,thumbnail,code,stock){
        if (!title || !description || !price || !thumbnail || !code || !stock === undefined){
            console.error("Todos los campos son obligatorios.");
            return
        }

        if (this.products.some(product => product.code === code)) {
            console.error("El codigo del producto ya existe.");
            return
        }

        const product = {
            id: this.newId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(product)
    }

    getProducts(){
        return this.products;
    }

    getProductById(id){
        const product = this.products.find(product => product.id === id);
        if(product) {
            return product
        } else {
            console.error("Producto no encontrado");
            return null
        }
    }
}

const productManager = new ProductManager();
productManager.addProduct("Monitor", "22 pulgadas 75hz", 59.99, "monitor.jpg", 1001, 10)
productManager.addProduct("Teclado", "RedDragon", 19.99, "teclado.jpg", 2001, 5)

console.log(productManager.getProducts());

const productToUpdate = {
    price: 39.99,
    stock: 8
}
productManager.addProduct("Mouse", "Logitech", 9.99, "mouse.jpg", 1002, 5)

console.log(productManager.getProducts());

const product = productManager.getProductById(2)
if (product) {
    console.log(product)
}

productManager.addProduct("Auriculares", "HyperX", 39.99, "auriculares.jpg", 2002, 15)