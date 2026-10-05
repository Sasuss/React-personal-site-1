import { Link } from "react-router-dom"
import instagram from './assets/instagram.png'
import gitlogo from './assets/githublogo.png'
import gmail from './assets/gmail.png'
function Blog() {
    return (
    <>
      <div className='flex flex-row mt-5 ml-10 mb-20'>
        <div className="basis-1/5">
           <Link to="/"><h2 className='hover:text-slate-200!'>Tobias Tolar</h2> </Link> 
        </div>
      </div>
      <p className='text-left text-xl font-bold pt-5 text-gray-50 pl-10'>GULZ fest a middleman</p>
      <div className='h-4/5 w-7/10 pl-10 mt-10'><p>V pátek 2. října jsem vyrazil na GULZFEST, který se konal v pražském Distriktu na Žižkově. Postupně se scházelo čím dál víc lidí a atmosféra se během večera stále zlepšovala.Jedním z hlavních vystupujících byl český underground rapper MiddleMan, na kterého jsem se těšil asi nejvíc. Jeho vystoupení bylo podle mě jedním z vrcholů celého večera. Nejen že zahrál jeho největší hit Podzemí ale taky dropnul unreleased. Kromě hudby ale byla důležitá i samotná atmosféra,lidi se bavili, zpívali a celkově to působilo uvolněně.Celkově jsem si GULZFEST užil. Distrikt se pro podobnou akci podle mě hodil i díky své klubové atmosféře.Za mě se tedy GULZFEST povedl a pokud se bude konat znovu, určitě bych se na podobnou akci rád podíval i příště.</p></div>
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
    );
}

export default Blog