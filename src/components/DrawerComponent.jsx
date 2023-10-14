import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import {SidePanel} from "./sidePanel/SidePanel.jsx";

const DrawerComponent = ({ onClose, isOpen, dataProps}) => {
  return (
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent maxSize="312px">
          {/*<DrawerHeader borderBottomWidth="1px"></DrawerHeader>*/}
          <DrawerBody>{/* <div>Адрес: {dataProps.address}</div> */}
            <SidePanel/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
  );
};

export default DrawerComponent;
