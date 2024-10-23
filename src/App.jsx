
import Header from './Components/StaticSection/Header'
import Banner from './Components/StaticSection/Banner'
import Reciepes from './Components/StaticSection/Reciepes'
import ReciepesCard from './Components/Functional-component/ReciepesCard'
import Sidebar from './Components/Functional-component/Sidebar'
import { useState } from 'react'

function App() {
  const [reciepeQueue, setReciepeQueue] = useState([]);
  const [preparedRecipes, setPreparedRecipes] = useState([]);
  const [totlTime, setTotalTime] = useState(0)
  const [totlCalories, setTotalCalories] = useState(0)

  const handleToCook = reciepe => {
    // console.log(reciepe, 'calling here')
    if (!reciepeQueue.some(r => r.recipe_id === reciepe.recipe_id)) {
      setReciepeQueue([...reciepeQueue, reciepe])
    } else {
      alert('Recipe is already in Queue!!!')
    }
  }
  // console.log(reciepeQueue)

  const handleRemoveRecipes = id => {
    // find which recipe will remove
    const deletedRecipes = reciepeQueue.find(reciepe => reciepe.recipe_id === id)

    // remove from want to cook table
    const updatedQueue = reciepeQueue.filter(recipe => recipe.recipe_id !== id)
    setReciepeQueue(updatedQueue);
    setPreparedRecipes([...preparedRecipes, deletedRecipes])
  }

  const calculateTimeAndCalories = (time, calories) => {
    setTotalTime(parseFloat(totlTime) + parseFloat(time))
    setTotalCalories(parseFloat(totlCalories) + parseFloat(calories))
  }

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
        <Sidebar
          totlCalories={totlCalories}
          totlTime={totlTime}
          calculateTimeAndCalories={calculateTimeAndCalories}
          preparedRecipes={preparedRecipes}
          handleRemoveRecipes={handleRemoveRecipes}
          reciepeQueue={reciepeQueue}
        ></Sidebar>
      </section>
    </>
  )
}

export default App
