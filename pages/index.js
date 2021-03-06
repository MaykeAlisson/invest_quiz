import styled from 'styled-components'

import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizBackground from "../src/components/QuizBackgroud";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";

// const BackgroudImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <Widget>
                    <Widget.Header>
                        <h1 style={{color: "red"}}> HOME </h1>
                    </Widget.Header>
                    <Widget.Content>
                        texto do corpo
                    </Widget.Content>
                </Widget>
                <Footer/>
            </QuizContainer>
            <GitHubCorner projectUrl={'https://github.com/MaykeAlisson'}/>
        </QuizBackground>
    )
}
