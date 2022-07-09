import styled from 'styled-components';
import back from '../../assets/Images/banner-sobre.png';

export const ContainerSobre = styled.div`
    background-image: url(${back});
    margin: 0 auto;
    padding-top: 2%;
    width: 100vw;
    max-width: 100%;
    height: 110vh;
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
`

export const Titulos = styled.div`
    padding: 0;
    padding-left: 20%;

    @media screen and (max-width: 1400px) {
        padding-left: 10%;
    }
`

export const TituloSobre = styled.h2`
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 48px;
    color: #1A1A1B;
`

export const SubtituloSobre = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 36px;
    color: #1A1A1B;
    padding-bottom: 4%;
`

export const ConteudoSobre = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 5%;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        padding-bottom: 60%;
    }

    @media screen and (max-width: 480px) {
        padding-bottom: 90%;
    }
`

export const ContaineirVideo = styled.div`
    
`
export const VideoSobre = styled.iframe`
    border-radius: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 900px) {
        margin-top: 2%;
    }

    @media screen and (max-width: 480px) {
        margin-top: 2%;
        width: 300px;
        height: 295px;
    }
`

export const ContainerTextoSobre = styled.div`
    width: 655px;
    height: 400px;
    padding-left: 4%;

    @media screen and (max-width: 900px) {
        width: 445px;
        height: 300px;
        margin-right: 4%;
        margin-top: 2%;
    }

    @media screen and (max-width: 480px) {
        width: 300px;
        height: 230px;
        margin-right: 4%;
        margin-top: 5%;
    }
`

export const TextoSobre = styled.p`
    font-family: 'Roboto Serif', serif;
    font-size: 18px;
    color: #1A1A1B;

    @media screen and (max-width: 900px) {
        font-size: 25px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`