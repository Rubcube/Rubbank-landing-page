import * as styled from './styles';
import Divisor from '../../../assets/imgs/divisor.svg';
import SectionTitle from '../../../common/components/SectionTitle/SectionTitle';
import CnnLogo from '../../../assets/imgs/logos/logos-news/1650481531-logo-cnn.png';
import ValInvesLogo from '../../../assets/imgs/logos/logos-news/1650481539-logo-valor-investe.webp';
import EstadLogo from '../../../assets/imgs/logos/logos-news/logo-estadao.webp';

const NewsSection = () => {
  return (
    <styled.Box>
        <styled.NewsSection id='news'>

          <SectionTitle>O que dizem sobre nós</SectionTitle>

          <img src={Divisor} alt="Divisor" />

          <styled.NewsCards>
            <styled.NewsCard>
              <styled.NewsImage src={CnnLogo} alt="News" />
              <styled.NewsDescription>“Rubbank recebe US$ 400 mi e se torna uma das 5 instituições mais valiosas da América Latina”</styled.NewsDescription>
              <styled.NewsLink href="#">Leia a matéria...</styled.NewsLink>
            </styled.NewsCard>

            <styled.NewsCard>
              <styled.NewsImage src={ValInvesLogo} alt="News" />
              <styled.NewsDescription>“Rubbank é a primeira instituição financeira do Brasil a zerar emissões de gás carbono”</styled.NewsDescription>
              <styled.NewsLink href="#">Leia a matéria...</styled.NewsLink>
            </styled.NewsCard>

            <styled.NewsCard>
              <styled.NewsImage src={EstadLogo} alt="News" />
              <styled.NewsDescription>“Número de downloads do Rubbank aumentou em 30,3% em outubro, totalizando 15 milhões”</styled.NewsDescription>
              <styled.NewsLink href="#">Leia a matéria...</styled.NewsLink>
            </styled.NewsCard>
          </styled.NewsCards>

        </styled.NewsSection>
      </styled.Box>
  );
}

export default NewsSection;
