import { Outlet } from "react-router-dom";
import "./assets/css/layout.css";
import "./assets/css/fonts.css";
import MenuTop from "./layouts/MenuTop";
import MenuBox from "./layouts/MenuBox";
import Footer from "./layouts/Footer";

const Layout = () => {
  return (
    <div>
      <header id="header" style={{ minHeight: 169 }}>
        <div className="header_top">
          <div className="container_main">
            <MenuTop />
          </div>
        </div>

        <div id="main_menu"></div>

        <div className="header">
          <div className="container_main">
            <div className="logo">
              <a href="/">
                <img
                  src="https://genk.mediacdn.vn/2019/9/18/lmht-15687833481821692890713.jpg"
                  alt="League of Legends Logo"
                />
              </a>
            </div>

            <div id="main_menu">
              <MenuBox />
            </div>
          </div>
        </div>
      </header>

      <div className="news-home">
        <div className="container_main" style={{ minHeight: 5500 }}>
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
