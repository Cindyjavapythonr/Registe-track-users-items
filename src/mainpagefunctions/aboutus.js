
export const AboutUs = () => {
    // A static page that shows briefly mentions the history, achievements, and the philanthropic activities of the organization. The UI should support different content types such as text, images, audio and video files.
    // Two buttons one links to the facebook page one links insta.
    function handleClick(){

    }
    return (
        <div className="about-me">
        <h1>Our Organization</h1>
        <p>
            Our organization was founded in 2005 with the goal of making a positive impact in our community. Since then, we have worked hard to achieve our mission and have made significant progress in various areas, such as education, health, and poverty alleviation.
        </p>
        <h2>Our Achievements</h2>
        <ul>
            <li>Donated $500,000 to build a new school in our community</li>
            <li>Provided free health checkups to over 1,000 people</li>
            <li>Distributed food and clothing to hundreds of families in need</li>
        </ul>
        <h2>Our Philanthropic Activities</h2>
        <p>
            We are dedicated to giving back to our community and helping those in need. Our philanthropic activities include organizing charity events, volunteering at local schools and hospitals, and supporting various non-profit organizations.
        </p>
        <div className="media">
            <img src="https://dummyimage.com/200x200/000/fff" alt="Organization's Logo" />
            <div className="buttons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><button>Facebook</button></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><button>Instagram</button></a>
            </div>
        </div>
        </div>
        )
};

