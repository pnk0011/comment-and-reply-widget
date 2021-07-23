import { useState } from "react";
import CommentList from "./commentList";

const CommentWidget = () => {
  const [comment, setComment] = useState(null);
  const [commentList, setList] = useState([]);
  const findID = (id, item, subComment) => {
    item.map((item) => {
      if (id === item.commentId) {
        item.subComments.push({
          commentId: Math.random(),
          comment: subComment,
          subComments: []
        });
      } else if (item?.subComments?.length) {
        findID(id, item.subComments, subComment);
      }
    });
  };
  const handleReply = (id, List, subComment) => {
    const commentArray = commentList.map((item) => {
      if (id === item.commentId) {
        item.subComments.push({
          commentId: Math.random(),
          comment: subComment,
          subComments: []
        });

        return item;
      } else if (item.subComments.length) {
        findID(id, item.subComments, subComment);
      }
      return item;
    });

    setList(commentArray);
  };
  const handleCommentClick = () => {
    if (comment) {
      const commentArray = [...commentList];
      commentArray.push({
        commentId: Math.random(),
        comment: comment,
        subComments: []
      });
      setList(commentArray);
      setComment("");
    }
  };
  return (
    <>
      <textarea
        rows="4"
        cols="60"
        name="comment"
        value={comment}
        onChange={(e) => setComment(e.currentTarget.value)}
      />
      <button onClick={handleCommentClick} style={{ float: "right" }}>
        Comment
      </button>
      <CommentList List={commentList} handleReply={handleReply} />
    </>
  );
};

export default CommentWidget;
