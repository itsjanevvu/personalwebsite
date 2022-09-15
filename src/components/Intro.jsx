
import React from "react"

import Typewriter from 'typewriter-effect';

export default function Intro (){

    let word = "designer"



    return(
        <section className = "red-bg">
            <div className = "split">

                <div className = "intro-text">
                    <h1>Hi I'm Jane,</h1>

                    <div className = "typewriter">
                    <Typewriter
                        options={{
                      strings: ['a UX Designer', 'an Engineer', 'a Student','a Volunteer' ,'a Dog-mom'],
                         autoStart: true,
                        loop: true,
                    }} />

                    </div>
                   
                   

                    <div className = "intro-buttons">
                       
                       

                       <a href= "https://www.linkedin.com/in/jane-wu-1551a61b6/">
                        
                       <button className="btn" type = "click">let's chat</button>

                       </a>


                       <a href= "https://docs.google.com/document/d/1eKkqAL9AdAi64PXVN7sCSeWZBOyiFADnPt9-DvcDKSE/edit?usp=sharing">
                        <button className="btn resume" type = "click">Resume pdf</button>
                        </a>
                    </div>
            
                </div>

                <div>
                < img className = "container" src = "./memojis/image4.png"></img>
                </div>
             

            </div>
        </section>
    )
}