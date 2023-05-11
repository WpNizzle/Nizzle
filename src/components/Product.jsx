import PropTypes from 'prop-types';

function Product({ name, price, rating, image, category }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="mb-4">
        <img src={image} alt={name} className="w-full h-auto" />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-500 text-sm mb-2">{category}</p>
        <p className="text-gray-700 text-lg mb-2">${price}</p>
        <div className="flex items-center justify-center">
          <span className="text-yellow-500">{rating}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 1L4 7h3v10h6V7h3L10 1zm0 2.828L13.586 7H6.414L10 3.828z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className='grid grid-cols-2 gap-4'>
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-600">
              Details
            </button>
            <button className="bg-gray-500 text-white rounded-lg px-4 py-2 mt-4 hover:bg-gray-600">
              Live Demo
            </button>
        </div>
       
      </div>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Product;
