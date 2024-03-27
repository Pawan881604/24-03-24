import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React from "react";
import { FaAngellist, FaHeart } from "react-icons/fa6";

const AddReview = ({
  addToWishtHandler,
  submitReviewToggle,
  setRating,
  open,
  rating,
  comment,
  setComment,
  reviewSubmitHandler,
}) => {
  return (
    <>
      <div className="review-area">
        <DialogActions style={{alignItems:'center',}} className="row">
          <div className="col-md-6">
            <Button onClick={() => addToWishtHandler()}>
              <span style={{paddingTop:3,paddingRight:10}}>
                <FaHeart className="faheart cursor-pointer" />
              </span>
              <span>Add to wishlist</span>
            </Button>
          </div>
          <div className="col-md-6">
            <Button
              className="button-success"
              onClick={() => submitReviewToggle()}
            >
              <FaAngellist /> Add Review
            </Button>
          </div>
        </DialogActions>
        <Dialog
          className="review-main-div"
          area-aria-labelledby="simpale-dialog-title"
          open={open}
          onClose={submitReviewToggle}
        >
          <DialogTitle>Submit Review</DialogTitle>
          <DialogContent className="submitDialog">
            <Rating
              onChange={(e) => setRating(e.target.value)}
              value={parseFloat(rating)}
              readOnly={false}
              name="dd"
            />
            <textarea
              className="submitDialogtext"
              cols="10"
              rows="10"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </DialogContent>
          <DialogActions>
            <Button onClick={submitReviewToggle}>Cancle</Button>
            <Button onClick={reviewSubmitHandler}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default AddReview;
