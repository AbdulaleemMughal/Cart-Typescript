import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/currencyFormater";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreitemProps = {
  id: number;
  price: number;
  imgUrl: string;
  name: string;
};

const StoreItem = ({ id, price, imgUrl, name }: StoreitemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <>
      <Card className="h-100">
        <Card.Img
          src={imgUrl}
          variant="top"
          style={{ objectFit: "cover" }}
          height="200px"
        ></Card.Img>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
                + Add to Cart
              </Button>
            ) : (
              <div
                className="d-flex justify-content-center flex-column"
                style={{ gap: "0.5rem" }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ gap: "0.5rem" }}
                >
                  <Button
                    className=""
                    onClick={() => decreaseCartQuantity(id)}
                  >
                    -
                  </Button>
                  <span className="fs-3">{quantity}</span> in Cart
                  <Button
                    className="ms-2"
                    onClick={() => increaseCartQuantity(id)}
                  >
                    {" "}
                    +{" "}
                  </Button>
                  <Button
                    className="btn btn-danger w-50 justify-centent-center"
                    onClick={() => removeFromCart(id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default StoreItem;
