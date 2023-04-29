import Nav from '../../components/Nav/Nav'
import './AboutUs.css'
const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className='about-us-intro-bg'>
        <div className='about-us-intro-info'>
          <h1>About us</h1>
          <p>
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </div>
      </div>
      <div className='commitment'>
        <div className='commitment-img'>
          <img
            src='src/assets/about/desktop/image-commitment.jpg'
            alt='commitment'
          />
        </div>
        <div className='commitment-wrapper'>
          <div className='commitment-title'>Our commitment</div>
          <div className='commitment-text'>
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places.We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </div>
        </div>
      </div>
      <div className='quality'>
        <div className='quality-wrapper'>
          <div className='quality-title'>Uncompromising quality</div>
          <div className='quality-text'>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </div>
        </div>
        <div className='quality-img'>
          <img
            src='src/assets/about/desktop/image-quality.jpg'
            alt='quality'
          />
        </div>
      </div>
      <div className='headquarters'>
        <div className='headquarters-title'>Our Headquarters</div>
        <div className='headquarters-wrapper'>
          <div className='headquarters-card'>
            <div className='headquarters-card-img'>
              <img
                src='src/assets/about/desktop/illustration-uk.svg'
                alt='uk'
              />
            </div>
            <div className='headquarters-card-country'>United Kingdom</div>
            <p>68 Asfordby Rd</p>
            <p>Alcaston</p>
            <p>SY6 1YA</p>
            <p>+44 1241 918425</p>
          </div>
          <div className='headquarters-card'>
            <div className='headquarters-card-img'>
              <img
                src='src/assets/about/desktop/illustration-canada.svg'
                alt='canada'
              />
            </div>
            <div className='headquarters-card-country'>Canada</div>
            <p>1528 Eglinton Avenue</p>
            <p>Toronto</p>
            <p>Ontario M4P 1A6</p>
            <p>+1 416 485 2997</p>
          </div>
          <div className='headquarters-card'>
            <div className='headquarters-card-img'>
              <img
                src='src/assets/about/desktop/illustration-australia.svg'
                alt='australia'
              />
            </div>
            <div className='headquarters-card-country'>Australia</div>
            <p>36 Swanston Street</p>
            <p>Kewell</p>
            <p>Victoria</p>
            <p>+61 4 9928 3629</p>
          </div>
        </div>
      </div>
      <Nav
        background={'#000'}
        color={'#607D8B'}
        lol={false}
      />
    </div>
  )
}

export default AboutUs
