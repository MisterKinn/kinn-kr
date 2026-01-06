"use client";
import "../../styles/link.css";
import Banner from "../../components/archive/home2/desktop/Banner";
import Footer from "../../components/archive/home2/desktop/Footer";
import styled from "styled-components";

const MobileDonhoWeb = styled.div`
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

function Donho() {
    return (
        <div>
            <MobileDonhoWeb>
                <div className="header">
                    <div className="blank"></div>
                    <h2 className="hello">Link of</h2>
                    <h1 className="name">DonHo Lee</h1>
                    <div className="explain">
                        웹 페이지의 모든 카드는 클릭 시 해당 링크로 이동됩니다.
                    </div>
                </div>

                <div className="blank">
                    <div className="container">
                        <a
                            href="https://www.youtube.com/@donosaTV"
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
                                            https://www.youtube.com/@donosaTV
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://open.kakao.com/o/gf6Hho6f"
                            target="_blank"
                            title="Official KakaoTalk Fan Channel"
                            className="spec"
                        >
                            <div className="card-container">
                                <div>
                                    <img
                                        loading="lazy"
                                        src="img/KakaoTalk.svg"
                                        className="card-img"
                                    />
                                    <span className="card-title">
                                        <strong>팬톡방</strong>
                                    </span>
                                </div>
                                <div className="card-text">
                                    공식 카카오톡 오픈채팅 팬 톡방입니다.
                                    <div className="card-footer">
                                        <strong>
                                            <br />
                                            https://open.kakao.com/o/gf6Hho6f
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://discord.gg/5QMg5Y5m59"
                            target="_blank"
                            title="Official Discord Server"
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
                                        <strong>Discord</strong>
                                    </span>
                                </div>
                                <div className="card-text">
                                    공식 디스코드 서버입니다.
                                    <div className="card-footer">
                                        <strong>
                                            <br />
                                            https://discord.gg/5QMg5Y5m59
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://www.instagram.com/lawyer_dono/"
                            target="_blank"
                            title="Official Instagram Account"
                            className="spec"
                        >
                            <div className="card-container">
                                <div>
                                    <img
                                        loading="lazy"
                                        src="img/instagram.png"
                                        className="card-img"
                                    />
                                    <span className="card-title">
                                        <strong>Instagram</strong>
                                    </span>
                                </div>
                                <div className="card-text">
                                    공식 인스타그램 계정입니다.
                                    <div className="card-footer">
                                        <strong>
                                            <br />
                                            https://www.instagram.com/lawyer_dono
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://www.lawtalk.co.kr/directory/profile/5517-이돈호"
                            target="_blank"
                            title="Official LawTalk Account"
                            className="spec"
                        >
                            <div className="card-container">
                                <div>
                                    <img
                                        loading="lazy"
                                        src="img/lawtalk.webp"
                                        className="card-img"
                                    />
                                    <span className="card-title">
                                        <strong>LawTalk</strong>
                                    </span>
                                </div>
                                <div className="card-text">
                                    공식 로톡 계정입니다.
                                    <div className="card-footer">
                                        <strong>
                                            <br />
                                            https://www.lawtalk.co.kr/directory/
                                            <br />
                                            profile/5517-이돈호
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://novalaw.kr"
                            target="_blank"
                            title="Official Law Firm Website"
                            className="spec"
                        >
                            <div className="card-container">
                                <div>
                                    <img
                                        loading="lazy"
                                        src="img/nova.jpg"
                                        className="card-img auto-width"
                                    />
                                    <span className="card-title">
                                        <strong>Nova Web</strong>
                                    </span>
                                </div>
                                <div className="card-text">
                                    NOVA법률사무소(이돈호 대표)
                                    <br />
                                    공식 사이트입니다.
                                    <div className="card-footer">
                                        <strong>
                                            <br />
                                            https://novalaw.kr
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
            </MobileDonhoWeb>
            ``
        </div>
    );
}

export default Donho;
