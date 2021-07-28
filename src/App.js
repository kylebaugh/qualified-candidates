import './App.css';

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



function App() {
  return (
    <div className="App">
      <div className='header'>
        <section className='headerLogo'>
          <h1 className='logo1'>QUALIFIED</h1>
          <h1 className='logo2'>CANDIDATES</h1>
        </section>
        <section className='headerMenu'>
          <p className='menuItem1'>The Problem</p>
          <p className='menuItem2'>How It Works</p>
          <p className='menuItem3'>Free Download</p>
          <button className='menuButton'>Contact Us</button>
        </section>
      </div>

      <div className='heroDiv'>
        <div>
          <p className='heroSection1'>We provide you with The Qualified Candidates for a wide range of positions.</p>
          <p className='heroSection2'>Ease your recruiting efforts today.</p>
        </div>
        <button className='actionButton'>Learn More</button>
      </div>
    

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


      <div className='theProblem'>
        <div className='problemLeftSide'>
          <img src={`${clockIcon}`} alt='clock Icon' className='clockIcon'/>
          <h1 className='problemLeftHeader'>Hiring Burns Time and Effort</h1>
          <p className='problemText'>Posting ads, screening resumes and applicants, setting up
            calls and meetings, all these things take your time and 
            costs you valuable hours each day.
          </p>
          <button className='problemButton'>Start Saving Time</button>
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
            <button className='inclusionsButton'>Request Information</button>
        </div>
      </div>

      <div className='imagine'>
        <img src='' alt='computerScreen'/>
        <h2></h2>
      </div>

      <div className='worthYourWhile'>
        <h1>Make it Worth Your While</h1>
        <div>
          <section>
            <img src='' alt='clock'/>
            <h2></h2>
            
            <img src='' alt='people'/>
            <h2></h2>
            
            <img src='' alt='gear'/>
            <h2></h2>
          </section>
          <button>Call to Action</button>
        </div>
      </div>

      <div className='leadGen'>
        <img src='' alt='leadGen.pdf'/>
        <section>
          <h1>Free Download</h1>
          <input placeholder='First Name'></input>
          <input placeholder='Email'></input>
          <button>Download</button>
        </section>
      </div>

      <div className='getStarted'>
        <div className='leftSide'>
          <img src='' alt='envelope'/>
          <h1>Let's Get Started</h1>
          <p></p>
        </div>

        <div className='rightSide'>
          <section>
            <input placeholder='Name'></input>
            <input placeholder='Email'></input>
          </section>
          <p>Message</p>
          <input></input>
          <button>Submit</button>
        </div>
      </div>

      <div className='footer'>
        <div className='footerLeft'>
          <section>
            <h1></h1>
            <p></p>
          </section>

          <section>
            <h1></h1>
            <p></p>
            <p></p>
          </section>
        </div>

        <div className='footerCenter'>
          <h1>Menu</h1>
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Services</h2>
          <h2>Blog</h2>
          <h2>Contact</h2>
        </div>

        <div className='footerRight'>
          <div>
            <section>
              <img src='' alt='instagramLogo.jpg'/>
              <img src='' alt='twitterLogo.jpg'/>
              <img src='' alt='facebookLogo.jpg'/>
            </section>
            <section>
              <img src='' alt='qualifiedCanditatesLogo.jpg'/>
            </section>
            <section>
              <p></p>
              <p></p>
            </section>

          </div>

        </div>
      </div>


    </div>
  );
}

export default App;
