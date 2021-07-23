const SubComments = (props) => {
  return (
    <div style={{ marginTop: "50px" }}>
      {props.SubList.map((item) => {
        return (
          <div style={{ marginBottom: "30px" }}>
            <p
              style={{
                padding: "10px",
                border: "1px dotted grey"
              }}
            >
              {item.subComment}
            </p>
            <href
              style={{ float: "right", marginTop: "-12px", cursor: "pointer" }}
            >
              Reply
            </href>
          </div>
        );
      })}
    </div>
  );
};

export default SubComments;
