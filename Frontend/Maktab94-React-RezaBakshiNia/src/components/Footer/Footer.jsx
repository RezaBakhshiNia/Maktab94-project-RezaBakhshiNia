import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-right">
          <p className="footer-about">
            <span> در باره ما:</span> هدف فروشگاه لپتاپیا، ارائه خدمات و محصولات
            با کیفیت بالا به مشتریان عزیز است.💫 تمرکز ما بر فروش لپ تاپ ها و
            لوازم جانبی آنها است💻، سعی داریم تا نیازهای روز دنیای فناوری شما را
            برآورده کنیم و به شما تجربه خریدی مطمئن و رضایت بخش ارائه دهیم.💝
          </p>
          <div className="footer-icons">
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i className="bi bi-telegram"></i>
            </a>
            <a href="#">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span> آدرس و شماره تلفن:</span> دهدشت، ایران
            </p>
          </div>
          <div>
            <i className="bi bi-telephone"></i>
            <p dir="ltr"> (+98) 912 345 678</p>
          </div>
          <div>
            <i className="bi bi-envelope-at"></i>
            <p>
              <a href="#"> office@laptopia.com</a>
            </p>
          </div>
        </div>
        <div className="footer-left">
          <h2>
            لپتاپیا{" "}
            <img id="footerLogo" src="/assets/logo1.jfif" alt="logo" />
          </h2>
          <p className="footer-menu">
            <Link to="http://localhost:5173/"> صفحه اصلی</Link> | <Link to="/about"> درباره ما</Link> |{" "}
            <Link to="#"> خدمات</Link> | <Link to="#"> وبلاگ خبری</Link> |{" "}
            <Link to="/contact"> ارتباط</Link>
          </p>
          <p className="footer-name"> لپتاپیا &copy; 2023</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
