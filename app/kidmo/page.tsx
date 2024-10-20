"use client";
import "../../styles/link.css";
import Banner from "../../components/home/Banner";
import Footer from "../../components/home/Footer";
import styled from "styled-components";

const MobileKidmoWeb = styled.div`
    @media only screen and (max-width: 800px) {
        .hello {
            font-size: 1.6em;
        }

        .name {
            font-size: 6em;
        }

        .explain {
            font-size: 1em;
        }

        .spec {
            margin-top: 1em;
            margin-bottom: 1em;
        }

        .card-container {
            height: 5em;
            width: 8em;
            margin-top: -1.5em;
        }
    }
`;

function Kidmo() {
    return (
        <div>
            <MobileKidmoWeb>
                <div className="header">
                    <div className="blank"></div>
                    <h2 className="hello">Link of</h2>
                    <h1 className="name">Kidmo</h1>
                    <div className="explain">
                        웹 페이지의 모든 카드는 클릭 시 해당 링크로 이동됩니다.
                    </div>
                </div>

                <div className="blank">
                    <div className="container">
                        <a
                            href="https://discord.gg/3S3z4epUSb"
                            target="_blank"
                            title="Official Discord"
                            className="spec"
                        >
                            <div className="card-container">
                                <div>
                                    <img
                                        loading="lazy"
                                        src="img/discord.png"
                                        className="card-img auto-width"
                                    />
                                    <span className="card-title">
                                        <strong>공식 Discord</strong>
                                    </span>
                                </div>
                                <div className="card-text">
                                    공식 디스코드 서버입니다.
                                    <div className="card-footer">
                                        <strong>
                                            <br />
                                            https://discord.gg/3S3z4epUSb
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://discord.gg/abH2ZaxP7b"
                            target="_blank"
                            title="Fan Discord"
                            className="spec"
                        >
                            <div className="card-container">
                                <div>
                                    <img
                                        loading="lazy"
                                        src="img/discord.png"
                                        className="card-img auto-width"
                                    />
                                    <span className="card-title">
                                        <strong>팬 Discord</strong>
                                    </span>
                                </div>
                                <div className="card-text">
                                    팬 디스코드 서버입니다.
                                    <div className="card-footer">
                                        <strong>
                                            <br />
                                            https://discord.gg/abH2ZaxP7b
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://www.youtube.com/@KidmoYoutube"
                            target="_blank"
                            title="Official Youtube Channel"
                            className="spec"
                        >
                            <div className="card-container">
                                <div>
                                    <img
                                        loading="lazy"
                                        src="img/youtube.png"
                                        className="card-img auto-width"
                                    />
                                    <span className="card-title">
                                        <strong>YouTube</strong>
                                    </span>
                                </div>
                                <div className="card-text">
                                    공식 유튜브 채널입니다.
                                    <div className="card-footer">
                                        <strong>
                                            <br />
                                            https://www.youtube.com/@KidmoYoutube
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://www.twitch.tv/kidmostudio"
                            target="_blank"
                            title="Official Twitch Channel"
                            className="spec"
                        >
                            <div className="card-container">
                                <div>
                                    <img
                                        loading="lazy"
                                        src="img/twitch.png"
                                        className="card-img"
                                    />
                                    <span className="card-title">
                                        <strong>Twitch</strong>
                                    </span>
                                </div>
                                <div className="card-text">
                                    공식 트위치 채널입니다.
                                    <div className="card-footer">
                                        <strong>
                                            <br />
                                            https://www.twitch.tv/kidmostudio
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://twitter.com/Kidmo_Twit"
                            target="_blank"
                            title="Official X Account"
                            className="spec"
                        >
                            <div className="card-container">
                                <div>
                                    <img
                                        loading="lazy"
                                        src="img/x.webp"
                                        className="card-img"
                                    />
                                    <span className="card-title">
                                        <strong>X</strong>
                                    </span>
                                </div>
                                <div className="card-text">
                                    공식 X 계정입니다.
                                    <div className="card-footer">
                                        <strong>
                                            <br />
                                            https://twitter.com/Kidmo_Twit
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://www.pixiv.net/users/40860724"
                            target="_blank"
                            title="Official Wholesome Pixiv Account"
                            className="spec"
                        >
                            <div className="card-container">
                                <div>
                                    <img
                                        loading="lazy"
                                        src="img/pixiv.png"
                                        className="card-img"
                                    />
                                    <span className="card-title">
                                        <strong>건전 Pixiv</strong>
                                    </span>
                                </div>
                                <div className="card-text">
                                    [건전용] 공식 픽시브 계정입니다.
                                    <div className="card-footer">
                                        <strong>
                                            <br />
                                            https://www.pixiv.net/users/40860724
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://www.pixiv.net/users/4641981"
                            target="_blank"
                            title="Official UnWholesome Pixiv Account"
                            className="spec"
                        >
                            <div className="card-container">
                                <div>
                                    <img
                                        loading="lazy"
                                        src="img/pixiv.png"
                                        className="card-img"
                                    />
                                    <span className="card-title">
                                        <strong>불건전 Pixiv</strong>
                                    </span>
                                </div>
                                <div className="card-text">
                                    [불건전용] 공식 픽시브 계정입니다.
                                    <div className="card-footer">
                                        <strong>
                                            <br />
                                            https://www.pixiv.net/users/4641981
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <Banner />

                <footer className="footer">
                    <Footer />
                </footer>
            </MobileKidmoWeb>
        </div>
    );
}

export default Kidmo;
