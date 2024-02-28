import "../../styles/machim.css";

function Utility() {
    return (
        <div className="body">
            <h1 id="Support" className="footer">
                <br />
                <br />
                다재다능한 <strong>.마침이</strong> 봇을 <br />
                당신의 서버에서 사용해보세요!
            </h1>

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

export default Utility;
