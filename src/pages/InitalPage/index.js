import React from "react";
import { 
  Container, 
  Title, 
  TitleSpan, 
  Subtitle, 
  Button, 
  Image 
} from "./styles";
import { useNavigation } from "@react-navigation/native";

function InitalPage() {
  const navigation = useNavigation();

  return (
    <Container>
      <Title animation={"pulse"} duration={1500}>
        <TitleSpan>Star</TitleSpan>Dust
      </Title>
      <Subtitle>Aprenda Enquanto Se Diverte!</Subtitle>
      <Button
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Image
          source={require("../../assets/InitialPageAssets/send.png")}
        ></Image>
      </Button>
    </Container>
  );
}

export default InitalPage;
