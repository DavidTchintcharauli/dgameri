const Portfolio = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mt-8 mb-4">Portfolio</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-200 p-4">
          <img src="image1.jpg" alt="Furniture 1" className="w-full h-auto" />
          <h3 className="text-lg font-bold mt-2">Furniture Piece 1</h3>
          <p className="text-gray-600">Description of furniture piece 1.</p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src="image2.jpg" alt="Furniture 2" className="w-full h-auto" />
          <h3 className="text-lg font-bold mt-2">Furniture Piece 2</h3>
          <p className="text-gray-600">Description of furniture piece 2.</p>
        </div>
        {/* Add more portfolio items */}
      </div>
    </div>
  );
};

export default Portfolio;