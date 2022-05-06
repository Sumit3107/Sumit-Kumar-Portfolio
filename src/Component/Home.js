import React from 'react'
import bg from '../images/bg2.png';
import laptop from '../images/laptop.png';
import person from '../images/person.png'
import tech from '../images/tech.png'
import personwithlap from '../images/personwithlap.png'
import '../css/Home.css'

function Home() {
  return (
    <div className='bg'>
        <img id='bg' src={bg} />
        <div className='heading'>
            <img src={personwithlap} alt="laptop" id='laptop'/>
            <div className='fullDiv'>
                <h2 className='full'>&lt;Full<span>Stack</span>&gt;</h2>
            </div>
            <h2 className='dev'>&lt;/<span>Devel</span>oper&gt;</h2>
        </div>
    </div>
  )
}

export default Home