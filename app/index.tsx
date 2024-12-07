import { ActivityIndicator, FlatList } from "react-native";
import ProductListItem from "@/components/ProductListItem";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
import { listProducts } from "@/api/products";
import { useQuery } from "@tanstack/react-query";
import { Text } from "@/components/ui/text";

export default function HomeScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: listProducts,
  });

  const numColumns = useBreakpointValue({
    default: 2,
    lg: 3,
    xl: 4,
  });

  if (isLoading) {
    return <ActivityIndicator className="h-screen w-full" />;
  }

  if (error) {
    return <Text>Error fetching products</Text>;
  }

  return (
    <FlatList
      key={numColumns}
      numColumns={numColumns}
      data={data}
      contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
      columnWrapperClassName="gap-2"
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
}
