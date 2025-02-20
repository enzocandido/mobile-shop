import { Link, Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Icon } from "@/components/ui/icon";
import { ShoppingCart, User } from "lucide-react-native";
import { Pressable } from "react-native";
import { useCart } from "@/store/cartStore";
import { Text } from "@/components/ui/text";
import { useAuth } from "@/store/authStore";

const queryClient = new QueryClient();

export default function RootLayout() {
  const cartitemsNum = useCart((state) => state.items.length);
  const isLoggedIn = useAuth((s) => !!s.token);

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider>
        <Stack
          screenOptions={{
            headerRight: () =>
              cartitemsNum > 0 && (
                <Link href={"/cart"} asChild>
                  <Pressable className="flex-row gap-2">
                    <Icon as={ShoppingCart} />
                    <Text>{cartitemsNum}</Text>
                  </Pressable>
                </Link>
              ),
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "Shop",
              headerTitleAlign: "center",
              headerLeft: () =>
               
                  <Link href={isLoggedIn ? "/profile" : "/login"} asChild>
                    <Pressable className="flex-row gap-2">
                      <Icon as={User} />
                    </Pressable>
                  </Link>
                
            }}
          />
          <Stack.Screen
            name="product/[id]"
            options={{ title: "Product", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="(auth)/login"
            options={{ title: "Login", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="cart"
            options={{ title: "Cart", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="profile"
            options={{ title: "My Profile", headerTitleAlign: "center" }}
          />
        </Stack>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
