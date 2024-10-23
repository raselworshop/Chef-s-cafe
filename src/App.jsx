
import Header from './Components/StaticSection/Header'
import Banner from './Components/StaticSection/Banner'
import Reciepes from './Components/StaticSection/Reciepes'
import ReciepesCard from './Components/Functional-component/ReciepesCard'
import Sidebar from './Components/Functional-component/Sidebar'
import { useState } from 'react'

function App() {
  const [reciepeQueue, setReciepeQueue] = useState([]); 
  const handleToCook = reciepe =>{
    // console.log(reciepe, 'calling here')
    if(!reciepeQueue.some(r=> r.recipe_id === reciepe.recipe_id)){
      setReciepeQueue([...reciepeQueue, reciepe])
    }else{
      alert('Recipe is already in Queue!!!')
    }
  }
  console.log(reciepeQueue)

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
            <ReciepesCard handleToCook={handleToCook}></ReciepesCard>
          {/* side bar */}
            <Sidebar reciepeQueue={reciepeQueue}></Sidebar>
        </section>
    </>
  )
}

export default App
