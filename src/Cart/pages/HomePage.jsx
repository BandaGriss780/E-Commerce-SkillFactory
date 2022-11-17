import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../store/auth/thunks'
import { startProducts } from '../../store/cart/thunks'
import { myProducts } from '../../Cart/data/Products'
import { useEffect } from 'react'
import { Footer } from '../components/Footer'

export const HomePage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startProducts(myProducts))
  }, [])

  const onLogout = () => {
    dispatch(startLogout())
  }

  const { products } = useSelector(state => state.cart)

  return (
    <section className="">
      <hr />
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
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
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/banner-1.jpg" className="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src="/banner-2.png" className="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src="/banner-3.png" className="d-block w-100" alt="..."></img>
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

      <hr />

      <section style={{display:"flex", gap:"5vh", paddingBlock:"2vh", flexWrap: "wrap", margin:"0 auto", justifyContent:"space-evenly"}}>
      {products.slice(0, 3).map((product) => (
        <div className="product-items" key={product.id} style={{border: "2px solid black", borderRadius: "1rem", padding:"1rem", maxWidth:"22rem", display:"flex", gap: "1rem", flexDirection:"column"}}>
          <div className="product-image">
            <img src={product.img} alt="not-found" style={{width:"20rem",height:"10rem",objectFit:"cover"}} />
          </div>
          <div className="product-details">
            <h3 style={{textAlign: "center", fontSize: "2rem"}}>{product.name}</h3>
            <p style={{textAlign:"center", fontSize: "1.75rem", fontWeight:"500"}}>${product.price}</p>
          </div>
          {product.status === "hot" ? (
            <div className="hot" style={{background: "red", color:"#ff0", display:"flex", alignItems:"center", justifyContent:"center", borderRadius: "1.25rem"}}>
              <h3>HOT</h3>
            </div>
          ) : (
            <div className="new" style={{background: "lightgreen", color:"#black", display:"flex", alignItems:"center", justifyContent:"center", borderRadius: "1.25rem"}}>
              <h3>NEW</h3>
            </div>
          )}
        </div>
        ))}
      </section>
      <Footer />
    </section>
  )
}
