import Main from "./components/mainbox.jsx";
import Navb from "./components/navb.jsx";
import Section1 from "./components/section1.jsx";
import Section2 from "./components/section2.jsx";


export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center  ">
      <Navb />
      <Main/>
      <Section1/>
      <Section2/>
      
      
    </div>
  );
}
