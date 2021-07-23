import { useState } from "react";
import SubComments from "./subComment";
const CommentList = (props) => {
  const [subComment, setSubComment] = useState(null);
  const [SubList, setsubList] = useState([]);
  const [reply, setreply] = useState(false);
  const [commentId, setcommentId] = useState(null);
  const handleSubmitClick = (id, List) => {
    props.handleReply(id, List, subComment);
    setSubComment(null);
    setcommentId(null);
  };
  const handleReplyClick = (e, commentId) => {
    setcommentId(commentId);
    setreply(!reply);
  };
  return (
    <div style={{ marginTop: "50px" }}>
      {props.List.map((item) => {
        return (
          <div key={item.comment} style={{ marginBottom: "30px" }}>
            <div
              style={{
                padding: "2px",
                border: "1px dotted grey"
              }}
            >
              <p>{item.comment}</p>

              {item.subComments.length > 0 && (
                <CommentList
                  List={item.subComments}
                  handleReply={props.handleReply}
                />
              )}
            </div>
            {commentId === item.comment && (
              <>
                <input
                  type="text"
                  value={subComment}
                  onChange={(e) => setSubComment(e.currentTarget.value)}
                />
                <button
                  onClick={() => handleSubmitClick(item.commentId, props.List)}
                >
                  Submit
                </button>
              </>
            )}
            <span
              onClick={(e) => handleReplyClick(e, item.comment)}
              style={{ float: "right", cursor: "pointer" }}
            >
              Reply
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
