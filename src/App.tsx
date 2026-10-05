import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-row mt-5 ml-10 mb-20'>
        <div className="basis-1/5">
          <h2>Tobias Tolar</h2> 
        </div>
        <div className="basis-3/5"></div>
        <div className="basis-1/5">
          <h2 className='text-right pr-10'>Coach</h2> 
        </div>
      </div>

      <div className="flex flex-row mb-60">
        <div className="basis-1/4 ml-15">
          <img src="img/lilb.png" className="rounded-full" width="300" height="300" alt="" />
        </div>
        <div className="basis-3/4 p-20">
          <p>Jaroslav Burdys</p>
        </div>
      </div>
      <div className='h-1/10 mb-10 ml-10 '>
        <div className='h-1/5 mb-5'><h2>O mně</h2></div>
        <div className='h-4/5'><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
      </div>
      <div className='ml-10 h-1/10'>
        <h2>Moje Projekty</h2>
        <div className='mt-5 flex flex-row'>
          <div className='bg-black h-100 w-70 ml-10 mb-10'></div>
          <div className='bg-black h-100 w-70 ml-10 mb-10'></div>
        </div>
      </div>
      <div className='ml-10 h-1/10'>
        <h2>Blogísek</h2>
        <div className='mt-5 flex flex-row'>
          <div className='bg-black h-100 w-70 ml-10 mb-10'></div>
          <div className='bg-black h-100 w-70 ml-10 mb-10'></div>
        </div>
      </div>
      <div className='h-1/10 ml-10 '>
        <h2>Moje Certifikace</h2>
          <div className='bg-black h-100 w-70 ml-10 mb-10'>
            <img src="img/maya.jpg" alt=""/>
          </div>
      </div>
      <div className='flex flex-row ml-10 '>
        <a href="https://github.com/birdisgoat" target="_blank">
          <svg className="w-18 h-18" role="presentation" aria-hidden="true">
            <use href="/icons.svg#github-icon"></use>
          </svg>
        </a>
      </div>  
    </>
  )
}

export default App
