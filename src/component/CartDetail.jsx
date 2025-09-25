import iconDelete from "../assets/icon-delete.svg";

function CartDetail({ cartQuantity, products }) {
  return (
    <div className="space-y-6">
      {/* Cart Items Detail */}
      <div className="flex items-center gap-4">
        <img
          src={products[0]}
          alt="Product"
          className="w-12 h-12 object-cover rounded-lg"
        />
        {/* Cart Item text */}
        <div className="block">
          <span className="text-gray-500 text-preset-3-regular">
            Fall Limited Edition Sneakers
          </span>
          {/* Price Detail container */}
          <div className="text-preset-3-regular text-gray-500 ">
            <span>$125.00</span> x <span>{cartQuantity}</span>{" "}
            <span className="text-preset-3-bold">{`$ ${
              cartQuantity * 125
            }`}</span>
          </div>
        </div>

        {/* Icon Delete*/}
        <button>
          <img src={iconDelete} alt="Icon Delete" />
        </button>
      </div>

      {/* Checkout Button */}
      <button className="flex items-center justify-center text-gray-900 text-preset-3-bold bg-[#FF7E1B] hover:bg-[#FFAB6A] py-4 w-full rounded-xl cursor-pointer mb-6">
        Checkout
      </button>
    </div>
  );
}

export default CartDetail;
