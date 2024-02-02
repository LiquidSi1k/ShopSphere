const CartItems = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="flex justify-around items-center border-b">
      <img
        src={imageUrl}
        alt={`${name} product`}
        height={100}
        width={100}
        className="my-4 rounded"
      />
      <div className="w-2/4">
        <h2>{name}</h2>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItems;
