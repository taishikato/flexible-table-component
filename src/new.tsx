import { Link } from "react-router-dom";

const Simpler = () => {
  return (
    <div
      style={{
        minWidth: "400px",
        maxWidth: "700px",
        margin: "0 auto",
        overflow: "auto",
      }}
    >
      <div style={{ margin: "15px 0" }}>
        <Link to="/">Go to the old table</Link>
      </div>
      <Table />
    </div>
  );
};

export default Simpler;
