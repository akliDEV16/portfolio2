import Header from './components/1-Header/Header'
import Hero from './components/2-Hero/Hero'
import Main from './components/3-Main/Mian'
import ContactUS from './components/4-ContactUs/ContactUS'
import Foter from './components/5-Foter/Foter'

function App() {
  return (
    <div className="Container">
      <Header />
      <Hero />
      <div className="line"></div>
      <Main />
      <div className="line"></div>
      <ContactUS />
      <div className="line"></div>
      <Foter />
    </div>
  )
}

export default App