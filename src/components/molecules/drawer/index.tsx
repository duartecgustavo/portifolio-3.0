import BackToTop from "components/organisms/back_to_top";
import Footer from "components/organisms/footer";
import { Background } from "styles/global";
import { useDrawer } from "../../../hooks/store/useDrawer";
import { Close, DrawerContainer, HeaderDrawer } from "./styles";

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
        <div id="link-top-about"></div>
        <div className="col-10">
          <HeaderDrawer>
            <button onClick={() => setOpen(!open)}>
              {titleHeader} <Close id="lala" />
            </button>
          </HeaderDrawer>
          {children}
          <BackToTop linkPage="#link-top-about" />
        </div>
        <Footer />
      </DrawerContainer>
    </>
  );
};

export default Drawer;
