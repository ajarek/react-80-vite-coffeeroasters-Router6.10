import { Link } from 'react-router-dom'
import { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import './Plan.css'

const Plan = () => {
  const [card1,setCard1]=useState(false)
  const [card2,setCard2]=useState(false)
  const [card3,setCard3]=useState(false)
  const [card4,setCard4]=useState(false)
  const [card5,setCard5]=useState(false)
  return (
    <div className='plan'>
      <div className='plan-intro-bg'>
        <div className='plan-intro-info'>
          <h1>Create a plan</h1>
          <p>
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </p>
        </div>
      </div>
      <div className='plan-circle'>
        <div className='circles'>
          <div className='line'>
            <div className='circle circle1'></div>
            <div className='circle circle2'></div>
            <div className='circle circle3'></div>
          </div>
        </div>
        <div className='wrapper-cards'>
          <div className='card'>
            <h2>01</h2>
            <div className='title'>Pick your cofee</div>
            <div className='desc'>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </div>
          </div>
          <div className='card'>
            <h2>02</h2>
            <div className='title'>Choose the frequency</div>
            <div className='desc'>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </div>
          </div>
          <div className='card'>
            <h2>03</h2>
            <div className='title'>Receive and enjoy!</div>
            <div className='desc'>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </div>
          </div>
        </div>
      </div>

      <div className='order'>
        <div className='side-bar'>
          <ul>
            <li>
              <a
                href='#preferences'
                className='order-step'
              >
                <span>01</span>
                <span>Preferences</span>
              </a>
            </li>
            <li>
              <a
                href='#bean-types'
                className='order-step'
              >
                <span>02</span>
                <span>Bean types</span>
              </a>
            </li>
            <li>
              <a
                href='#quantity'
                className='order-step'
              >
                <span>03</span>
                <span>Quantity</span>
              </a>
            </li>
            <li>
              <a
                href='#grind-option'
                className='order-step'
              >
                <span>04</span>
                <span>Grind option</span>
              </a>
            </li>
            <li>
              <a
                href='#deliveries'
                className='order-step'
              >
                <span>05</span>
                <span>Deliveries</span>
              </a>
            </li>
          </ul>
        </div>

        <div className='main-order'>
          <div
            id='preferences'
            className='order-options'
          >
            <div className='order-option-title'>
              <h1>How do you drink your coffee?</h1>
              <img
                className='toggler'
                src='src/assets/plan/chevron-down-icon.svg'
                alt=''
                onClick={(e)=>{setCard1(!card1);e.target.style.transform=card1?'rotate(0deg)':'rotate(180deg)'}}
              />
            </div>
             {card1?
            <div className='order-cards'>
              <div
                id='capsule'
                className='order-card preferences'
              >
                <h3>Capsule</h3>
                <p>Compatible with Nespresso systems and similar brewers</p>
              </div>
              <div
                id='filter'
                className='order-card preferences'
              >
                <h3>Filter</h3>
                <p>
                  For pour over or drip methods like Aeropress, Chemex, and V60
                </p>
              </div>
              <div
                id='espresso'
                className='order-card preferences'
              >
                <h3>Espresso</h3>
                <p>
                  Dense and finely ground beans for an intense, flavorful
                  experience
                </p>
              </div>
            </div>:null
            }
          </div>
          <div
            id='bean-types'
            className='order-options'
          >
            <div className='order-option-title'>
              <h1>What type of coffee?</h1>
              <img
                className='toggler'
                src='src/assets/plan/chevron-down-icon.svg'
                alt=''
                onClick={(e)=>{setCard2(!card2);e.target.style.transform=card2?'rotate(0deg)':'rotate(180deg)'}}
              />
            </div>
            {card2?
            <div className='order-cards'>
              <div
                id='single-origin'
                className='order-card bean-types'
              >
                <h3>Single origin</h3>
                <p>
                  Distinct, high quality coffee from a specific family-owned
                  farm
                </p>
              </div>
              <div
                id='decaf'
                className='order-card bean-types'
              >
                <h3>Decaf</h3>
                <p>
                  Just like regular coffee, except the caffeine has been removed
                </p>
              </div>
              <div
                id='blended'
                className='order-card bean-types'
              >
                <h3>Blended</h3>
                <p>
                  Combination of two or three dark roasted beans of organic
                  coffees
                </p>
              </div>
            </div>:null
            }

          </div>
          <div
            id='quantity'
            className='order-options'
          >
            <div className='order-option-title'>
              <h1>How much would you like?</h1>
              <img
                className='toggler'
                src='src/assets/plan/chevron-down-icon.svg'
                alt=''
                onClick={(e)=>{setCard3(!card3);e.target.style.transform=card3?'rotate(0deg)':'rotate(180deg)'}}
              />
            </div>
            {card3?
            <div className='order-cards'>
              <div
                id='250g'
                className='order-card quantity'
              >
                <h3>250g</h3>
                <p>
                  Perfect for the solo drinker. Yields about 12 delicious cups.
                </p>
              </div>
              <div
                id='500g'
                className='order-card quantity'
              >
                <h3>500g</h3>
                <p>
                  Perfect option for a couple. Yields about 40 delectable cups.
                </p>
              </div>
              <div
                id='1000g'
                className='order-card quantity'
              >
                <h3>1000g</h3>
                <p>
                  Perfect for offices and events. Yields about 90 delightful
                  cups.
                </p>
              </div>
            </div>:null
            }
          </div>
          <div
            id='grind-option'
            className='order-options'
          >
            <div className='order-option-title'>
              <h1>Want us to grind them?</h1>
              <img
                id='grind-toggler'
                className='toggler'
                src='src/assets/plan/chevron-down-icon.svg'
                alt=''
                onClick={(e)=>{setCard4(!card4);e.target.style.transform=card4?'rotate(0deg)':'rotate(180deg)'}}
              />
            </div>
            {card4?
            <div
              id='grind-options'
              className='order-cards'
            >
              <div
                id='wholebean'
                className='order-card grind-option'
              >
                <h3>Wholebean</h3>
                <p>Best choice if you cherish the full sensory experience</p>
              </div>
              <div
                id='filter2'
                className='order-card grind-option'
              >
                <h3>Filter</h3>
                <p>
                  For drip or pour-over coffee methods such as V60 or Aeropress
                </p>
              </div>
              <div
                id='cafetiere'
                className='order-card grind-option'
              >
                <h3>Cafetiére</h3>
                <p>
                  Course ground beans specially suited for french press coffee
                </p>
              </div>
            </div>
            :null
          }
          </div>
          <div
            id='deliveries'
            className='order-options'
          >
            <div className='order-option-title'>
              <h1>How often should we deliver?</h1>
              <img
                className='toggler'
                src='src/assets/plan/chevron-down-icon.svg'
                alt=''
                onClick={(e)=>{setCard5(!card5);e.target.style.transform=card5?'rotate(0deg)':'rotate(180deg)'}}
              />
            </div>
            {card5?
            <div className='order-cards'>
              <div
                id='every-week'
                className='order-card deliveries'
              >
                <h3>Every week</h3>
                <p>$14.00 per shipment. Includes free first-class shipping.</p>
              </div>
              <div
                id='every-2-weeks'
                className='order-card deliveries'
              >
                <h3>Every 2 weeks</h3>
                <p>$17.25 per shipment. Includes free priority shipping.</p>
              </div>
              <div
                id='every-month'
                className='order-card deliveries'
              >
                <h3>Every month</h3>
                <p>$22.50 per shipment. Includes free priority shipping.</p>
              </div>
            </div>:null
}
          </div>
        </div>
        <div className='order-summary'>
          <h4>ORDER SUMMARY</h4>
          <h3>
            "I drink my cofee <span id='using-or-as'>as</span>
            <span id='preferences-text'>Filter</span>, with a
            <span id='type-text'>Decaf</span> type of bean.
            <span id='quantity-text'>250g</span> ground ala
            <span id='grind-options-text'>&#8201;Cafetiére</span>, sent to me{' '}
            <span id='deliveries-text'>Every Week</span>."
          </h3>
        </div>
      </div>
      <div className='wrapper-link'>
        <Link
          className='link-btn'
          to={'/plan'}
        >
          Create my plan
        </Link>
      </div>
      <Nav
        background={'#000'}
        color={'#607D8B'}
        lol={false}
      />
    </div>
  )
}

export default Plan
