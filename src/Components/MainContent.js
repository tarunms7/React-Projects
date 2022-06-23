import React from "react"
import "../index.css"
import linkedin from "./linkedin.png"
import email from "./email.png"
import twitter from "./twitter.png"
import facebook from "./facebook.png"
import instagram from "./instagram.png"
import github from "./github.svg"
export default function MainContent(){
    return(
        <div className="Main_content">
            <main className = "main">
                <h1 className = "main_title"> Fun facts about React </h1>
                <ul className = "main_facts">
                    <li>Its Scalable</li>
                    <li>Its Composable</li>
                    <li>Easy to write</li>
                    <li>EAsy to learn</li>
                    <li>It was released in 2013</li>
                </ul>
            </main>
            <div className = "business_card">
                <img className="business_card_profile_pic" src = "https://deadline.com/wp-content/uploads/2018/10/screen-shot-2018-10-08-at-6-04-09-pm.png"/>
                <h2 className="business_card_profile_name">Mr.Pichai</h2>
                <h3>Front-End Developer</h3>
                <h4>Google Inc.</h4>
                <div className = "contact">
                    <div className = "email_div">
                        <img src = {email}/>
                        <p>Email</p>
                    </div>
                    <div className = "linkedin_div">
                        <img src = {linkedin}/>
                        <p>Linkedin</p>
                    </div>
                </div>
                <div className = "bio">
                    <h4>About</h4>
                    <p>Pichai Sundararajan, better known as Sundar Pichai, is an Indian-American business executive. He is the chief executive officer of Alphabet Inc. and its subsidiary Google.</p>
                    <h4>Interests</h4>
                    <p>Pichai is married to Anjali Pichai and has two children. His recreational interests include cricket and football.</p>
                </div>
                <div className = "social_media">
                    <img className ="twitter_img" src = {twitter} />
                    <img className="facebook_img" src = {facebook}/>
                    <img className="instagram_img" src = {instagram}/>
                    <img className="github_img" src = {github}/>
                </div>
            </div>
        </div>
    )
}