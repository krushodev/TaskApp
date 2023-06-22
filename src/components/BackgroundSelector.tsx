import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, Flex, Box } from "@chakra-ui/react";
import { ChangeBackground } from "../types";

const BackgroundSelector = ({ changeBackground }: { changeBackground: ChangeBackground }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const colors: string[] = [
    "#acafaf",
    "#081e0d",
    "#e51d1b",
    "#67c74f",
    "#40299e",
    "#86af84",
    "#802b1e",
    "#ec9599",
    "#abe53d",
    "#72ccfcff",
    "#abe3d9ff",
    "#657710ff",
    "#edc662",
    "#0b9dcfff",
    "#fb6ecaff",
    "#2b40c2",
  ];

  const handleClick = (newBackground: string): void => {
    changeBackground(newBackground);
    onClose();
  };

  return (
    <Button onClick={onOpen}>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Themes</DrawerHeader>
          <DrawerBody>
            <Flex flexWrap="wrap" gap="10px" justify="center">
              {colors.map((color) => {
                return <Box bg={color} w="50px" h="50px" cursor="pointer" onClick={() => handleClick(color)}></Box>;
              })}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Button>
  );
};

export default BackgroundSelector;