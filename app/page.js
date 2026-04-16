import Main from "./components/mainbox.jsx";
import Navb from "./components/navb.jsx";
import Section1 from "./components/section1.jsx";
import Section2 from "./components/section2.jsx";
import Section3 from "./components/section3.jsx";
import Footer from "./components/footer.jsx";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center  ">
      <Navb />
      <Main/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>
      
      
      
    </div>
  );
}
