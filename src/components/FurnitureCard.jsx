import PropTypes from 'prop-types';
import FurnitureData from './FurnitureData';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const FurnitureCard = ({ id, size, price, image }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-2xl transition duration-200 ease-in-out transform hover:bg-gray-200 hover:scale-105 hover:shadow-xl">
      <Link to={`/furniture/${id}`}>
        <img className="object-cover" src={image} alt="Furniture" />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Furniture</div>
        <p className="text-gray-700 text-base">Size: {size}</p>
        <p className="text-gray-700 text-base">Price: {price}</p>
      </div>
    </div>
  );
};

FurnitureCard.propTypes = {
  id: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {FurnitureData.map(item => (
          <FurnitureCard key={item.id} id={item.id} size={item.size} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Home;
