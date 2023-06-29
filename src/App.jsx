import './App.css'
import './styles/custom.css'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import Carousel from './components/Galery'
import Preview from './components/Preview'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='background'>
        <NavigationBar/>
        <div className='content'>
          <Home/>
          <Carousel/>
          <Preview/>
        </div>
        <Footer/>
      </div>
      
    </>   
  )
}

export default App
