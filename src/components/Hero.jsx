import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-between items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain'/>
        <button
        type='button'
        onClick={ () => window.open('https://github.com/Dev-Adnan-cmd?tab=repositories')}
        className='black_btn'
        >
          Github
        </button>

      </nav>
      <h1 className='head_text'>
        Summarize Article with<br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
        Experience effortless reading with Summize, a free and open-source article summarizer that simplifies lengthy articles by providing clear and concise summaries, allowing you to grasp the main points easily<br></br>
        "Enter a link and get a concise summary!"
        </h2>

    </header>
  )
}

export default Hero