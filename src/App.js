import './App.css';
import './responsive.css'
import { useState } from 'react';
import ContactUs from './emailForm'

// Logos
import qualifiedCandidates from './assets/logos/qualified-candidates-1.png'
import facebook from './assets/logos/facebook.png'
import twitter from './assets/logos/twitter.png'
import instagram from './assets/logos/instagram.png'

// How it Works
import clockIcon from './assets/icons/027-clock.png'
import laptop from './assets/icons/laptopWithNumber.png'
import group from './assets/icons/groupWithNumber.png'
import notepad from './assets/icons/notepadWithNumber.png'

// Administrative Inclusions
import briefcase from './assets/icons/014-briefcase.png'
import shield from './assets/icons/042-shield.png'
import folders from './assets/icons/002-folders.png'
import taxes from './assets/icons/tax.png'
import factory from './assets/icons/015-factory.png'
import medal from './assets/icons/024-medal.png'
import drugs from './assets/icons/drugs.png'
import traffic from './assets/icons/traffic.png'

//Imagine Section
import computer from './assets/icons/024-monitor.png'

//Worth Your While Section
import settings from './assets/icons/033-settings.png'
import group2 from './assets/icons/Group_2_.png'
import clock2 from './assets/icons/asset-1.png'

//Contact Form
import emailIcon from './assets/icons/036-email.png'
import { InlineWidget } from 'react-calendly';
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>


// Smooth Scroll Functionality 

let parent = ''

window.onload=function(){
  parent = document.getElementsByClassName(".headerMenu")
  console.log(`${parent}`)
}

function scrollToProblem(){
    document.querySelector('.theProblem').scrollIntoView({
    behavior: 'smooth'
  })
}

function scrollToWorks(){
  document.querySelector('.howItWorks').scrollIntoView({
    behavior: 'smooth'
  })
}

// BEGIN APP

