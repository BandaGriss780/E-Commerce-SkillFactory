import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/thunks";
import { startProducts } from "../../store/cart/thunks";
import { myProducts } from "../../Cart/data/Products";
import { useEffect } from "react";
import { Footer } from "../components/Footer";
import "./styles.css";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startProducts(myProducts));
  }, []);

  const onLogout = () => {
    dispatch(startLogout());
  };

  const { products } = useSelector((state) => state.cart);

  return (
    <section className="pt-2">
      <div id="carouselExampleIndicators" class="carousel slide my-4" data-bs-ride="true">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <a href="https://rog.asus.com/ar/" target="_blank">
              <img src="/banner-1.jpg" className="d-block w-100" alt="Banner ROG Asus"></img>
            </a>
          </div>
          <div class="carousel-item">
            <a href="https://www.asus.com/latin/displays-desktops/monitors/tuf-gaming/tuf-gaming-vg279qm/" target="_blank">
              <img src="/banner-2.png" className="d-block w-100" alt="Banner ROG Asus"></img>
            </a>
          </div>
          <div class="carousel-item">
            <a href="https://www.kingston.com/es" target="_blank">
              <img src="/banner-3.png" className="d-block w-100" alt="Banner Kingston"></img>
            </a>
          </div>
          <div class="carousel-item">
            <a href="https://www.intel.la/content/www/xl/es/homepage.html" target="_blank">
              <img src="/banner-4.png" className="d-block w-100" alt="Banner Intel"></img>
            </a>
          </div>
          <div class="carousel-item">
            <a href="https://www.asus.com/microsite/motherboard/Intel-Alder-Lake-Z690-H670-B660/" target="_blank">
              <img src="/banner-5.jpg" className="d-block w-100" alt="Banner Asus"></img>
            </a>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <section style={{ display: "flex", gap: "5vh", paddingBlock: "2vh", flexWrap: "wrap", margin: "0 auto", justifyContent: "space-evenly" }}>
        {products.slice(0, 3).map((product) => (
          <Link className="" to="/products">
            <div
              className="product-items"
              key={product.id}
              style={{
                borderRadius: ".5rem",
                padding: "1rem",
                maxWidth: "22rem",
                display: "flex",
                gap: "1rem",
                flexDirection: "column",
              }}
            >
              <div className="product-image">
                <img src={product.img} alt="not-found" style={{ width: "20rem", height: "10rem", objectFit: "contain" }} />
              </div>
              <div className="product-details">
                <h3 style={{ textAlign: "center", fontSize: "2rem" }}>{product.name}</h3>
                <p style={{ textAlign: "center", fontSize: "1.75rem", fontWeight: "500" }}>${product.price}</p>
              </div>
              {product.status === "hot" ? (
                <div
                  className="hot"
                  style={{
                    background: "red",
                    color: "#ff0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "1.25rem",
                  }}
                >
                  <h3>HOT</h3>
                </div>
              ) : (
                <div
                  className="new"
                  style={{
                    background: "lightgreen",
                    color: "#black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "1.25rem",
                  }}
                >
                  <h3>NEW</h3>
                </div>
              )}
            </div>
          </Link>
        ))}
      </section>
      <Footer />
    </section>
  );
};
