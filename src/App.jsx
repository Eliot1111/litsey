import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Atmosphere from './components/Atmosphere.jsx';
import Menu from './components/Menu.jsx';
import Gallery from './components/Gallery.jsx';
import Contacts from './components/Contacts.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Atmosphere />
        <Menu />
        <Gallery />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
