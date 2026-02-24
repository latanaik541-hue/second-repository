import { useState } from 'react'
// import Header from './component/Header';
 import Gallery from './component/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         {/* <Header/>  */}
     
     
        <Gallery/>  
     
    </>
  )
}

export default App
