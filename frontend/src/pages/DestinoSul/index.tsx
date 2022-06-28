import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BannerDestinos from '../../components/Destino/BannerDestinos';
import ContentListDestinos from '../../components/Destino/ContentListDestinos';

const DestinoSul: React.FC = () => {
  return (
    <Container>
        <Header />
        <div className='banner-destinos'>
            <div className="frase-destinos">
                <h1>Destinos do Sul</h1>
                <h2>Guia de destinos do Brasil</h2>
            </div>
        </div>
        <ContentListDestinos />
        <Footer />
    </Container>
  );
}

export default DestinoSul;