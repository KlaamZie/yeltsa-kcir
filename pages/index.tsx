import type { NextPage } from 'next'
import { useState } from 'react'
import { validateURL } from 'next/dist/server/web/utils'

const Home: NextPage = () => {
  const response = ['never', 'going', 'to', 'give', 'you', 'up']
  const [one, setOne] = useState('')
  const [two, setTwo] = useState('')
  const [three, setThree] = useState('')
  const [four, setFour] = useState('')
  const [five, setFive] = useState('')
  const [six, setSix] = useState('')

  const [displayed, setDisplayed] = useState(0)
  const [valid, setValid] = useState(false)

  const handleResponse = (index: number, event: any) => {
    const value = event.target.value
    switch (index) {
      case 0:
        setOne(value)
        break
      case 1:
        setTwo(value)
        break
      case 2:
        setThree(value)
        break
      case 3:
        setFour(value)
        break
      case 4:
        setFive(value)
        break
      case 5:
        setSix(value)
        break
      default:
        setOne(value)
    }

    if (value.toLowerCase() === response[index]) {
      setValid(true)
      setTimeout(() => {
        setValid(false)
        setDisplayed(displayed + 1)
      }, 1000)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      {
        displayed !== 6 && <h1 className='text-3xl font-bold underline'>
          Donne le contraire de ces mots :
        </h1>
      }

      <div className={`container ${displayed === 6 ? 'mt-0' : 'mt-14'} relative`}>
        {
          displayed === 0 && <div className='text-center'>
            <div className={`flex justify-center items-center ${valid ? 'text-green-500' : 'text-black'} mb-7 gap-x-3`}>
              <p className={`text-4xl font-bold`}>Always</p>
            </div>
            <input type='text'
                   className={`border-b-2 text-center text-xl border-b-neutral-500`}
                   placeholder='Réponse...'
                   value={one} onChange={e => handleResponse(0, e)} />
          </div>
        }
        {
          displayed === 1 && <div className='text-center'>
            <div className={`flex justify-center items-center ${valid ? 'text-green-500' : 'text-black'} mb-7 gap-x-3`}>
              <p className={`text-4xl font-bold`}>Coming</p>
            </div>
            <input type='text'
                   className={`border-b-2 text-center text-xl border-b-neutral-500`}
                   placeholder='Réponse...'
                   value={two} onChange={e => handleResponse(1, e)} />
          </div>
        }
        {
          displayed === 2 && <div className='text-center'>
            <div className={`flex justify-center items-center ${valid ? 'text-green-500' : 'text-black'} mb-7 gap-x-3`}>
              <p className={`text-4xl font-bold`}>From</p>
            </div>
            <input type='text'
                   className={`border-b-2 text-center text-xl border-b-neutral-500`}
                   placeholder='Réponse...'
                   value={three} onChange={e => handleResponse(2, e)} />
          </div>
        }
        {
          displayed === 3 && <div className='text-center'>
            <div className={`flex justify-center items-center ${valid ? 'text-green-500' : 'text-black'} mb-7 gap-x-3`}>
              <p className={`text-4xl font-bold`}>Take</p>
            </div>
            <input type='text'
                   className={`border-b-2 text-center text-xl border-b-neutral-500`}
                   placeholder='Réponse...'
                   value={four} onChange={e => handleResponse(3, e)} />
          </div>
        }
        {
          displayed === 4 && <div className='text-center'>
            <div className={`flex justify-center items-center ${valid ? 'text-green-500' : 'text-black'} mb-7 gap-x-3`}>
              <p className={`text-4xl font-bold`}>Me</p>
            </div>
            <input type='text'
                   className={`border-b-2 text-center text-xl border-b-neutral-500`}
                   placeholder='Réponse...'
                   value={five} onChange={e => handleResponse(4, e)} />
          </div>
        }
        {
          displayed === 5 && <div className='text-center'>
            <div className={`flex justify-center items-center ${valid ? 'text-green-500' : 'text-black'} mb-7 gap-x-3`}>
              <p className={`text-4xl font-bold`}>Down</p>
            </div>
            <input type='text'
                   className={`border-b-2 text-center text-xl border-b-neutral-500`}
                   placeholder='Réponse...'
                   value={six} onChange={e => handleResponse(5, e)} />
          </div>
        }
        {
          displayed === 6 && <div className='text-center'>
            <div className='grid grid-cols-6 gap-x-3 gap-y-2'>
              <p className='text-3xl underline'>Always</p>
              <p className='text-3xl underline'>Coming</p>
              <p className='text-3xl underline'>From</p>
              <p className='text-3xl underline'>Take</p>
              <p className='text-3xl underline'>Me</p>
              <p className='text-3xl underline'>Down</p>
              <p className='text-xl'>Never</p>
              <p className='text-xl'>Going</p>
              <p className='text-xl'>To</p>
              <p className='text-xl'>Give</p>
              <p className='text-xl'>You</p>
              <p className='text-xl'>Up</p>
            </div>
            <p className='flex justify-center gap-x-3 mt-10 text-4xl'>
              <span>Never</span>
              <span>Gonna</span>
              <span>Give</span>
              <span>You</span>
              <span>Up</span>
            </p>
            <iframe className='mt-5' width='100%' height='400' src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen></iframe>
          </div>
        }
      </div>
    </div>
  )
}

export default Home