function App() {
  const [showCalendly, setShowCalendly] = useState(false)
  
  function calendlyLink(){
    setShowCalendly(!showCalendly)
    console.log('clicky')
  }

  return (
    <div className="App">

{/* Header Section */}

      <div className='header'>
        <section className='headerLogo'>
        <img src={`${qualifiedCandidates}`} alt='qualifiedCandidatesLogo' className='headerLogo'/>
        </section>
        <section className='headerMenu'>
          <button className='menuItem1' 
          // onClick={() => smoothScroll('.theProblem', 1000)}
          onClick={() => scrollToProblem()}
          >The Problem</button>
          <button className='menuItem2' 
          onClick={() => scrollToWorks()}
          >How It Works</button>
          {/* <p className='menuItem3'>Free Download</p> */}
          <button className='menuButton' 
          onClick={() => calendlyLink('.contactForm', 1000)}
          // onClick={() => clicker()} 
          >Contact Us</button>
        </section>



      </div>

{/* Calendly Widget */}
    {showCalendly && <div className='calendly'>
      <InlineWidget className="widget1" url="https://calendly.com/find-qualified-canditates/experiment1et"/>

    </div>}

{/* Hero Section */}

      <div className='heroDiv'>
        <div>
          <p className='heroSection1'>We provide you with The Qualified Candidates for a wide range of positions.</p>
          <p className='heroSection2'>Ease your recruiting efforts today.</p>
        </div>
        <button className='actionButton' onClick={() => calendlyLink('.contactForm', 1000)}>Learn More</button>
      </div>


{/* Tombstone Section */}

      <div className='tombstones'>
        <section className='stone'>
          <h1 className='stoneHeader'>Find Skilled Candidates</h1>
          <p className='stoneText'>
            Save your time and money while we find 
            <br></br>
            your perfect candidate.</p>
        </section>
        <section className='stone'>
          <h1 className='stoneHeader'>Trust the Professionals</h1>
          <p className='stoneText'>Our screening brings you qualified candidates to fill your needs.</p>
        </section>
        <section className='stone'>
          <h1 className='stoneHeader'>Make Life Easy</h1>
          <p className='stoneText'>Our passion is to take as much off your plate as possible.
            <br></br>
            We'll do the legwork, you make the hiring decision.
          </p>
        </section>
      </div>


{/* "The Problem" Section */}

      <div className='theProblem' id='theProblem'>
        <div className='problemLeftSide'>
          <img src={`${clockIcon}`} alt='clock Icon' className='clockIcon'/>
          <p className='problemLeftHeader'>Hiring Burns Time and Effort</p>
          <p className='problemText'>Posting ads, screening resumes and applicants, setting up
            calls and meetings, all these things take your time and 
            costs you valuable hours each day.
          </p>
          <br></br>
          <button className='problemButton' onClick={() => calendlyLink('.contactForm', 1000)}>Start Saving Time</button>
        </div>
        
        <div className='problemRightSide'>
          <section>
            <p className='problemHeader'>Where do you find qualified people ready to work?</p>
            <p className='problemText'>Hiring managers spend hours finding the right places
              to post ads to find candidates. Our team gives you 
              those hours back.
            </p>
          </section>

          <section>
            <p className='problemHeader'>Hundreds of applications or resumes clog your inbox.</p>
            <p className='problemText'>The volume of applicants can be too few or too many. 
              We screen for you, ensuring your inbox is only filled 
              with candidates you actually want to talk to.
            </p>
          </section>

          <section>
            <p className='problemHeader'>A Hiring Manager should focus on Hiring</p>
            <p className='problemText'>Our staff handles the busy work, letting you focus 
              on what you're best at: Hiring the right people for 
              your organization.
            </p>
          </section>
          <button className='problemButtonMobile' onClick={() => calendlyLink('.contactForm', 1000)}>Start Saving Time</button>

        </div>
      </div>


{/* How it Works Section */}

      <div className='howItWorks'>
        <p className='worksHeader'>How it Works</p>
        <div className='worksIcons'>
          <section className='workIcon'>
            <section className='workIconTop'>
              <img src={`${laptop}`} alt='laptop' className='iconImage'/>
            </section>
            <p className='iconText'>Candidates Apply</p>
          </section>
          
          <section className='workIcon'>
            <section className='workIconTop'>
                <img src={`${group}`} alt='group' className='iconImage'/>
              </section>

              <p className='iconText'>We Source Staff</p>
            </section>
          
          <section className='workIcon'>
            <section className='workIconTop'>
                <img src={`${notepad}`} alt='notepad' className='iconImage'/>
              </section>
              <p className='iconText'>You Interview &amp; Hire</p>
          </section>
        
        </div>
        <br></br>
        <br></br>
        <p className='worksText'>
          We offer staffing services for executives, remote workers, remote office professionals, temporary, temp to hire, contract to hire, long-term project-based employment and direct hire, permanent placement opportunities to all areas surrounding Texas, through out USA. 
        <br></br>
        <br></br>
          Our rigorous screening process delivers quality candidates perfectly suited to meet your needs.  Additionally, our Administrative Backoffice includes:
        </p>
        <br></br>
        <br></br>

        <div className='adminInclusions'>
            <section className='inclusionsTop'>
              <section className='inclusion'>
                <img src={`${briefcase}`} alt='briefcase.jpg' className='inclusionIcon'/>
                <p className='inclusionText'>Unemployment Issues</p>
              </section>

              <section className='inclusion'>
                <img src={`${shield}`} alt='shield.jpg' className='inclusionIcon'/>
                <p className='inclusionText'>Liability Concerns</p>
              </section>

              <section className='inclusion'>
                <img src={`${folders}`} alt='folder.jpg' className='inclusionIcon'/>
                <p className='inclusionText'>I-9 Compliance</p>
                </section>

              <section className='inclusion'>
                <img src={`${taxes}`} alt='document.jpg' className='inclusionIcon'/>
                <p className='inclusionText'>Employment Taxes</p>
              </section>
            </section>

            <br></br>
            <br></br>
            
            <section className='inclusionsTop'>
              <section className='inclusion'>
                <img src={`${factory}`} alt='factory.jpg' className='inclusionIcon'/>
                <p className='inclusionText'>Workers Compensation Insurance</p>
              </section>

              <section className='inclusion'>
                <img src={`${medal}`} alt='medal.jpg' className='inclusionIcon'/>
                <p className='inclusionText'>Benefits</p>
              </section>

              <section className='inclusion'>
                <img src={`${drugs}`} alt='pill.jpg' className='inclusionIcon'/>
                <p className='inclusionText'>Drug Screening</p>
              </section>
              
              <section className='inclusion'>
                <img src={`${traffic}`} alt='reverseArrows.jpg' className='inclusionIcon'/>
                <p className='inclusionText'>Direct Deposit</p>
              </section>

             </section>
            <br></br>
            <br></br>
            <button className='inclusionsButton' onClick={() => calendlyLink('.contactForm', 1000)}>Request Information</button>
        </div>
      </div>

{/* Imagine Section */}

      <div className='imagine'>
        <section className='imagineContent'>
          <img src={`${computer}`} alt='computerScreen'/>
          <p className='imagineText'>Imagine spending your time talking to pre-screened, qualified candidates that are perfect for the positions you need filled.</p>
        </section>
      </div>

{/* Make it Worth Your While Section */}

      <div className='worthYourWhile'>
        <p className='worthHeader'>Make it Worth Your While</p>
        <div className='worthTombstones'>
          <section className='worthTomb'>
            <section>
              <img src={`${clock2}`} alt='clock' className='worthIcon'/>
            </section>
            <p className='worthText'>Save Time &amp; Money</p>
          </section>
          
          <section className='worthTomb'>
            <section>
              <img src={`${group2}`} alt='people' className='worthIcon'/>
            </section>
            <p className='worthText'>
              Large resouce of diversity
              <br></br>
              qualififed candidates ready to work
            </p>
          </section>

          <section className='worthTomb'>
            <section>
              <img src={`${settings}`} alt='gear' className='worthIcon'/>
            </section>
            <p className='worthText'>
              Administrative Backoffice
              <br></br>
              to Support our Clients
            </p>
          </section>  
        </div>
          <button className='worthButton' onClick={() => calendlyLink('.contactRight', 1000)}>Get Started</button>
      </div>


{/* Lead Gen Section */}

      {/* <div className='leadGen'>
        <img src='' alt='leadGen.pdf'/>
        <section>
          <h1>Free Download</h1>
          <input placeholder='First Name'></input>
          <input placeholder='Email'></input>
          <button>Download</button>
        </section>
      </div> */}


{/* Get Started Section */}

      <div className='contactForm'>
        <div className='contactLeft'>
          <section className='contactEmailIcon'>
            <img src={`${emailIcon}`} alt='envelope' className='contactEmailIcon'/>
          </section>
          <p className='getStartedText'>Let's Get Started</p>
          <p className='contactPrompt'>Send us a quick message to request more information. We'll reach out to let you know how we can help you personally in your staffing goals.</p>
        </div>

        <div className='contactRight'>
          
          <ContactUs/>

        </div>
      </div>


{/* Placeholder Section */}

      <div className='placeholderSection'>
        <p className='placeholderText'>
        We offer staffing services for executives, remote workers, remote office professionals, temporary, temp to hire, contract to hire, long-term project-based employment and direct hire, permanent placement opportunities to all areas surrounding Texas, through out USA.
        </p>
      </div>

{/* Footer Section */}

      <div className='footer'>
        <div className='footerLeft'>
          <section>
            <p className='footerMission'>Our Mission</p>
            <p className='footerMissionText'>
              ~Mission Statement~
            </p>
            <p className='footerContact'>Contact</p>
            <p className='footerEmail'>h4@thequalcandidates.com</p>
          </section>
        </div>

        <div className='footerLeftMobile'>
          <section>
            <p className='footerMission'>Our Mission</p>
            <p className='footerMissionText'>
              ~Mission Statement~
            </p>
            <p className='footerContact'>Contact</p>
            <p className='footerEmail'>h4@thequalcandidates.com</p>
          </section>
        </div>

{/* Center commented out until we have other pages to link to the Menu items */}

        <div className='footerCenter'>
          {/* <p className='footerMenu'>Menu</p>
          <p className='footerMenuItems'>
            Home
            <br></br>
            About
            <br></br>
            Services
            <br></br>
            Blog
            <br></br>
            Contact
          </p> */}

          <p className='followUs'>Follow us on Social Media</p>
          <section className='socialMediaIcons'>
            <img className='smIcon' src={`${instagram}`} alt='instagramLogo.jpg'/>
            <img className='smIcon' src={`${twitter}`} alt='twitterLogo.jpg'/>
            <img className='smIcon' src={`${facebook}`} alt='facebookLogo.jpg'/>
          </section>
        </div>

        <div className='footerRight'>
          <div>
            {/* <section className='socialMediaIcons'>
              <img src={`${instagram}`} alt='instagramLogo.jpg'/>
              <img src={`${twitter}`} alt='twitterLogo.jpg'/>
              <img src={`${facebook}`} alt='facebookLogo.jpg'/>
            </section>
            <br></br> */}
              <p className='followUsMobile'>Follow us on Social Media</p>

              <section className='socialMediaIconsMobile'>
                <img className='smIconMobile' src={`${instagram}`} alt='instagramLogo.jpg'/>
                <img className='smIconMobile' src={`${twitter}`} alt='twitterLogo.jpg'/>
                <img className='smIconMobile' src={`${facebook}`} alt='facebookLogo.jpg'/>
              </section>

            <section>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <img src={`${qualifiedCandidates}`} alt='qualifiedCanditatesLogo.jpg' className='footerLogo'/>
              <img src={`${qualifiedCandidates}`} alt='qualifiedCanditatesLogo.jpg' className='footerLogoMobile'/>
            </section>
          </div>
        </div>

        <div className='footerRightMobile'>
          <div>
            {/* <section className='socialMediaIcons'>
              <img src={`${instagram}`} alt='instagramLogo.jpg'/>
              <img src={`${twitter}`} alt='twitterLogo.jpg'/>
              <img src={`${facebook}`} alt='facebookLogo.jpg'/>
            </section>
            <br></br> */}
              <p className='followUsMobile'>Follow us on Social Media</p>

              <section className='socialMediaIconsMobile'>
                <img className='smIconMobile' src={`${instagram}`} alt='instagramLogo.jpg'/>
                <img className='smIconMobile' src={`${twitter}`} alt='twitterLogo.jpg'/>
                <img className='smIconMobile' src={`${facebook}`} alt='facebookLogo.jpg'/>
              </section>

            <section>

              <img src={`${qualifiedCandidates}`} alt='qualifiedCanditatesLogo.jpg' className='footerLogo'/>
              <img src={`${qualifiedCandidates}`} alt='qualifiedCanditatesLogo.jpg' className='footerLogoMobile'/>
            </section>
          </div>
        </div>

      </div>


    </div>
  );
}

export default App;
