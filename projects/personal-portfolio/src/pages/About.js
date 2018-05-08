import React from 'react'

function About() {
    return (
        <div className="profileWrapper">
            <div className="aboutPage">
                <p className="profileHeader">Profile</p>
                <p>Web developer and life long lerner</p>
                <div className="bioPicWrapper">
                    <div className="aboutMe">
                        <p className="pFirstHeading">About me</p>
                        <p>Here I will put interesting info about myself</p>
                    </div>
                    <div className="picOfMe"></div>
                    <div className="contactInfo">
                        <p className="pFirstHeading">Contact Info</p>
                        <p className="pHeading">Phone:</p>
                        <p>801-633-4338</p>
                        <p className="pHeading">Email:</p>
                        <p>yeller22@gmail.com</p>
                        <p v>Location:</p>
                        <p>Lehi, Ut</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;