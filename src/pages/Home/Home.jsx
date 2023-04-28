import { Link } from 'react-router-dom'
import Collection from '../../components/Collection/Collection'
import InfoUs from '../../components/InfoUs/InfoUs'
import HowWorks from '../../components/HowWorks/HowWorks'
import './Home.css'
const Home = () => {
  
  return (
    <div className='home'>
   <div className="intro-bg">
    <div className="intro-info">
      <h1>Great coffee made simple.</h1>
      <p>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
      <Link className='link-btn' to={'/plan'}>Create your plan</Link>
    </div>
   </div>
   <Collection/>
   <InfoUs/>
   <HowWorks/>
    </div>
  )
}

export default Home
