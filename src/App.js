import logo from './logo.svg';
import './App.css';

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
        <div className='leftSide'>
          <img src='' alt='clockIcon'/>
        </div>
        <h1></h1>
        <p></p>
        <button>Call to Action</button>
        
        <div className='rightSide'>
          <section>
            <h2></h2>
            <p></p>
          </section>

          <section>
            <h2></h2>
            <p></p>
          </section>

          <section>
            <h2></h2>
            <p></p>
          </section>
        </div>

      </div>

      <div className='howItWorks'>
        <h1></h1>
        <div>
          <section>
            <img src='' alt='CandidatesApply.jpg'/>
          </section>
          
          <section>
            <img src='' alt='WeSourceStaff.jpg'/>
          </section>
          
          <section>
            <img src='' alt='YouInterviewAndHire.jpg'/>
          </section>
        </div>

        <p></p>
        <p></p>

        <div className='adminInclusions'>
            <section>
            
              <img src='' alt='briefcase.jpg'/>
              <h3>Unemployment Issues</h3>
                        
              <img src='' alt='shield.jpg'/>
              <h3>Liability Concerns</h3>
                        
              <img src='' alt='folder.jpg'/>
              <h3>I-9 Compliance</h3>
                        
              <img src='' alt='document.jpg'/>
              <h3>Employment Taxes</h3>
            
            </section>
            <section>
            
              <img src='' alt='factory.jpg'/>
              <h3>Workers Compensation Insurance</h3>
            
              <img src='' alt='medal.jpg'/>
              <h3>Benefits</h3>
           
              <img src='' alt='pill.jpg'/>
              <h3>Drug Screening</h3>
            
              <img src='' alt='reverseArrows.jpg'/>
              <h3>Direct Deposit</h3>
            
            </section>

            <button>Call to Action</button>
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
