import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItem from "../data/items.json";
import { formatCurrency } from "../utilities/currencyFormater";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItem.find((item) => item.id === id);

  if (item === undefined) return null;

  return (
    <>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex text-align-center"
      >
        <img
          src={item?.imgUrl}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {item?.name}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".85rem", marginLeft: '5px' }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{fontSize: '0.90rem'}}>
            {formatCurrency(item?.price)}
          </div>
        </div>
        <div>{formatCurrency(item?.price * quantity)}</div>
        <button className="btn btn-outline-danger" onClick={() => removeFromCart(item?.id)}>&times;</button>
      </Stack>
    </>
  );
};

export default CartItem;
