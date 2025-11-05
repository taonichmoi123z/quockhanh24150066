const MenuBox = () => {
  return (
    <div className="box_menu">
      <nav id="menu" className="menu">
        <ul>
          {/* Mục 1: Tướng */}
          <li className="icon_menu active">
            <a href="/tuong" title="Tướng">
              Tướng
            </a>
            <ul>
              <div className="container_main">
                <li>
                  <a href="/tuong/sat-thu" title="Sát thủ">
                    <i className="far fa-angle-right"></i> Sát thủ
                  </a>
                </li>
                <li>
                  <a href="/tuong/dau-si" title="Đấu sĩ">
                    <i className="far fa-angle-right"></i> Đấu sĩ
                  </a>
                </li>
                <li>
                  <a href="/tuong/xa-thu" title="Xạ thủ">
                    <i className="far fa-angle-right"></i> Xạ thủ
                  </a>
                </li>
                <li>
                  <a href="/tuong/ho-tro" title="Hỗ trợ">
                    <i className="far fa-angle-right"></i> Hỗ trợ
                  </a>
                </li>
                <li>
                  <a href="/tuong/ma-phap" title="Pháp sư">
                    <i className="far fa-angle-right"></i> Pháp sư
                  </a>
                </li>
                <li>
                  <a href="/tuong/don-dau" title="Đỡ đòn">
                    <i className="far fa-angle-right"></i> Đỡ đòn
                  </a>
                </li>
              </div>
            </ul>
          </li>

          {/* Mục 2: Bản đồ */}
          <li className="icon_menu">
            <a href="/ban-do" title="Bản đồ">
              Bản đồ
            </a>
            <ul>
              <div className="container_main">
                <li>
                  <a href="/ban-do/summoners-rift" title="Summoner's Rift">
                    <i className="far fa-angle-right"></i> Summoner's Rift
                  </a>
                </li>
                <li>
                  <a href="/ban-do/howling-abyss" title="Howling Abyss">
                    <i className="far fa-angle-right"></i> Howling Abyss (ARAM)
                  </a>
                </li>
                <li>
                  <a
                    href="/ban-do/teamfight-tactics"
                    title="Đấu Trường Chân Lý"
                  >
                    <i className="far fa-angle-right"></i> Đấu Trường Chân Lý
                  </a>
                </li>
              </div>
            </ul>
          </li>

          {/* Mục 3: Vật phẩm */}
          <li className="icon_menu">
            <a href="/vat-pham" title="Vật phẩm">
              Vật phẩm
            </a>
            <ul>
              <div className="container_main">
                <li>
                  <a
                    href="/vat-pham/trang-bi-tan-cong"
                    title="Trang bị tấn công"
                  >
                    <i className="far fa-angle-right"></i> Trang bị tấn công
                  </a>
                </li>
                <li>
                  <a
                    href="/vat-pham/trang-bi-phong-thu"
                    title="Trang bị phòng thủ"
                  >
                    <i className="far fa-angle-right"></i> Trang bị phòng thủ
                  </a>
                </li>
                <li>
                  <a href="/vat-pham/trang-bi-phap-su" title="Trang bị pháp sư">
                    <i className="far fa-angle-right"></i> Trang bị pháp sư
                  </a>
                </li>
                <li>
                  <a href="/vat-pham/giay" title="Giày & phụ kiện">
                    <i className="far fa-angle-right"></i> Giày & phụ kiện
                  </a>
                </li>
              </div>
            </ul>
          </li>

          {/* Mục 4: Tin tức */}
          <li className="icon_menu">
            <a href="/tin-tuc" title="Tin tức">
              Tin tức
            </a>
            <ul>
              <div className="container_main">
                <li>
                  <a href="/tin-tuc/su-kien" title="Sự kiện">
                    <i className="far fa-angle-right"></i> Sự kiện
                  </a>
                </li>
                <li>
                  <a href="/tin-tuc/ban-cap-nhat" title="Bản cập nhật">
                    <i className="far fa-angle-right"></i> Bản cập nhật
                  </a>
                </li>
                <li>
                  <a href="/tin-tuc/esports" title="Esports">
                    <i className="far fa-angle-right"></i> Esports
                  </a>
                </li>
              </div>
            </ul>
          </li>

          {/* Mục 5: Cộng đồng */}
          <li className="icon_menu">
            <a href="/cong-dong" title="Cộng đồng">
              Cộng đồng
            </a>
            <ul>
              <div className="container_main">
                <li>
                  <a href="/cong-dong/fan-art" title="Fan Art">
                    <i className="far fa-angle-right"></i> Fan Art
                  </a>
                </li>
                <li>
                  <a href="/cong-dong/video" title="Video Highlight">
                    <i className="far fa-angle-right"></i> Video Highlight
                  </a>
                </li>
                <li>
                  <a href="/cong-dong/huong-dan" title="Hướng dẫn chơi">
                    <i className="far fa-angle-right"></i> Hướng dẫn chơi
                  </a>
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuBox;
