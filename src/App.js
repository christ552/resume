import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componets/navbar/Navbar";
import Headerbox from "./componets/headerbox/Headerbox";
import Text from "./componets/textCometence/Text";
import Skills from "./componets/Skils/Skills";
import WorkExperience from "./componets/Experience/WorkExperience";
import Project_Container from "./componets/ProjectContainer/Project_Container";
import Contactme from "./componets/ContactMe/Contactme";
import ContactinfoCard from "./componets/ContactMe/ContactinfoCard/ContactinfoCard";
import Footer from "./componets/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Headerbox />
      <Text />
      <Skills />
      <WorkExperience />
      {/* <Project_Container /> */}
      <Contactme />
      {/* <ContactinfoCard /> */}
      <Footer />
    </div>
  );
}

export default App;
