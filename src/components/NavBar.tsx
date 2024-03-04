import { HStack, Image, Heading } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" p={3} mb={2} >
        <Image src={logo} boxSize="60px"></Image>
        <Heading>PlayScape</Heading>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
