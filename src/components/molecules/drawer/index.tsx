import React from "react";
import { DrawerContainer, HeaderDrawer, Close } from "./styles";
import { useDrawer } from "../../../hooks/store/useDrawer";
import { Background } from "styles/global";

interface IDrawer {
  children: any;
  titleHeader?: string;
}

const Drawer = ({ children, titleHeader }: IDrawer) => {
  const { open, setOpen } = useDrawer();

  return (
    <>
      <DrawerContainer right={open ? "0%" : ""}>
        <Background />
        <div className="col-10">
          <HeaderDrawer>
            <button onClick={() => setOpen(!open)}>
              {titleHeader} <Close id="lala" />
            </button>
          </HeaderDrawer>
          {children}
        </div>
      </DrawerContainer>
    </>
  );
};

export default Drawer;
