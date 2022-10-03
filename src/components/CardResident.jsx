import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardResident = ({url}) => {

    const [resident, setResident] = useState()

    useEffect( () =>{
        axios.get(url)
            .then(res => setResident(res.data))
            .catch(err => console.log(err))        
    },[])

    console.log(resident)


  return (
    <article className='Subcard_cardResident'>
        <header>
            <div className='cardResident_card_img_status'>
            <img className='img_status' src={resident?.image} alt="" />
                <span className='cardResident_card_img_status_span'>
                <div className={`circle ${resident?.status}`}></div>
                {resident?.status}</span>
            </div>
        </header>
        <section className='cardResident_card_info'>
            <h3 className='cardResident_card_info_title'>{resident?.name}</h3>
            <h4><span className='cardResident_card_info_span'>Specie: </span><br/>{resident?.species}</h4>
            <h4><span className='cardResident_card_info_span'>Origin: </span><br/>{resident?.origin.name}</h4>
            <h4><span className='cardResident_card_info_span'>Episodes where appear: </span><br/>{resident?.episode.length}</h4>
        </section>
    </article>
  )
}

export default CardResident