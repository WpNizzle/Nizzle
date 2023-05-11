import Product from '../components/Product';

function FeaturedProducts() {
  return (
    <section className='py-12'>
        <h3 className='text-center text-3xl font-normal'>Featured Products</h3>
        <div className="grid grid-cols-1 py-6 px-4 md:grid-cols-3 gap-4">
            <Product
            name="Product 1"
            price={19.99}
            rating={4.5}
            image="https://i.pinimg.com/474x/42/cb/e3/42cbe3872356e82a184f3630441b789d.jpg"
            category="Category 1"
            />
            <Product
            name="Product 2"
            price={24.99}
            rating={4.2}
            image="https://i.pinimg.com/474x/42/cb/e3/42cbe3872356e82a184f3630441b789d.jpg"
            category="Category 2"
            />
            <Product
            name="Product 3"
            price={14.99}
            rating={4.8}
            image="https://i.pinimg.com/474x/42/cb/e3/42cbe3872356e82a184f3630441b789d.jpg"
            category="Category 3"
            />
        </div>
    </section>
  );
}

export default FeaturedProducts;
