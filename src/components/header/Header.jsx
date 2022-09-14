import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../ui-components/button/MyButton";
import MyDrop from "../ui-components/drop/MyDrop";

export const Header = () => {
  return (
    <header className="header padding-site">
      <div className="header_left">
        <Link className="logo" to="/">
          <img className="logo_img" src="img/logo.png" alt="logo" />
          BRAN<span className="logo_red">D</span>
        </Link>
        <details className="header_browse">
          <summary className="header_browse_summary">Browse</summary>
          <div className="drop drop_browse">
            <div className="drop__col">
              <h3 className="drop__h3">Women</h3>
              <ul className="drop__ul">
                <li>
                  <a href="" className="drop__link">
                    Dresses
                  </a>
                </li>
                <li>
                  <a href="#" className="drop__link">
                    Tops
                  </a>
                </li>
                <li>
                  <a href="#" className="drop__link">
                    Sweaters/Knits
                  </a>
                </li>
                <li>
                  <a href="#" className="drop__link">
                    Jackets/Coats
                  </a>
                </li>
                <li>
                  <a href="#" className="drop__link">
                    Blazers
                  </a>
                </li>
                <li>
                  <a href="#" className="drop__link">
                    Denim
                  </a>
                </li>
                <li>
                  <a href="#" className="drop__link">
                    Leggings/Pants
                  </a>
                </li>
                <li>
                  <a href="#" className="drop__link">
                    Skirts/Shorts
                  </a>
                </li>
                <li>
                  <a href="#" className="drop__link">
                    Accessories
                  </a>
                </li>
              </ul>
              <h3 className="drop__h3">Man</h3>
              <ul className="drop__ul">
                <li>
                  <a href="#" className="drop__link">
                    Dresses
                  </a>
                </li>
                <li>
                  <a href="#" className="drop__link">
                    Tops
                  </a>
                </li>
                <li>
                  <a href="#" className="drop__link">
                    Sweaters/Knits
                  </a>
                </li>
                <li>
                  <a href="#" className="drop__link">
                    Jackets/Coats
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </details>
        <form className="header_form" action="#">
          <input
            className="header_form_text"
            type="text"
            placeholder="Search for Item..."
          />
          <input
            className="header_search"
            type="image"
            src="img/search.png"
            alt="search"
          />
        </form>
      </div>
      <div className="header_right">
        <div className="header_cart__box">
          <MyDrop
            content={
              <img className="header_cart" src="img/cart.png" alt="cart" />
            }
          >
            <form className="drop__col">
              <div className="header_cart__dropBox">
                <div className="flex">
                  <img
                    src="img/dropImg1.jpg"
                    alt="dropImg1"
                    className="header_cart__dropImg"
                  />
                  <div className="header_cart_dropMidddleBox">
                    <h3 className="header_cart__dropH3">Rebox Zane</h3>
                    <img
                      src="img/stars-cart.png"
                      alt="stars"
                      className="header_cart__dropStars"
                    />
                    <p className="header_cart__dropText">
                      1 <span className="header_cart__dropText_span">x</span>{" "}
                      $250
                    </p>
                  </div>
                </div>
                <a href="#" className="header_cart__dropDelete">
                  <img src="img/cart_del.png" alt="delete" />
                </a>
              </div>
              <div className="header_cart__dropBox">
                <div className="flex">
                  <img
                    src="img/dropImg2.jpg"
                    alt="dropImg1"
                    className="header_cart__dropImg"
                  />
                  <div className="header_cart_dropMidddleBox">
                    <h3 className="header_cart__dropH3">Rebox Zane</h3>
                    <img
                      src="img/stars-cart.png"
                      alt="stars"
                      className="header_cart__dropStars"
                    />
                    <p className="header_cart__dropText">
                      1 <span className="header_cart__dropText_span">x</span>{" "}
                      $250
                    </p>
                  </div>
                </div>
                <a href="#" className="header_cart__dropDelete">
                  <img src="img/cart_del.png" alt="delete" />
                </a>
              </div>
              <div className="flex margin20">
                <p className="header_cart__dropH3 header_cart__dropH3_size">
                  TOTAL
                </p>
                <p className="header_cart__dropH3 header_cart__dropH3_size">
                  $500.00
                </p>
              </div>
              <a
                href="checkout.html"
                className="header_cart__dropCheckout cart__Button_padding"
              >
                checkout
              </a>
              <a
                href="shopingCart.html"
                className="cart__Button cart__Button_padding"
              >
                Go to cart
              </a>
            </form>
          </MyDrop>
        </div>
        <Link to="/account">
          <MyButton>My account</MyButton>
        </Link>
      </div>
    </header>
  );
};
