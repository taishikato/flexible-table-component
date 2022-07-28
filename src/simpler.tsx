import { Link } from "react-router-dom";
import Table from "./SimplerTable/Table/Table";

const Simpler = () => {
  return (
    <div style={{ minWidth: "400px", maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ margin: "15px 0" }}>
        <Link to="/">Go to the old table</Link>
      </div>
      <Table />
    </div>
  );
};

export default Simpler;
