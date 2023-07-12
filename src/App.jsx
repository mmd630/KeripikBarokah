import './App.css'
import './styles/custom.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Product from './components/Product'
import Seller from './components/Seller'
import Information from './components/Information'
import Footer from './components/Footer'

function App() {

  return (
    <>
     
      <Navbar/>
      <Carousel/>
      <div className='content'>
        <Product/>
        <Seller/>
        <Information/>
      </div>
      <Footer/>
     
    </>   
  )
}

export default App
