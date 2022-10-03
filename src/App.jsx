import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import Error from './components/Error'
import FilterList from './components/FilterList'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './utils/getRandomNumber'

function App() {

  const [location, setLocation] = useState() // guardar location
  const [serachInput, setSerachInput] = useState("")// guarda la informacion del input
  const [suggestedList, setSuggestedList] = useState()//guardar sugerencias en la busqueda
  const [hasError, setHasError] = useState(false)//indicar si hay error en la busqeuda

  useEffect(()=>{
    let id = getRandomNumber()
    if(serachInput){
      id = serachInput
    }
    const URL = `https://rickandmortyapi.com/api/location/${id}`
    axios.get(URL)
      .then(res => {
        setHasError(false)
        setLocation(res.data)})
      .catch(err => setHasError(true))
  },[serachInput])
  
  // console.log(location)

    const handleSubmit = e => {
      e.preventDefault()
      setSerachInput(e.target.idLocation.value)
    }

    const handleChange = e => {

      if(e.target.value === ""){
        return setSuggestedList()
      }

      const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`
      axios.get(URL)
        .then(res => setSuggestedList(res.data.results))
        .catch(err => console.log(err))
    }

    console.log(suggestedList)

  return (
    <div className="App">
      <div className='card_title'><h1 className='title'>Rick and Morty</h1>
      <form onSubmit={handleSubmit}>
        <input className='input_search' id="idLocation" placeholder='location number (1-126)' type="text" onChange={handleChange}/>
        <button className='button_search'>Search</button>
      <FilterList 
      suggestedList = {suggestedList}
      setSerachInput = {setSerachInput}
      />
      </form>
      </div>
      {
        hasError ?
        <Error />
        :
       <>
      <LocationInfo 
      location={location}
      />
      
      <div className='card_cardResident'>
        {
          location?.residents.map(url =>(
            <CardResident 
            key ={url}
            url={url}
            />
          ))
        }
        </div>
       </>
      }

    <footer>Hecho con ❤ por Walter Daza</footer>
    </div>
  )
}

export default App
