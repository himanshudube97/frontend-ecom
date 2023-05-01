import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../actions/productAction";
// import Loader from "../layout/Loaders/Loader";
// import Carousel from "react-material-ui-carousel";

// import ReviewCard from "./ReviewCard.js";
// import { useAlert } from "react-alert";
// import MetaData from "../layout/MetaData";
// import { addItemsToCart } from "../../actions/cartAction";
// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Button,
// } from "@material-ui/core";
// import { Rating } from "@material-ui/lab";
// const options = {
//     size: "large",
//     value: product.ratings,
//     readOnly: true,
//     precision: 0.5,
//   };
function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector((state) => {
    // here the state is global state.
    return state.productDetails;
  });

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch]);

  return (
    <>
      <h1>{product?.name}</h1>
    </>
  );
}

// return (
//    <>
//     <Fragment>
//   {loading ? (
//     <Loader />
//   ) : (
//     <Fragment>

//       <div className="ProductDetails">
//         <div>
//           <Carousel>
//             {product.images &&
//               product.images.map((item, i) => (
//                 <img
//                   className="CarouselImage"
//                   key={i}
//                   src={item.url}
//                   alt={`${i} Slide`}
//                 />
//               ))}
//           </Carousel>
//         </div>

//         <div>
//           <div className="detailsBlock-1">
//             <h2>{product.name}</h2>
//             <p>Product # {product._id}</p>
//           </div>
//           <div className="detailsBlock-2">
//             <Rating {...options} />
//             <span className="detailsBlock-2-span">
//               {" "}
//               ({product.numOfReviews} Reviews)
//             </span>
//           </div>
//           <div className="detailsBlock-3">
//             <h1>{`₹${product.price}`}</h1>
//             <div className="detailsBlock-3-1">
//               <div className="detailsBlock-3-1-1">
//                 <button onClick={decreaseQuantity}>-</button>
//                 <input readOnly type="number" value={quantity} />
//                 <button onClick={increaseQuantity}>+</button>
//               </div>
//               <button
//                 disabled={product.Stock < 1 ? true : false}
//                 onClick={addToCartHandler}
//               >
//                 Add to Cart
//               </button>
//             </div>

//             <p>
//               Status:
//               <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
//                 {product.Stock < 1 ? "OutOfStock" : "InStock"}
//               </b>
//             </p>
//           </div>

//           <div className="detailsBlock-4">
//             Description : <p>{product.description}</p>
//           </div>

//           <button onClick={submitReviewToggle} className="submitReview">
//             Submit Review
//           </button>
//         </div>
//       </div>

//       <h3 className="reviewsHeading">REVIEWS</h3>

//       <Dialog
//         aria-labelledby="simple-dialog-title"
//         open={open}
//         onClose={submitReviewToggle}
//       >
//         <DialogTitle>Submit Review</DialogTitle>
//         <DialogContent className="submitDialog">
//           <Rating
//             onChange={(e) => setRating(e.target.value)}
//             value={rating}
//             size="large"
//           />

//           <textarea
//             className="submitDialogTextArea"
//             cols="30"
//             rows="5"
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//           ></textarea>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={submitReviewToggle} color="secondary">
//             Cancel
//           </Button>
//           <Button onClick={reviewSubmitHandler} color="primary">
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {product.reviews && product.reviews[0] ? (
//         <div className="reviews">
//           {product.reviews &&
//             product.reviews.map((review) => (
//               <ReviewCard key={review._id} review={review} />
//             ))}
//         </div>
//       ) : (
//         <p className="noReviews">No Reviews Yet</p>
//       )}
//     </Fragment>
//   )}
// </Fragment>

//    </>
// );
//       }

export default ProductDetails;
