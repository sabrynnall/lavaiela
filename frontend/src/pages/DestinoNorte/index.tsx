import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Chevron from '../../assets/Images/chevron-down.svg';
import { BannerDestinos, BotaoNext, BotaoPrev, Carousel, ContainerCidades, ConteudoEstados, EstadosTitulo, FraseDestinos, FraseDestinosSubtitulo, FraseDestinosTitulo, GradienteBrancoDestino, ImagemChevronDestino, ImagemCidade, ImagemNext, ImagemNextSecond, ImagemPrev, ImagemPrevSecond, LinkCidade, SetaDestino } from './styled';
import ImagemManaus from '../../assets/Images/imagem-manaus.png';
import ImagemParintins from '../../assets/Images/imagem-parintins.png';
import ImagemPresidente from '../../assets/Images/imagem-presidente.png';
import ImagemBelem from '../../assets/Images/imagem-belem.png';
import ImagemAlter from '../../assets/Images/imagem-alter.png';
import ImagemMaraba from '../../assets/Images/imagem-maraba.png';
import SetaVoltar from '../../assets/Images/seta-voltar.png';
import { useRef } from 'react';
import botaoPrev from '../../assets/Images/botao-prev.png';
import botaoNext from '../../assets/Images/botao-next.png';
import { Link } from 'react-router-dom';
import { VoltarPagina } from '../DestinoNordeste/styled';

const DestinoNorte: React.FC = () => {

  const firstCarousel: any = useRef(null);
  const secondCarousel: any = useRef(null);

  const handleLeftClickFirst = (e: any) => {
    e.preventDefault(e);
    firstCarousel.current.scrollLeft -= 500;
  }

  const handleRightClickFirst = (e: any) => {
    e.preventDefault(e);
    firstCarousel.current.scrollLeft += 500;
  };

  const handleLeftClickSecond = (e: any) => {
    e.preventDefault(e);
    secondCarousel.current.scrollLeft -= 500;
  }

  const handleRightClickSecond = (e: any) => {
    e.preventDefault(e);
    secondCarousel.current.scrollLeft += 500;
  };

  return (
    <Container>
      <Header />
      <BannerDestinos>
        <Link to={'/'}>
          <VoltarPagina src={SetaVoltar} alt="seta-voltar" />
        </Link>
        <FraseDestinos>
          <FraseDestinosTitulo>Destinos do Norte</FraseDestinosTitulo>
          <FraseDestinosSubtitulo>Guia de destinos do Brasil</FraseDestinosSubtitulo>
        </FraseDestinos>
      </BannerDestinos>
      <GradienteBrancoDestino>
        <SetaDestino href='#conteudo-estados'>
          <ImagemChevronDestino src={Chevron} alt="seta" />
        </SetaDestino>
      </GradienteBrancoDestino>
      <ConteudoEstados id='conteudo-estados'>
        <div>
          <EstadosTitulo>Amazonas</ EstadosTitulo>
          <ContainerCidades>
            <div>
              <BotaoPrev onClick={handleLeftClickFirst}>
                <ImagemPrev src={botaoPrev} alt="botao-prev" />
              </BotaoPrev>
            </div>
            <Carousel ref={firstCarousel}>
              <div className='item d-flex'>
                <LinkCidade to={'#'}>
                  <ImagemCidade src={ImagemManaus} alt="" />
                  Manaus
                </LinkCidade>
                <LinkCidade to={'#'}>
                  <ImagemCidade src={ImagemParintins} alt="" />
                  Parintins
                </LinkCidade>
                <LinkCidade to={'#'}>
                  <ImagemCidade src={ImagemPresidente} alt="" />
                  Presidente Figueiredo
                </LinkCidade>
              </div>
            </Carousel>
            <div>
              <BotaoNext onClick={handleRightClickFirst}>
                <ImagemNext src={botaoNext} alt="botao-next" />
              </BotaoNext>
            </div>
          </ContainerCidades>
          <EstadosTitulo>Pará</EstadosTitulo>
          <ContainerCidades>
            <div className='botao-prev'>
              <BotaoPrev onClick={handleLeftClickSecond}>
                <ImagemPrevSecond src={botaoPrev} alt="botao-prev" />
              </BotaoPrev>
            </div>
            <Carousel ref={secondCarousel}>
              <div className='item d-flex'>
                <LinkCidade to={'#'}>
                  <ImagemCidade src={ImagemBelem} alt="" />
                  Belém
                </LinkCidade>
                <LinkCidade to={'#'}>
                  <ImagemCidade src={ImagemAlter} alt="" />
                  Alter do Chão
                </LinkCidade>
                <LinkCidade to={'#'}>
                  <ImagemCidade src={ImagemMaraba} alt="" />
                  Marabá
                </LinkCidade>
              </div>
            </Carousel>
            <div>
              <BotaoNext onClick={handleRightClickSecond}>
                <ImagemNextSecond src={botaoNext} alt="botao-next" />
              </BotaoNext>
            </div>
          </ContainerCidades>
        </div>
      </ConteudoEstados>
      <Footer />
    </Container>
  );
}

export default DestinoNorte;