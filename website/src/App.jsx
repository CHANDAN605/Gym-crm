import { useState } from 'react'
import Header from './Component/Header/index'
import './style.css'
import '../public/css/font-awesome.min.css'
import '../public/css/meanmenu.min.css'
import '../public/css/normalize.css'
import '../public/css/main.css'
import '../public/css/custom-slider/css/nivo-slider.css'
import '../public/css/custom-slider/css/preview.css'
import '../public/css/flaticon.css'
import '../public/css/animate.css'
import '../public/css/site.css'
import '../public/css/hover-min.css'
import '../public/css/magnific-popup.css'
import '../public/css/animate.css'
import Footer from './Component/Footer/index'
import Main from './Component/Main/index'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="wrapper">
        {/* Start Header area */}
        <Header />
        {/* End Header area */}

        {/*Start Main body details  */}
        <Main />
        {/*End Main body details  */}

        {/* Start footer Area */}
        <Footer />
        {/* End copyright area */}
      </div>
    </>
  )
}

export default App
