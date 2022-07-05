import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/Cidades/BannerCidades';
import ConteudoCidades from '../../components/Cidades/ConteudoCidades';
import FotosCidades from '../../components/Cidades/FotosCidades';
import ComentarioCidades from '../../components/Cidades/ComentarioCidades';
import Footer from '../../components/Footer';


const Cidades: React.FC = () => {
  return (
      <Container>
          <Header/>
          <BannerCidades/>
          <ConteudoCidades/>
          <FotosCidades/>
          <ComentarioCidades/>
          <Footer/>
      </Container>
      
  );
}

export default Cidades;