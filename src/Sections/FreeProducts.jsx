import Product from '../components/Product';

function FreeProduct() {
  return (
    <section className='py-12'>
        <h3 className='text-center text-3xl font-normal'>Free Products</h3>
        <div className="grid grid-cols-1 py-6 px-4 md:grid-cols-3 gap-4">
            <Product
            name="Product 1"
            price={"Free"}
            rating={4.5}
            sales={300}
            image="https://i.pinimg.com/736x/f3/7c/ef/f37cef3dc1024d0dd884f4bb61c2423f.jpg"
            category="Category 1"
            detailsLink="/product1-details"
            liveDemoLink="https://example.com/product1-demo"
            />
            <Product
            name="Product 2"
            price={"Free"}
            rating={4.2}
            sales={300}
            image="https://i.pinimg.com/736x/f3/7c/ef/f37cef3dc1024d0dd884f4bb61c2423f.jpg"
            category="Category 2"
            detailsLink="/product1-details"
            liveDemoLink="https://example.com/product1-demo"
            />
            <Product
            name="Product 3"
            price={"Free"}
            rating={4.8}
            sales={200}
            image="https://i.pinimg.com/736x/f3/7c/ef/f37cef3dc1024d0dd884f4bb61c2423f.jpg"
            category="Category 3"
            detailsLink="/product1-details"
            liveDemoLink="https://example.com/product1-demo"
            />
        </div>
    </section>
  );
}

export default FreeProduct;
