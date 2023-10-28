import React from "react";
import styled from "styled-components";
import Video from "../assets/videos/EdcanVideo.mp4";

const IntroClub = ({introclubRef}) => {
    return(
        <Container ref={introclubRef}>
            <Wrapper>
                <IntroTextField>
                    <TitleText>동아리 소개</TitleText>
                    <Intro>
                        <IntroText>
                            EDCAN은 2015년에 만들어진 소프트웨어과 소속의 모바일 콘텐츠 개발 동아리로,<br/>
                            안드로이드 앱 개발, 크로스 플랫폼 서비스 개발, UI/UX 디자인을 공부합니다.<br/>
                            타 학교, 타 동아리와 협업을 중심으로 다양한 경험을 쌓을 수 있습니다.
                        </IntroText>
                        <IntroText>
                            앱 개발 동아리 EDCAN에서 여러분의 창의력을 발휘해보세요. 어디서나<br/>
                            볼 수 있는 앱 속의 세계를 Android Studio로 직접 만들어봐요!
                        </IntroText>
                    </Intro>
                </IntroTextField>
                <VideoContainer>
                    <TitleText>소개 영상</TitleText>
                    <video
                        width={500}
                        height={281}
                        muted
                        autoPlay
                        loop
                    >
                        <source src={Video} type="video/mp4" />
                    </video>
                </VideoContainer>
            </Wrapper>
        </Container>
    )
}

const VideoContainer = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 25px;
  align-self:flex-end;
  margin-top: 150px;
`;

const IntroText = styled.text`
  color: #262A2E;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
`;

const TitleText = styled.text`
  color: #00D1FF;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const IntroTextField = styled.div`
  display: inline-flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  margin-top: 175px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width:100%;
  height: 1080px;
  background-color: #FFFFFF;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default IntroClub;
