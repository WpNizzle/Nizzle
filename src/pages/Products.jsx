import Product from "../components/Product";

function ViewProducts(){
    return(
        <section>
            <div className="grid grid-cols-1 py-6 px-4 mb-4 md:grid-cols-3 gap-4">
                <Product
                name="Product 1"
                price={19.99}
                rating={4.5}
                image="https://i.pinimg.com/474x/66/d8/b9/66d8b967907bb785450f9c4425c01da8.jpg"
                category="Category 1"
                />
                <Product
                name="Product 2"
                price={24.99}
                rating={4.2}
                image="https://i.pinimg.com/474x/66/d8/b9/66d8b967907bb785450f9c4425c01da8.jpg"
                category="Category 2"
                />
                <Product
                name="Product 3"
                price={14.99}
                rating={4.8}
                image="https://i.pinimg.com/474x/66/d8/b9/66d8b967907bb785450f9c4425c01da8.jpg"
                category="Category 3"
                />
            </div>

            <div className="grid grid-cols-1 py-6 px-4 mb-4 md:grid-cols-3 gap-4">
                <Product
                name="Product 1"
                price={19.99}
                rating={4.5}
                image="https://i.pinimg.com/474x/66/d8/b9/66d8b967907bb785450f9c4425c01da8.jpg"
                category="Category 1"
                />
                <Product
                name="Product 2"
                price={24.99}
                rating={4.2}
                image="https://i.pinimg.com/474x/66/d8/b9/66d8b967907bb785450f9c4425c01da8.jpg"
                category="Category 2"
                />
                <Product
                name="Product 3"
                price={14.99}
                rating={4.8}
                image="https://i.pinimg.com/474x/66/d8/b9/66d8b967907bb785450f9c4425c01da8.jpg"
                category="Category 3"
                />
            </div>

            <div className="grid grid-cols-1 py-6 px-4 mb-4 md:grid-cols-3 gap-4">
                <Product
                name="Product 1"
                price={19.99}
                rating={4.5}
                image="https://i.pinimg.com/474x/66/d8/b9/66d8b967907bb785450f9c4425c01da8.jpg"
                category="Category 1"
                />
                <Product
                name="Product 2"
                price={24.99}
                rating={4.2}
                image="https://i.pinimg.com/474x/66/d8/b9/66d8b967907bb785450f9c4425c01da8.jpg"
                category="Category 2"
                />
                <Product
                name="Product 3"
                price={14.99}
                rating={4.8}
                image="https://i.pinimg.com/474x/66/d8/b9/66d8b967907bb785450f9c4425c01da8.jpg"
                category="Category 3"
                />
            </div>

            
        </section>
    )
}

export default ViewProducts;