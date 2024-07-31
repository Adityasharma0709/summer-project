import Heading from "../components/heading";
import "../css/ContactPage.css";
function contact() {
  return (
    <div className="entire">
      <div className="Top">
        <Heading />
      </div>
      <p className="para">Contact Us</p>
      <div style={{ display: "flex", flexDirection: "row", justifyContent:"center",height:"300px"}}>
        <div style={{ border: "solid black 1px" ,height:"300px"}}>
          <p>Stay updated</p>
        </div>
        <div style={{ border: "solid black 1px" ,height:"300px"}}>
            <label ></label>
            <p>Stay updated</p>
        </div>
      </div>
    </div>
  );
}
export default contact;
