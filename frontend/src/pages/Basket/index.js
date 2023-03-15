import React from "react";
import { Link } from "react-router-dom";
import { Alert, Image, AlertIcon, Button, Box, Text } from "@chakra-ui/react";
import { useBasket } from "../../contexts/BasketContext";

function Basket() {
  const { items, removeFromBasket } = useBasket();

  const total = items.reduce((acc, obj) => acc + obj.price, 0);

  return (
    <Box p="5">
      {items.length < 1 && (
        <Alert status="warning">
          <AlertIcon />
          You have not any items in your basket.
        </Alert>
      )}
      {items.length > 0 && (
        <>
          <ul style={{ listStyleType: "decimal" }}>
            {items.map((item) => (
              <li key={item._id} style={{ margin: 20 }}>
                <Link to={`/product/${item._id}`}>
                  <Text fontSize="22">
                    {item.title} - {item.price} $
                  </Text>
                  <Image
                    htmlWidth={300}
                    loading="lazy"
                    src={item.photos[0]}
                    alt="basket item"
                  />
                </Link>
                <Button
                  mt="2"
                  size="sm"
                  colorScheme="red"
                  onClick={() => removeFromBasket(item._id)}
                >
                  Remove from Basket
                </Button>
              </li>
            ))}
          </ul>
          <Box mt="10">
            <Text fontSize="22">Total: {total}$</Text>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Basket;
