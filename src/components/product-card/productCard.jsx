import Button from "../button/button";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  return (
    <div className="border relative rounded overflow-hidden group shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition-all duration-200 group cursor-pointer">
      <img
        src={imageUrl}
        className="w-full h-[90%] object-cover group-hover:grayscale transition-all duration-300"
        alt="product-picture"
        draggable={false}
      />
      <div className="flex justify-between mx-4 h-8 items-center mt-3">
        <p className="text-xl font-semibold">{name}</p>
        <p className="text-xl">{price}</p>
      </div>
      <div className="absolute bottom-20 left-6 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-100">
        <Button buttonType="standardBtn">Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
