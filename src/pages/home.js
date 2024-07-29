import Heading from "../components/heading";
import Contact from "../components/contact";
import "../css/universal.css";
function Home() {
  return (
    <nav style={{ display:"flex" ,justifyContent:"space-between",alignItems:"center"}}>
      <Heading />
      <Contact />
    </nav>
  );
}
export default Home;
