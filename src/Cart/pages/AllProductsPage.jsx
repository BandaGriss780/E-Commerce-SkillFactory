import { useDispatch, useSelector } from "react-redux";
import { addProductCart } from '../../store/cart/cartSlice'

export const AllProductsPage = () => {
  // const { dispatch } = useContext(cartContext)
  // const products = useContext(productsContext)

  const { products, productsCart } = useSelector(state => state.cart)

  const dispatch = useDispatch()

  console.log(productsCart)


  return (
    <div className="products container" style={{display:"flex", gap:"5vh", paddingBlock:"10vh", flexWrap: "wrap"}}>
      {products.map((product) => (

        <div className="product-items" key={product.id} style={{border: "2px solid black", borderRadius: "1rem", padding:"1rem", maxWidth:"22rem", display:"flex", gap: "1rem", flexDirection:"column"}}>
          <div className="product-image">
            <img src={product.img} alt="not-found" style={{width:"20rem",height:"10rem",objectFit:"cover"}} />
          </div>
          <div className="product-details">
            <h3 style={{textAlign: "center", fontSize: "2rem"}}>{product.name}</h3>
            <p style={{textAlign:"center", fontSize: "1.75rem", fontWeight:"500"}}>${product.price}</p>
          </div>
          <button
            className="add-to-cart"
            type="button"
            style={{background: "#000", color: "#fff", borderRadius: ".75rem", display:"inline", padding:"1rem 2rem", fontSize: "1.25rem", fontWeight:"500"}}
            onClick={() => dispatch(addProductCart(product.id))}
          // onClick={console.log(product)}

          >
            Add To Cart
          </button>
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
    </div>
  );
};

