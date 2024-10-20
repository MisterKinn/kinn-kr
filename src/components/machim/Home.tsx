function Home() {
    return (
        <div id="home" data-aos="fade-up">
            <h1 className="hello-world">Machim Help</h1>

            <div className="center">
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

export default Home;
