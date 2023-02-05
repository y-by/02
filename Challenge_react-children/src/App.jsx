import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Callout from './Callout'
import InfoCallout from "./InfoCallout"
import ImageCallout from "./ImageCallout"
import EmailCallout from "./EmailCallout"

function App() {
  return (
    <main>
      <h1>Welcome!</h1>
{/* From components, use props */}      
      <InfoCallout 
          header="Don't miss out!"
          body="Unless you don't suffer from FOMO, you better make sure you fill out the email form below!" 
      />
      
      <p>This is probably the best site you've ever come across. I'm glad you're here to witness the magnificence of this website right now.</p>
      
      <ImageCallout 
          img={"https://picsum.photos/id/102/4320/3240"} 
          caption="Just look at those sparkling raspberries!"
      />
      
      <p>Here's some more unforgettable content. Lorem ipsum something or other.</p>
      
      <EmailCallout 
          header="Give us your email. We definitely won't sell it to anyone." 
          btnText="Sign me up!" 
      />
      <br/>
      <hr/>
      <br/>
{/* From component, use props.children */}
      <Callout>
          <h2>Don't miss out!</h2>
          <p>Unless you don't suffer from FOMO, you better make sure you fill out the email form below!</p>
      </Callout>
      
      <p>This is probably the best site you've ever come across. I'm glad you're here to witness the magnificence of this website right now.</p>
      
      <Callout>
              <img src="https://picsum.photos/id/102/4320/3240" width="100%"/>
              <figcaption>Just look at those sparkling raspberries!</figcaption>
              <p>This is probably the best site you've ever come across. I'm glad you're here to witness the magnificence of this website right now.</p>

      </Callout>
      
      
      <p>Here's some more unforgettable content. Lorem ipsum something or other.</p>
      
      <Callout>
          <h2>Give us your email. We definitely won't sell it to anyone.</h2>
          <input type="email" placeholder="Enter Email"/>
          <button type="button">Sign me up!</button>
      </Callout>
    
    </main>
  )
}

export default App
