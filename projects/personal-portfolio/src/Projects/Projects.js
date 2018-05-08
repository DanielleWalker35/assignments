import React from 'react'
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div className="projectsWrapper">
        {/* <div className="indivProject one">
                <Link className="projectBox picOfMe" to="/about"><div ></div></Link>
                <p className="pBox" >description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fugit laborum expedita, repellat rem quam necessitatibus, a est dolor quas sed explicabo sit officiis architecto sapiente provident dolorem, amet itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores unde facere quisquam, ducimus sint fuga adipisci? Labore doloribus nulla quos quasi, inventore itaque reprehenderit. Distinctio ex quas accusantium aperiam ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorum asperiores doloribus iusto, nemo at earum veritatis dicta voluptatum esse reprehenderit ad exercitationem dolor ipsum neque sequi repellendus. Nostrum, obcaecati.</p>
            </div> */}
            <div className="indivProject two">
                <a className="projectBox farmersMarket" href="http://farmersmarketfinder.surge.sh/" target="_blank"></a>
                <p className="pBox" >description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fugit laborum expedita, repellat rem quam necessitatibus, a est dolor quas sed explicabo sit officiis architecto sapiente provident dolorem, amet itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores unde facere quisquam, ducimus sint fuga adipisci? Labore doloribus nulla quos quasi, inventore itaque reprehenderit. Distinctio ex quas accusantium aperiam ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorum asperiores doloribus iusto, nemo at earum veritatis dicta voluptatum esse reprehenderit ad exercitationem dolor ipsum neque sequi repellendus. Nostrum, obcaecati.</p>
            </div>
            <div className="indivProject three">
                <a className="projectBox turnTaker" href="https://turn-taker.herokuapp.com/" target="_blank"></a>
                <p className="pBox" >description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fugit laborum expedita, repellat rem quam necessitatibus, a est dolor quas sed explicabo sit officiis architecto sapiente provident dolorem, amet itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores unde facere quisquam, ducimus sint fuga adipisci? Labore doloribus nulla quos quasi, inventore itaque reprehenderit. Distinctio ex quas accusantium aperiam ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorum asperiores doloribus iusto, nemo at earum veritatis dicta voluptatum esse reprehenderit ad exercitationem dolor ipsum neque sequi repellendus. Nostrum, obcaecati.</p>
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