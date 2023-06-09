import { Link } from 'react-router-dom'
import './HowWorks.css'
const HowWorks = () => {
  return (
    <div className='how-works'>
      <h1>How it works</h1>
      <div className="circles">
      <div className="line">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>
      </div>
      <div className="wrapper-cards">
        <div className="card">
          <h2>01</h2>
          <div className="title">Pick your cofee</div>
          <div className="desc">Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</div>
        </div>
        <div className="card">
          <h2>02</h2>
          <div className="title">Choose the frequency</div>
          <div className="desc">Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</div>
        </div>
        <div className="card">
          <h2>03</h2>
          <div className="title">Receive and enjoy!</div>
          <div className="desc">We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</div>
        </div>
      </div>
      <Link className='link-btn' to={'/plan'}>Create your plan</Link>
      </div>
  )
}

export default HowWorks