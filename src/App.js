import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { GPA } from './components/GPA';
import { Results } from './components/Results';
import { Footer } from './components/Footer';
import { Attendance } from './components/Attendance';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <GPA />
      <Results />
      <Attendance />
      {/* <Footer />  */}
    </div>
  );
}

export default App;
