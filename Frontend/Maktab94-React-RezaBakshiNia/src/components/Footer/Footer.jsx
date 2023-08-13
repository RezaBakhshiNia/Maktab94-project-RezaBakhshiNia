import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <MDBFooter
      bgColor="secondary"
      className="text-white text-center text-lg-left shadow-lg"
    >
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">🤩به فروشگاه لپتاپیا خوش آمدید🤩</h5>

            <p>
              هدف فروشگاه لپتاپیا، ارائه خدمات و محصولات با کیفیت بالا به
              مشتریان عزیز است.💫 تمرکز ما بر فروش لپ تاپ ها و لوازم جانبی آنها است💻، سعی
              داریم تا نیازهای روز دنیای فناوری شما را برآورده کنیم و به شما تجربه خریدی
              مطمئن و رضایت بخش ارائه دهیم.💝
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5>پیوند های اصلی</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <NavLink className="text-white" to="/admin">
                  مدیریت
                </NavLink>
              </li>
              <li>
                <NavLink className="text-white" to="/products">
                  همه محصولات
                </NavLink>
              </li>
              <li>
                <NavLink className="text-white" to="/contact">
                  راه ارتباطی
                </NavLink>
              </li>
              <li>
                <NavLink className="text-white" to="/">
                  صفحه اصلی
                </NavLink>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">مجازی</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white">
                  تلگرام
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  یوتیوب
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  اینستاگرام
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  لینکدین
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        dir="ltr"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-white" href="http://localhost:5173/">
          laptopia.com 🇮🇷
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
