import { useParams } from "react-router-dom";
import furnitureData from "./FurnitureData";

const FurnitureDetail = () => {
    const { id } = useParams();
    const furnitureItem = furnitureData.find(item => item.id === parseInt(id))

    if (!furnitureItem) {
        return <div>Furniture Not found</div>
    }

    const { image, size, price } = furnitureItem

    return (
        <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="max-w-md rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src={image} alt="Furniture" />
          </div>
          <div className="max-w-md rounded overflow-hidden shadow-lg m-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Furniture</div>
              <p className="text-gray-700 text-base">Size: {size}</p>
              <p className="text-gray-700 text-base">Price: {price}</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default FurnitureDetail