import React from 'react'
// import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div className="projectsWrapper">
            <div className="indivProject two">
                <a className="projectBox farmersMarket" href="http://farmersmarketfinder.surge.sh/" target="_blank"> </a>
                <div className="pBox">
                    <p className="projectP"><span className="bold">FARMER'S MARKET FINDER</span> is a front end web applicaiton that helps users locate nearby farmer's markets. Users can save markets and their info (this will not currently survive navigating away from the website) that they can print.</p>
                    <p className="projectP"><span className="bold">TECHNOLOGIES USED:</span> React, CSS, HTML, JavaScript, Redux + Thunk</p>
                    <p className="projectP"><span className="bold">LESSONS LEARNED:</span> Understanding the best way to interact with databases to get the infromation that you want.  I realized that all databases are not designed in a way that it is easy to get the data you need.  You need a good understanding of how the data is arranged so you can get to the data you are looking for.</p>
                    <p className="projectP"><span className="bold">FUTURE DEVELOPMENT PLANS:</span> Add user authenticaiton so that you can save markets after refreshing the application</p>
                </div>
            </div>
            <div className="indivProject three">
                <a className="projectBox turnTaker" href="https://turn-taker.herokuapp.com/" target="_blank"> </a>
                <div className="pBox">
                    <p className="projectP"> <span className="bold">TURN TAKER</span>  is a full-stack web application that helps families, friends, or co-workers assign chores or activities in a fair way. Assignments are base on an ability/age level and how many chores/activities someone has already been assigned. You can add, edit and delete people and chores then easily assign chores. </p>
                    <p className="projectP"><span className="bold">TECHNOLOGIES USED:</span> React, CSS, HTML, JavaScript, Redux + Thunk, MongoDB, Mongoose, Express</p>
                    <p className="projectP"><span className="bold">LESSONS LEARNED:</span> Understanding the logic behind assiging the chores taking into consideration the age level and who has already been assigned. Also gained a good understanding of how to pass state data to different componenets.</p>
                    <p className="projectP"><span className="bold">FUTURE DEVELOPMENT PLANS:</span> Add user authentication so that you can save groups of chores and or people. For example you could save Saturday Chores and Kids or Monday Chores and CoWorkers as groups and automatically populate to assign.</p>
                </div>
            </div>

            <div className="indivProject four">
                <div className="projectBox rockTheVote"></div>
                <p className="pBox" >description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fugit laborum expedita, repellat rem quam necessitatibus, a est dolor quas sed explicabo sit officiis architecto sapiente provident dolorem, amet itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores unde facere quisquam, ducimus sint fuga adipisci? Labore doloribus nulla quos quasi, inventore itaque reprehenderit. Distinctio ex quas accusantium aperiam ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorum asperiores doloribus iusto, nemo at earum veritatis dicta voluptatum esse reprehenderit ad exercitationem dolor ipsum neque sequi repellendus. Nostrum, obcaecati.</p>
            </div>
            <div className="indivProject five">
                <div className="projectBox rockTheVote"></div>
                <p className="pBox" >description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fugit laborum expedita, repellat rem quam necessitatibus, a est dolor quas sed explicabo sit officiis architecto sapiente provident dolorem, amet itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores unde facere quisquam, ducimus sint fuga adipisci? Labore doloribus nulla quos quasi, inventore itaque reprehenderit. Distinctio ex quas accusantium aperiam ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorum asperiores doloribus iusto, nemo at earum veritatis dicta voluptatum esse reprehenderit ad exercitationem dolor ipsum neque sequi repellendus. Nostrum, obcaecati.</p>
            </div>
        </div>
    )
}
export default Projects;