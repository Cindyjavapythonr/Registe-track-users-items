
export const AboutUs = () => {
    // A static page that shows briefly mentions the history, achievements, and the philanthropic activities of the organization. The UI should support different content types such as text, images, audio and video files.
    // Two buttons one links to the facebook page one links insta.
    function handleClick(){

    }
    return (
        <div className="about-me">
        <h1>Our Organization VRIFamily Charity Aid</h1>
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
        <div className="media">
            <img src="https://dummyimage.com/200x200/000/fff" alt="Organization's Logo" />
            <div className="buttons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <button>Facebook</button>
                </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <button>Instagram</button>
                </a>
            </div>
        </div>
        </div>
    )
};

