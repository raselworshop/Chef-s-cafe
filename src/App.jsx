
import Header from './Components/StaticSection/Header'
import Banner from './Components/StaticSection/Banner'
import Reciepes from './Components/StaticSection/Reciepes'
import ReciepesCard from './Components/Functional-component/ReciepesCard'
import Sidebar from './Components/Functional-component/Sidebar'

function App() {

  return (
    <>
        {/* header section */}
        <Header></Header>
        {/* banner section */}
        <Banner></Banner>
        {/* reciepes section */}
        <Reciepes></Reciepes>
        {/* reciepes card section */}
        <section className='flex flex-col md:flex-row gap-6 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto'>
          {/* cards */}
            <ReciepesCard></ReciepesCard>
          {/* side bar */}
            <Sidebar></Sidebar>
        </section>
    </>
  )
}

export default App
