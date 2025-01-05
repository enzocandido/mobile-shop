import { createOrder } from "@/api/orders";
import { Box } from "@/components/ui/box";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useCart } from "@/store/cartStore";
import { useMutation } from "@tanstack/react-query";
import { Redirect } from "expo-router";
import { Trash } from "lucide-react-native";
import { FlatList } from "react-native";

export default function CartScreen() {
  const items = useCart((state) => state.items);
  const resetCart = useCart((state) => state.resetCart);
  const removeProduct = useCart((state: any) => state.removeProduct);

  const removeProductCart = (product) => {
    removeProduct(product);
  };

  const createOrderMutation = useMutation({
    mutationFn: () =>
      createOrder(
        items.map((item) => ({
          productId: item.product.id,
          quantity: item.quantity,
          price: item.product.price, // manage from server side
        })),
      ),
    onSuccess(data) {
      console.log("Success Creating Order: ", data);
      resetCart();
    },
    onError(error) {
      console.log("Error: ", error);
    },
  });

  const onCheckout = async () => {
    createOrderMutation.mutate();
  };

  const onReset = async () => {
    resetCart();
  };

  if (items.length === 0) {
    return <Redirect href={"/"} />;
  }

  return (
    <FlatList
      data={items}
      contentContainerClassName="gap-2 max-w-[960px] w-full mx-auto p-2"
      renderItem={({ item }) => (
        <HStack className="bg-white p-3">
          <VStack space="sm">
            <Text bold>{item.product.name}</Text>
            <Text>$ {item.product.price}</Text>
          </VStack>
          <Text className="mt-6 ml-auto font-bold">{item.quantity}</Text>
          <Button
            size="xs"
            onPress={() => removeProductCart(item.product)}
            className="flex items-center justify-center absolute w-8 h-8 -top-1 -right-1 rounded-full border-red-600"
          >
            <ButtonIcon as={Trash} color="white" />
          </Button>
        </HStack>
      )}
      ListFooterComponent={() => (
        <Box className="flex-col sm:flex-row">
          <Button
            onPress={onCheckout}
            className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1"
          >
            <ButtonText size="sm">Checkout</ButtonText>
          </Button>
          <Button
            variant="outline"
            className="px-4 py-2 border-outline-300 sm:flex-1"
          >
            <ButtonText
              onPress={onReset}
              size="sm"
              className="text-typography-600"
            >
              Clear Cart
            </ButtonText>
          </Button>
        </Box>
      )}
    />
  );
}
