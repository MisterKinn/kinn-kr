"use client";
import EnglishNavBar from "./EnglishNavBar";
import EnglishSidebar from "./EnglishSidebar";
import FAQ from "./FAQ";
import "../../styles/style.css";
import styles from "./english.module.css";

export default function EnglishPage() {
    return (
        <>
            <EnglishNavBar />
            <EnglishSidebar />

            <main className={styles.page}>
                <div className={styles.container}>
                    <header className={styles.hero}>
                        <p className={styles.kicker}>
                            English Self-Taught Journey
                        </p>
                        <h1 className={styles.title}>
                            한국에서 혼자 영어 공부 못한다?
                            <br />
                            학원 없이 5개월만에 검증했습니다
                        </h1>
                        <p className={styles.tagline}>
                            학원·유학 없이 5개월 만에 노베이스에서 프리토킹까지
                        </p>
                    </header>
                    <section id="intro" className={styles.section}>
                        <h2 className={styles.sectionTitle}>들어가며</h2>
                        <p className={styles.paragraph}>
                            우리는 흔히 “영어는 재능이다”, “해외에서 살아야
                            영어가 는다"는 말을 자주 듣습니다.
                            <br /> 저 역시 그렇게 생각하던 사람이었습니다.
                            <br /> 하지만 저는 학원도, 유학도 없이 일상생활에
                            영어를 적극적으로 노출시키는 것만으로 약 5개월 만에
                            모의고사 영어 성적이 3등급에서 1등급으로 상승했고,
                            영어로 프리토킹이 가능해졌습니다.
                        </p>
                        <p className={styles.paragraph}>
                            영어 실력을 단기간에 끌어올리기 위해 제가 선택한
                            방법은 단순했습니다.
                            <br /> 영어를 "공부"하지 않고, 제 주변 환경을 영어로
                            바꾸는 것이었습니다.
                            <br /> 저는 영어를 리딩, 라이팅, 리스닝, 스피킹의 네
                            가지 영역으로 나누어 일상에 자연스럽게 녹여냈고,
                            이를 하루도 빠짐없이 반복했습니다.
                            <br /> 아래는 제가 실제로 실천했던 방법들을 영역별로
                            정리한 기록입니다.
                        </p>
                    </section>

                    <section id="principles" className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            학습의 핵심 원칙: 주체적으로 최대한 많은 영어 노출
                        </h2>
                        제가 세운 가장 중요한 영어 학습 원칙은 다음 두
                        가지였습니다.
                        <ol className={styles.blockquote}>
                            <li>일상생활에 영어를 최대한 많이 노출시킨다.</li>
                            <li>
                                영어를 남이 시켜서 하는 공부가 아니라, 나의
                                필요에 의해 주체적으로 학습한다.
                            </li>
                        </ol>
                        <p className={styles.paragraph}>
                            저는 휴대폰과 전자기기의 언어를 영어로 설정하고,
                            검색도 영어로 했으며, AI에게 질문할 때도 항상 영어를
                            사용했습니다.
                            <br /> 혼자 생각할 때조차 의식적으로 영어로
                            사고하려고 노력했습니다.
                            <br /> 이렇게 생활 전반을 영어 환경으로 만드는 것이
                            모든 학습의 기반이었습니다.
                        </p>
                        <p className={styles.paragraph}>
                            또 하나 중요했던 점은 학습의 동기였습니다.
                            <br /> 본인이 왜 영어 실력을 향상시켜야 하는지에
                            대한 명확한 이유가 없다면 중간에 포기하기 쉽습니다.
                            <br /> 저는 고등학교 2학년 시절 참여한 네트워킹
                            행사에서 한국에서 사업을 하고 계신 미국인과 대화하며
                            언어의 장벽을 크게 느꼈고, 그 경험을 계기로
                            "어떻게든 영어로 자유롭게 대화하자"는 목표가
                            생겼습니다.
                            <br /> 여러분도 정보 접근, AI 활용, 프리토킹 등
                            분명한 목적을 설정하면 포기하지 않고 끝까지 갈 수
                            있을 것입니다.
                        </p>
                    </section>

                    <section id="reading" className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            1. Reading: 관심 있는 주제를 영어로
                        </h2>
                        <p className={styles.paragraph}>
                            리딩은 제가 관심 있는 주제의 정보를 영어로 접하는
                            것으로 학습했습니다.
                            <br />
                            영어 특유의 문어체 때문에 아무 글이나 읽기엔 부담이
                            커서, 흥미로운 주제의 뉴스를 영어로 읽는 것이 가장
                            효율적이라고 판단했습니다.
                            <br />
                            저는 평소 F1, 국제정치, 경제에 관심이 많아 New York
                            Times, Fox News, CNBC, Bloomberg, Financial Times
                            등의 뉴스레터를 구독해 매일 읽었고, F1 앱을 통해
                            관련 뉴스를 꾸준히 확인했습니다.
                        </p>
                        <p className={styles.paragraph}>
                            그리고 저는 관심있는 주제의 책은 반드시 원서로
                            읽었습니다.
                            <br />
                            Surviving to Drive, Apple in China, Zero to One,
                            Elon Musk 등 번역본이 있는 책도 원서를 선택했고, 이
                            과정에서 리딩 실력이 눈에 띄게 향상되었습니다.
                        </p>
                        <p className={styles.paragraph}>
                            또한 초반에는 단어 학습을 병행했습니다.
                            <br />
                            저는 '말해보카'라는 영단어 학습 앱을 사용했는데,
                            광고나 협찬이 아니라 개인적으로 가장 오래, 가장
                            꾸준히 사용한 앱입니다.
                            <br />
                            맥락 중심 예문, 복습 주기 관리, 다양한 단어장 구성
                            덕분에 효율적으로 단어를 익힐 수 있었고, 월 약
                            9,000원 수준으로 충분히 그만한 가치가 있다고
                            느꼈습니다.
                            <br />
                            비용이 부담된다면 대안으로 듀오링고도 추천드립니다.
                        </p>
                        <p className={styles.paragraph}>
                            리딩 과정에서는 모든 문장을 완벽히 해석하기보다 전체
                            흐름을 이해하는 데 집중했고, 모르는 단어는 한국어
                            뜻이 아닌 영어 정의로 검색해 뉘앙스를 익혔습니다.
                        </p>
                    </section>

                    <section id="writing" className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            2. Writing: 틀려도 괜찮은 환경에서 많이 쓰기
                        </h2>
                        <p className={styles.paragraph}>
                            라이팅은 실제 소통을 중심으로 연습했습니다.
                            <br /> Discord, Reddit 등 외국인 커뮤니티에서 관심
                            있는 주제로 의견을 나누었고, AI와의 대화도 전부
                            영어로 진행했습니다.
                            <br /> 문법이 완벽하지 않아도 계속 써보는 것이
                            중요했고, 실전 대화를 통해 교과서에서는 배우기 힘든
                            자연스러운 표현을 익혔습니다.
                        </p>
                        <p className={styles.paragraph}>
                            한국어를 거치지 않고 영어로 바로 쓰는 속도도 점차
                            빨라졌습니다.
                            <br /> 많이 쓰고 틀리면서 교정 받는 환경을 만드는
                            것이 핵심이었습니다.
                        </p>
                    </section>

                    <section id="speaking" className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            3. Speaking: AI와 매일 영어로 말하기
                        </h2>
                        <p className={styles.paragraph}>
                            스피킹은 제가 가장 많은 시간을 투자한 영역입니다.
                            <br />
                            저는 ChatGPT Plus의 보이스 모드를 활용해 매일 약
                            1시간씩 관심사, 뉴스, 일상 주제로 영어 대화를
                            했습니다.
                            <br /> AI는 화를 내지 않기에 부담 없이 말하기 연습을
                            하기 좋았습니다.
                        </p>
                        <p className={styles.paragraph}>
                            그리고 저는 한국에 거주 중인 외국인 지인들과 직접
                            만나 대화했고, 오프라인 네트워킹 행사에서도
                            외국인들과 영어로 소통했습니다.
                            <br />
                            <br /> 최근에는 ChatGPT, Gemini, Grok 등 주요 AI들이
                            무료 요금제에서도 충분히 쓸만한 보이스 기능을
                            제공하니 여러분들의 성향에 맞는 AI를 골라
                            활용해보시는 것을 강력하게 추천드립니다.
                        </p>
                    </section>

                    <section id="listening" className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            4. Listening: 귀가 영어에 익숙해질 때까지
                        </h2>
                        <p className={styles.paragraph}>
                            저는 리스닝도 영어 노출량을 극단적으로 늘리는
                            방식으로 접근했습니다.
                            <br /> 한국어 유튜브 채널 구독을 대부분 해지하고
                            영어 콘텐츠 위주로 시청했으며, 팟캐스트를 식사,
                            이동, 취침 전 등 일상 속 모든 순간에 들었습니다.
                            <br /> 1배속에서 시작해 점차 2배속까지 늘려나가며
                            빠른 속도에 익숙해졌습니다.
                            <br /> 제가 주로 시청한 유튜브와 팟캐스트 채널은
                            다음과 같습니다.
                        </p>

                        <div className={styles.callout}>
                            <h3 className={styles.subheading}>추천 콘텐츠</h3>
                            <p className={styles.paragraph}>
                                <strong>YouTube:</strong> Veritasium(과학) /
                                3Blue1Brown(수학) / NFX(스타트업) / Branch
                                Education(공학) / Vox(시사) / <br />
                                The Wall Street Journal(시사) / Cleo Abram(쉬운
                                과학) / fern(다큐) / Syntax(개발) /
                                Fireship(개발)
                            </p>
                            <p className={styles.paragraph}>
                                <strong>Podcast:</strong> Lex Fridman(클립: Lex
                                Clips) / Joe Rogan(클립: JRE Clips) /
                                <br /> Andrew Huberman(클립: Huberman Lab Clips)
                                / 비즈카페(자막없이 듣기)
                            </p>
                        </div>

                        <p className={styles.paragraph}>
                            그리고 제 리스닝과 전반적인 영어 실력 향상의 핵심은
                            <strong className={styles.highlight}>
                                무자막 시청
                            </strong>
                            이었습니다.
                            <br /> 자막을 켜면 시각 정보에 의존하게 되어 리스닝
                            효과가 급격히 떨어집니다.
                            <br />
                            처음에는 거의 들리지 않아도 자막을 켜지 않고, 화면의
                            맥락과 들리는 소리를 연결하며 문장 구조를 최대한
                            파악하려고 했습니다.
                        </p>
                        <p className={styles.paragraph}>
                            언어 학습은 무의식 속에서 이루어지기에 초반에는
                            변화가 체감되지 않습니다.
                            <br /> 하지만 어느 순간 문장이 들리기 시작하는 "귀가
                            뚫리는" 시점이 찾아오고, 그 이후 리스닝 실력은
                            기하급수적으로 향상됩니다.
                            <br /> 초반이 가장 고통스럽지만 이 구간만 넘기면
                            이후 학습 난이도는 크게 낮아집니다.
                            <br />
                            어렵겠지만 무자막 시청을 끝까지 버텨보시는 것을
                            강력히 추천드립니다.
                        </p>
                    </section>

                    <section id="results" className={styles.section}>
                        <h2 className={styles.sectionTitle}>결과와 느낀 점</h2>
                        <p className={styles.paragraph}></p>

                        <div className={styles.statsContainer}>
                            <img
                                src="/img/sayvoca_1.jpg"
                                alt="말해보카 학습 통계: 총 405시간 35분, 연속 700일, 누적 716일"
                                className={styles.statsImageSmall}
                            />
                            <p className={styles.paragraph}>
                                <br />
                                저는 이 모든 과정을 하루도 빠짐없이
                                반복했습니다.
                                <br />
                                핵심은 꾸준함이었습니다.
                                <br />
                                <br />
                                일례로 저는 영단어 학습에서 하루 150단어를 700일
                                동안 하루도 거르지 않았고, 이를 통해 2년 전 상위
                                21%였던 제 어휘력은 현재 상위 0.1%가 되었습니다.
                                <br />
                                <br />
                                그 결과 약 5개월 만에 영어로 제 생각을 자유롭게
                                말할 수 있게 되었고, 영어에 대한 두려움이 완전히
                                사라졌습니다.
                                <br /> 그리고 의도하지 않았지만 모의고사 영어
                                성적도 3등급에서 1등급으로 상승했습니다.
                                <br /> 저는 이러한 경험을 통해 앞으로 어떤
                                분야를 학습하든 영어처럼 일상에 많이 노출시키면
                                무엇이든 해낼 수 있다는 자신감을 얻게
                                되었습니다.
                            </p>
                        </div>

                        <p className={styles.paragraph}>
                            <br />
                            <br />
                            영어 실력은 남이 시켜서 하는 공부가 아니라, 본인의의
                            필요에 의해 주체적으로 수행하는 학습 속에서 가장
                            빠르게 성장합니다.
                            <br />
                            매일 영어를 보고, 듣고, 말하고, 쓰는 환경에 스스로를
                            놓으면 영어는 어느새 부담스러운 대상이 아니라
                            자연스럽게 사용하는 도구가 됩니다.
                            <br /> 이 글이 영어 학습 방법을 고민하는 분들께
                            도움이 되었길 바랍니다.
                        </p>
                        <p className={styles.paragraph}>
                            저에 대해 더 궁금하신 분들은 제 인스타그램 (
                            <a
                                className={styles.anchor}
                                href="https://www.instagram.com/kinn__sy"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <strong>@kinn__sy</strong>
                            </a>
                            ) 팔로우 부탁드립니다.
                            <br /> 긴 글 읽어주셔서 감사합니다.
                            <br />
                            김성연 드림
                        </p>
                    </section>

                    <section id="disclaimer" className={styles.section}>
                        <h3 className={styles.sectionTitle}>Disclaimer</h3>
                        <p className={styles.paragraph}>
                            본 글의 내용은 저의 개인적인 경험과 기록을 바탕으로
                            작성되었습니다.
                            <br />
                            본문의 무단 복제, 재배포, 재가공 등 2차 창작을
                            금지합니다.
                        </p>
                        <p className={styles.paragraph}>
                            이 내용을 공유하고 싶으신 분들은 본 글의 링크를
                            공유해주시면 감사하겠습니다 :)
                        </p>
                    </section>

                    <FAQ />
                </div>
            </main>
        </>
    );
}
