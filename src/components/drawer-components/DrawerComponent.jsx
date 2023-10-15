import { Drawer, DrawerBody, DrawerContent } from "@chakra-ui/react";

import styles from "./drawer-components.module.css";
import PointCard from "../point-card/PointCard";

const DrawerComponent = ({
  onClose,
  isOpen,
  dataProps,
  addRoute,
  userLocation,
}) => {
  return (
    <>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs" W>
        <DrawerContent>
          <DrawerBody>
            <div className={styles.title}>Рекомендуемые отделения</div>
            <div className={styles.subtitle}>Все отделения списком</div>
            <PointCard
              addRoute={addRoute}
              dataProps={dataProps}
              userLocation={userLocation}
              onClose={onClose}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
