import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundDestinos from "../../assets/Images/banner-destinos-home.png";

export const ContainerDestinos = styled.div`
   mix-blend-mode: normal;
   box-shadow: 0px 1px 24px -1px rgba(0, 0, 0, 0.1);
   width: 100vw;
   max-width: 100%;
   background-image: url(${backgroundDestinos});
   background-repeat:no-repeat;
   background-size:cover;
   background-position:center;
`

export const ContainerTitulos = styled.div`
   padding-left: 20%;

   @media screen and (max-width: 1400px) {
      padding-left: 10%;
   }
`

export const TituloDestinos = styled.h2`
   font-family: 'Roboto', sans-serif;
   font-weight: 700;
   font-size: 48px;
   color: #FFF;
   padding: 7% 0 0 0;
`

export const SubtituloDestinos = styled.h3`
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   font-size: 36px;
   color: #FFF;
   padding-bottom: 2%;
`

export const ConteudoDestinos = styled.div`
   display: flex;
   justify-content: center;
   padding-bottom: 10%;

   @media screen and (max-width: 1400px) {
      padding-bottom: 10%;
   }

   @media screen and (max-width: 900px) {
      flex-direction: column;
      align-items: center;
   }
`

export const LinkDestino = styled(Link)`

   margin-right: 2%;

   @media screen and (max-width: 900px) {
      margin-right: 4%;
      margin-bottom: 5%;
      padding-bottom: 5%;
      border-radius: 70px;
   }

   @media screen and (max-width: 480px) {
      margin-right: 4%;
      margin-bottom: 5%;
      padding-bottom: 5;
      border-radius: 40px;
   }
`

export const ImagemDestino = styled.img`

   transition: all 0.3s;

   :hover {
      opacity: 50%;
      transition: 0.8s;
   }

   @media screen and (max-width: 900px) {
      width: 400px;
      height: 450px;
   }

   @media screen and (max-width: 480px) {
      width: 300px;
      height: 350px;
   }
`