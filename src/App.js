import mountainImg from './assets/image/mountains.jpg'
import {ReactComponent as ReactLogo} from './assets/airbnb-brands.svg'

function App() {
  const backgroungImgStyle ={
    backgroundImage: `url('${mountainImg}')`,
    backgroundSize: 'cover',
  };


  return (
    <div className="App">
      <div className=" text-white" style={backgroungImgStyle}>
        <div className="bg-gradient-to-r from-black to-transparent px-8 py-16">
          <div className="max-w-xl grid grid-cols-1 gap-8	">
            <div className="w-12">
              <ReactLogo className='fill-white' />
            </div>
            <h2 className="text-xl uppercase font-bold">Become a host</h2>
            <h1 className="max-w-sm text-5xl font-bold">
              Host your space, share your world
            </h1>
            <p className='text-lg'>
              The art of hosting is rooted in thoughtful design. Share your unique aesthetic with guest and earn extra income on a schedule that works for you
            </p>
            <button className="bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-48">Try  hosting</button>
          </div>
        </div>
      </div>
      <div className="px-8 py-16">
        <div className="max-w-md mb-16">
          <h2 className='text-5xl'>Your next chapter, made possible by Hosting</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 text-slate-700">
          <div>
            <h3 className='text-2xl font-bold mb-2'>Share what you love</h3>
            <p className='text-lg'>
              Indulge your love for design when you host! Airbnb guests, who are dream to authentic travel in creatively curated 
            </p>
          </div>
          <div>
            <h3 className='text-2xl font-bold mb-2'>Host how you want to</h3>
            <p className='text-lg'>
              Airbnb gives you the tools and support to earn extra income, be your own boss and invest in your passions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
