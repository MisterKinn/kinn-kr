function Support() {
    return (
        <div id="Support">
            <h1 className="mobile-support" data-aos="fade-up">
                <br />
                <br />
                Use Machim Bot
                <br />
                in your server!
            </h1>

            <div className="center" data-aos="fade-up">
                <button
                    className="join"
                    onClick={() =>
                        window.open("https://discord.gg/ShqKtwyjgy", "_blank")
                    }
                >
                    Support Server
                </button>
                <button
                    className="join"
                    onClick={() =>
                        window.open(
                            "https://discord.com/oauth2/authorize?client_id=869998026083680336&permissions=8&scope=bot%20applications.commands",
                            "_blank"
                        )
                    }
                >
                    Invite Bot
                </button>
            </div>
        </div>
    );
}

export default Support;
