import Experience from "@/components/archive/home2/desktop/Experience";
import "@/styles/home/experience.css";

function MobileExperience() {
    return (
        <div id="Experience" data-aos="fade-up">
            <h2 id="m-list">Experience</h2>
            <h3 id="m-explain">
                Learn and grow
                <br />
                through invaluable opportunity.
                <br />
                Click the card to see the detail.
            </h3>

            <Experience />
        </div>
    );
}

export default MobileExperience;
