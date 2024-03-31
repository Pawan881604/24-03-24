import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React from "react";
import { FaAngellist, FaHeart, FaInstagram } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

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
        <div style={{ alignItems: "center", gap: 10 }} className="row">
          <div className="col-md-5">
            <span style={{ padding: "0px 5px" }} className="col-md-5">
              {" "}
              <RiFacebookFill />
            </span>
            <span style={{ padding: "0px 5px" }} className="col-md-5">
              <FaSquareXTwitter />
            </span>
            <span style={{ padding: "0px 5px" }} className="col-md-5">
              {" "}
              <FaInstagram />
            </span>
          </div>

          <div className="col-md-5">
            <Button onClick={() => addToWishtHandler()}>
              <span style={{ paddingTop: 3, paddingRight: 10 }}>
                <FaHeart className="faheart cursor-pointer" />
              </span>
              <span>Add to wishlist</span>
            </Button>
          </div>
          <div className="col-md-5">
            <Button
              className="button-success"
              onClick={() => submitReviewToggle()}
            >
              <FaAngellist /> Add Review
            </Button>
          </div>
        </div>
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
