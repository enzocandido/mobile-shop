import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useAuth } from "@/store/authStore";
import { Redirect, useRouter } from "expo-router";
import { LogOut } from "lucide-react-native";

export default function ProfileScreen() {
  const authData = useAuth();
  const setUser = useAuth((s) => s.setUser);
  const setToken = useAuth((s) => s.setToken);
  const router = useRouter();

  const disconnect = () => {
    setUser(null);
    setToken(null);
    useAuth.persist.clearStorage();
    router.push("/");
  };

  return (
    <Card className="max-w-[960px] w-full mx-auto">
      <Box>
        <VStack className="flex justify-center items-center">
          <Avatar size="2xl" className="mt-4">
            <AvatarFallbackText>{authData.user?.name}</AvatarFallbackText>
          </Avatar>
          <Heading size="xl" className="m-2">
            {authData.user?.name}
          </Heading>
        </VStack>
      </Box>

      <Button className="py-2 px-4" onPress={disconnect}>
        <ButtonIcon as={LogOut}></ButtonIcon>
        <ButtonText>Disconnect</ButtonText>
      </Button>
    </Card>
  );
}
