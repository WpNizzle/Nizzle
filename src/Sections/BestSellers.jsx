import Product from '../components/Product';

function BestSellers() {
  return (
    <section className='py-12'>
        <h3 className='text-center text-3xl font-normal'>Best Sellers</h3>
        <div className="grid grid-cols-1 py-6 px-4 md:grid-cols-3 gap-4">
            <Product
            name="Product 1"
            price={19.99}
            rating={4.5}
            sales={100}
            image="https://i.pinimg.com/474x/2d/48/30/2d4830697fcebfc7c43812e55c75c800.jpg"
            category="Category 1"
            detailsLink="/product1-details"
            liveDemoLink="https://example.com/product1-demo"
            />
            <Product
            name="Product 2"
            price={24.99}
            rating={4.2}
            sales={100}
            image="https://i.pinimg.com/474x/2d/48/30/2d4830697fcebfc7c43812e55c75c800.jpg"
            category="Category 2"
            detailsLink="/product1-details"
            liveDemoLink="https://example.com/product1-demo"
            />
            <Product
            name="Product 3"
            price={14.99}
            rating={4.8}
            sales={100}
            image="https://i.pinimg.com/474x/2d/48/30/2d4830697fcebfc7c43812e55c75c800.jpg"
            category="Category 3"
            detailsLink="/product1-details"
            liveDemoLink="https://example.com/product1-demo"
            />
        </div>
    </section>
  );
}

export default BestSellers;
