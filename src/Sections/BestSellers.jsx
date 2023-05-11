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
            image="product1.jpg"
            category="Category 1"
            />
            <Product
            name="Product 2"
            price={24.99}
            rating={4.2}
            image="product2.jpg"
            category="Category 2"
            />
            <Product
            name="Product 3"
            price={14.99}
            rating={4.8}
            image="product3.jpg"
            category="Category 3"
            />
        </div>
    </section>
  );
}

export default BestSellers;
