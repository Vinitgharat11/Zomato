import {CTA, Categories, Collection, Footer, Header, Navbar, NearMe, PopularLocation} from './Components/Homepage'


function App() {

  return (
  <>
    {/*   <Navbar/> */}
    <Header/>
      <Categories/>
      <Collection/>
     <PopularLocation/>
       {/* <CTA/> */}
      <NearMe/>
      <Footer/> 
  </>
    
    
  )
}

export default App
