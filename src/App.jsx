import './App.css'
import './styles/custom.css'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import Carousel from './components/Galery'
// import PreviewV1 from './components/PreviewV1'
import PreviewV2 from './components/PreviewV2'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='background'>
        <NavigationBar/>
        <div className='content'>
          <Home/>
          <Carousel/>
          <PreviewV2/>
        </div>
        <Footer/>
      </div>
      
    </>   
  )
}

export default App
