import './App.css';
import { useState, useEffect } from 'react';

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


// Smooth Scroll Functionality 
function calendlyLink(target, duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top + window.scrollY;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;
  
  function animation(currentTime){
    if(startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration) requestAnimationFrame(animation)
  }

  function ease(t, b, c, d){
    t /= d /2;
    if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t -2) -1) + b;
  }

  requestAnimationFrame(animation)
}

let mButton = document.getElementsByClassName('menuButton')

// const clicker = () =>{
//   console.log(mButton)
// } 

// mButton.addEventListener('click',function(){
//   calendlyLink('.contactForm', 1000)
// })


function App() {
  const [name, setName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [messageSubmission, setMessageSubmission] = useState('')
  

  return (
    <div className="App">

{/* Header Section */}

      <div className='header'>
        <section className='headerLogo'>
        <img src={`${qualifiedCandidates}`} alt='qualifiedCandidatesLogo'/>
        </section>
        <section className='headerMenu'>
          <p className='menuItem1' onClick={() => calendlyLink('.theProblem', 1000)}>The Problem</p>
          <p className='menuItem2' onClick={() => calendlyLink('.howItWorks', 1000)}>How It Works</p>
          {/* <p className='menuItem3'>Free Download</p> */}
          <button className='menuButton' 
          onClick={() => calendlyLink('.contactForm', 1000)}
          // onClick={() => clicker()} 
          >Contact Us</button>
        </section>
      </div>


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
          <h1 className='stoneHeader'>Make life easy</h1>
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
          <h1 className='problemLeftHeader'>Hiring Burns Time and Effort</h1>
          <p className='problemText'>Posting ads, screening resumes and applicants, setting up
            calls and meetings, all these things take your time and 
            costs you valuable hours each day.
          </p>
          <br></br>
          <button className='problemButton' onClick={() => calendlyLink('.contactForm', 1000)}>Start Saving Time</button>
        </div>
        
        <div className='problemRightSide'>
          <section>
            <h2 className='problemHeader'>Where do you find qualified people ready to work?</h2>
            <p className='problemText'>Hiring managers spend hours finding the right places
              to post ads to find candidates. Our team gives you 
              those hours back.
            </p>
          </section>

          <section>
            <h2 className='problemHeader'>Hundreds of applications or resumes clog your inbox.</h2>
            <p className='problemText'>The volume of applicants can be too few or too many. 
              We screen for you, ensuring your inbox is only filled 
              with candidates you actually want to talk to.
            </p>
          </section>

          <section>
            <h2 className='problemHeader'>A Hiring Manager should focus on Hiring</h2>
            <p className='problemText'>Our staff handles the busy work, letting you focus 
              on what you're best at: Hiring the right people for 
              your organization.
            </p>
          </section>
        </div>
      </div>


{/* How it Works Section */}

      <div className='howItWorks'>
        <p className='worksHeader'>How it Works</p>
        <div className='worksIcons'>
          <section className='workIcon'>
            <section className='workIconTop'>
              <img src={`${laptop}`} alt='laptop'/>
            </section>
            <p className='iconText'>Candidates Apply</p>
          </section>
          
          <section className='workIcon'>
            <section className='workIconTop'>
                <img src={`${group}`} alt='group'/>
              </section>

              <p className='iconText'>We Source Staff</p>
            </section>
          
          <section className='workIcon'>
            <section className='workIconTop'>
                <img src={`${notepad}`} alt='notepad' className='iconIcon'/>
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
              <img src={`${clock2}`} alt='clock'/>
            </section>
            <p className='worthText'>Save Time &amp; Money</p>
          </section>
          
          <section className='worthTomb'>
            <section>
              <img src={`${group2}`} alt='people'/>
            </section>
            <p className='worthText'>
              Large resouce of diversity
              <br></br>
              qualififed candidates ready to work
            </p>
          </section>

          <section className='worthTomb'>
            <section>
              <img src={`${settings}`} alt='gear'/>
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
          <section>
            <img src={`${emailIcon}`} alt='envelope'/>
          </section>
          <p className='getStartedText'>Let's Get Started</p>
          <p className='contactPrompt'>Send us a quick message to request more information. We'll reach out to let you know how we can help you personally in your staffing goals.</p>
        </div>

        <div className='contactRight'>
          {/* <section className='contactRightTop'>
            <input value={name} placeholder='Name' className='contactName' onChange={(e) => setName(e.target.value)}></input>
            <input value={emailAddress} placeholder='Email' className='contactEmail' onChange={(e) => setEmailAddress(e.target.value)}></input>
          </section>
          <br></br>
          <br></br>
          <textarea value={messageSubmission} type='text' placeholder='Message' className='contactMessage' onChange={(e) => setMessageSubmission(e.target.value)}></textarea>
          <br></br>
          <br></br>
          <button className='contactButton'>Submit</button> */}


{/* <!-- Begin Mailchimp Signup Form --> */}

  <div id="mc_embed_signup">

    <form action="https://yourdigitalcanvas.us6.list-manage.com/subscribe/post?u=7dbf922c554c0aedce97ea470&amp;id=601fc6f61d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll">
        <h2>Contact Request</h2>
      
            
        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
        <div class="mc-field-group">
          <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span></label>
          <input type="email" value={emailAddress} name="EMAIL" class="required email" id="mce-EMAIL"
          onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>
                
        <div class="mc-field-group">
          <label for="mce-FNAME">First Name </label>
          <input type="text" value={name} name="FNAME" class="" id="mce-FNAME"
          onChange={(e) => setName(e.target.value)}
          />
        </div>
            
        <div class="mc-field-group">
          <label for="mce-LNAME">Last Name </label>
          <input type="text" value={messageSubmission} name="LNAME" class="" id="mce-LNAME"
          onChange={(e) => setMessageSubmission(e.target.value)}
          />
        </div>
                
        
        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style={{display:'none'}}></div>
          <div class="response" id="mce-success-response" style={{display:'none'}}></div>
        </div> 

        {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
        <div style={{position:'absolute', left:'-5000px'}} aria-hidden="true"><input type="text" name="b_7dbf922c554c0aedce97ea470_601fc6f61d" tabindex="-1" value=""/></div>
        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/></div>
        
      </div>
    </form>
  </div>

{/* <!--End mc_embed_signup--> */}





          
        </div>
      </div>


{/* Placeholder Section */}

      <div className='placeholderSection'>
        <p className='placeholderText'>
          ~We need another type of placeholder statement to go here~
          <br></br>
          <br></br>
          Labore aliqua voluptate commodo eu excepteur quis nulla dolor qui. Excepteur commodo nostrud ad fugiat enim aliquip non consectetur occaecat. Do deserunt minim reprehenderit sunt cillum duis quis et aliqua laboris exercitation culpa. Ipsum quis voluptate id Lorem id exercitation ullamco sit pariatur magna veniam esse.
        </p>
      </div>

{/* Footer Section */}

      <div className='footer'>
        <div className='footerLeft'>
          <section>
            <p className='footerMission'>Our Mission</p>
            <p className='footerMissionText'>
              ~Do we have a mission statement?~
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

            <section>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <img src={`${qualifiedCandidates}`} alt='qualifiedCanditatesLogo.jpg'/>
            </section>
          </div>
        </div>

      </div>


    </div>
  );
}

export default App;
