
import './App.css';

// function App() {
//   return (
//     <div className="App">
//     <h1>Hello World</h1>
//     </div>
//   );
// }

// export default App;

import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = ()  =>{
return (
<div>
  <Header />
  <Navbar />
  <About />
  <Experience />
  <Services />
  <Portfolio />
  <Testimonial />
  <Contact />
  <Footer />
</div>

);
}
export default App; 
