import lilb from './assets/lilb.png'
import mark from './assets/mark.svg'
import gitlogo from './assets/githublogo.png'
import gmail from './assets/gmail.png'
import instagram from './assets/instagram.png'
import unitylogo from './assets/unitylogo.png'
import react from './assets/react.png'
import { Link } from "react-router-dom"
import './App.css'

function App() {

  return (
    <>
      <div className='flex flex-row mt-5 ml-10 mb-20'>
        <div className="basis-1/5">
           <Link to="/"><h2 className='hover:text-slate-200!'>Tobias Tolar</h2> </Link> 
        </div>
      </div>

      <div className="flex flex-row mb-60">
        <div className="basis-1/4 ml-15">
          <img src={lilb} className="rounded-full" width="350" height="350" alt="" />
        </div>
        <div className="basis-3/4 p-20">
          <p className='text-4xl font-bold'>Student SPŠ na Proseku</p>
        </div>
      </div>
      <div className='h-1/10 mb-10 ml-10 '>
        <div className='h-1/5 mb-5'><h2>O mně</h2></div>
        <div className='h-4/5 w-9/10'><p>Jsem student oboru vývoj aplikací na SPŠ na Proseku v Praze. Baví mě programování, modelování 3D modelů ale hlavně tvorba počítačovích her. Aktuálně pracuji například s Reactem, TypeScriptem a Unity. Zajímám se o tvorbu her a právě proto je jedním z mých hlavních projektů 3D kooperativní puzzle hra, kterou vytvářím jako svou maturitní práci.</p></div>
      </div>
      <div className='ml-10 h-1/10'>
        <h2>Moje Projekty</h2>
        <div className='mt-5 flex flex-row'>
          <a href="https://github.com/birdisgoat/bird_is_goat" target="_blank">
            <div className='bg-slate-800 hover:bg-slate-700 h-100 w-70 mb-10 rounded-4xl p-3'>
              <div className='h-1/5 w-full'>
                <p className='text-left text-2xl font-bold text-gray-50 pt-5'>Maturitní Projekt</p>
              </div>
              <div className='mb-10 h-3/5'>
                <img src={unitylogo} className='w-full' alt="" />
              </div>
            </div>
          </a>
          <a href="https://github.com/birdisgoat/React-personal-site" target="_blank">
            <div className='bg-slate-800 hover:bg-slate-700 hover:bg-slate-700 h-100 w-70 ml-10 mb-10 rounded-4xl p-3'>
              <div className='h-1/5 w-full'>
                <p className='text-left text-2xl font-bold text-gray-50 pt-5'>Osobní projekt</p>
              </div>
              <div className='mb-10 h-3/5'>
                <img src={react} alt="" />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className='ml-10 h-1/10'>
        <h2>Blog</h2>
        <div className='mt-5 flex flex-row'>
          <Link to="/blog">
            <div className='bg-slate-800 hover:bg-slate-700 h-100 w-70 mb-10 rounded-4xl p-3'>
              <div className='h-1/6 w-full mb-5'>
                <p className='text-left text-xl font-bold pt-5 text-gray-50'>GULZ fest a middleman</p>
              </div>
              <div className='mb-10 h-4/6 overflow-hidden'>
                <p>V pátek 2. října jsem vyrazil na GULZFEST, který se konal v pražském Distriktu na Žižkově. Postupně se scházelo čím dál víc lidí a atmosféra se během večera stále zlepšovala.Jedním z hlavních vystupujících byl český underground rapper MiddleMan, na kterého jsem se těšil asi nejvíc. Jeho vystoupení bylo podle mě jedním z vrcholů celého večera. Nejen že zahrál jeho největší hit Podzemí ale taky dropnul unreleased. Kromě hudby ale byla důležitá i samotná atmosféra,lidi se bavili, zpívali a celkově to působilo uvolněně.Celkově jsem si GULZFEST užil. Distrikt se pro podobnou akci podle mě hodil i díky své klubové atmosféře.Za mě se tedy GULZFEST povedl a pokud se bude konat znovu, určitě bych se na podobnou akci rád podíval i příště.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className='h-1/10 ml-10 '>
        <h2>Moje Certifikace</h2>
          <div className='bg-slate-800 hover:bg-slate-700 w-70 h-100 rounded-4xl mt-5'>
            <div className='h-1/5 w-full'>
              <p className='text-center text-xl font-bold text-gray-50 pt-5'>...</p>
            </div>
            <div className='mb-10 h-3/5'>
              <img src={mark} alt=""/>
            </div>
          </div>
      </div>
      <div className='border-t border-slate-800 mt-10 text-center'>
        <p className='pt-5'>© 2026 Tobias Tolar</p>
        <div className=' flex justify-center mt-3'>
          <div className='flex flex-row'>
            <a href="https://github.com/birdisgoat" target="_blank">
              <img src={gitlogo} className='h-16 w-16 ml-3' alt=""/>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tobiastolar@gmail.com" target="_blank">
                <img src={gmail} className='h-16 w-16 ml-3' alt=""/>
            </a>
            <a href="https://www.instagram.com/_.doubletea/" target="_blank">
                <img src={instagram} className='h-16 w-16 ml-3' alt=""/>
            </a>
          </div>
        </div>  
      </div>
    </>
  )
}

export default App
