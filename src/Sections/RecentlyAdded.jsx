import Product from '../components/Product';

function RecentlyAdded() {
  return (
    <section className='py-12'>
        <h3 className='text-center text-3xl font-normal'>Recently Added</h3>
        <div className="grid grid-cols-1 py-6 px-4 md:grid-cols-3 gap-4">
            <Product
            name="Product 1"
            price={19.99}
            rating={4.5}
            sales={200}
            image="https://i.pinimg.com/474x/54/23/9f/54239f320bf4d99ef78280827141a18b.jpg"
            category="Category 1"
            detailsLink="/product1-details"
            liveDemoLink="https://example.com/product1-demo"
            />
            <Product
            name="Product 2"
            price={24.99}
            rating={4.2}
            sales={100}
            image="https://i.pinimg.com/474x/54/23/9f/54239f320bf4d99ef78280827141a18b.jpg"
            category="Category 2"
            detailsLink="/product1-details"
            liveDemoLink="https://example.com/product1-demo"
            />
            <Product
            name="Product 3"
            price={14.99}
            rating={4.8}
            sales={200}
            image="https://i.pinimg.com/474x/54/23/9f/54239f320bf4d99ef78280827141a18b.jpg"
            category="Category 3"
            detailsLink="/product1-details"
            liveDemoLink="https://example.com/product1-demo"
            />
        </div>
    </section>
  );
}

export default RecentlyAdded;
