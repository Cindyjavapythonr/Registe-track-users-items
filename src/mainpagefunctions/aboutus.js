import './AboutMe.css';

export const AboutUs = () => {
    // A static page that shows briefly mentions the history, achievements, and the philanthropic activities of the organization. The UI should support different content types such as text, images, audio and video files.
    // Two buttons one links to the facebook page one links insta.
    

    return (
        <div className="about-me">
            <img src="https://i.imgur.com/6hGSXKj.jpg" alt="Organization's Logo" width="200" height="200" style= {{paddingBottom: '100' }} />
        <h1 className= "title">Our Organization: VRIFamily Charity Aid</h1>
        <p>
        VR1Family Charity Aid Services started off as a small not for profit organization, founded in June 2019 by a group of 5 volunteers in a garage in Mallacoota, Australia.
        Our Focus is to provide immediate humanitarian assistance and improve the lives of people facing economic, social, and health challenges in the immediate aftermath of natural calamities in their local community. </p>
        <h2>Our Achievements</h2>
        <ul>
            <li>Donated $500,000 to build a new school in our community</li>
            <li>Provided free health checkups to over 1,000 people</li>
            <li>Distributed food and clothing to hundreds of families in need</li>
        </ul>
        <h2>Our Philanthropic Activities</h2>
        <p>
            We are dedicated to giving back to our community and helping those in need. We supply aid through the form of money, food/essential supply packages, and aid equipment. 
            Since 2020, VR1Family slowly started1 expanding their footprint outside Australia, serving in multiple humanitarian aid assistance programs such as Mount Sumeru volcanic eruption in Indonesia
            , flooding in Belgium and Germany , and the earthquake in Haiti.
        </p>
        <h3 className='title'>Follow Us</h3>
        <div className="media">
            <iframe src="https://www.veed.io/embed/a2436f83-264e-46a7-be42-19606a713ada" width="744" height="504" frameborder="0" title="Project Name" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <div className="buttons">
            <a href=" https://www.facebook.com/VR1Family" target="_blank" rel="noopener noreferrer">
                <button>Facebook</button>
                </a>
            <a href="https://www.instagram.com/vr1familycharity/" target="_blank" rel="noopener noreferrer">
                <button>Instagram</button>
                </a>
            </div>
            <script type="text/javascript" src="https://platform-api.sharethis.com/js/sharethis.js#property=645f04220c19c90019685b11&product=inline-follow-buttons&source=platform" async="async"></script>
            <div class="sharethis-inline-follow-buttons"></div>

        </div>
        
        </div>
    )
};

