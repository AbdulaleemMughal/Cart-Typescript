import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";
import { Col, Row } from "react-bootstrap";

const Store = () => {
  return (
    <div>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={3}>
        {storeItems.map(item => 
            <Col key={item.id} style={{marginTop: '15px'}}>
                <StoreItem {...item} />
            </Col>
        )}
      </Row>
    </div>
  )
}

export default Store;
