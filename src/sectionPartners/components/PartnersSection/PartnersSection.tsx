import SectionTitle from "../../../common/components/SectionTitle/SectionTitle";
import * as styled from "./styles";
import Divisor from "../../../assets/imgs/divisor.svg";
import Rubcube from "../../../assets/imgs/logos/logos-partners/Rubbank.svg";
import BankFac from "../../../assets/imgs/logos/logos-partners/logo-bank-factory-horizontal-color.svg";

const PartnersSection = () => {
  return (
    <styled.Background>
      <styled.Box>
        <styled.PartnersSection id="partners">
          <SectionTitle>Parceiros</SectionTitle>

          <img src={Divisor} alt="Divisor" />

          <styled.PartnersCards>
            <styled.PartnersCard>
              <styled.PartnersImage src={Rubcube} />
            </styled.PartnersCard>

            <styled.PartnersCard>
              <styled.PartnersImage src={BankFac} />
            </styled.PartnersCard>
          </styled.PartnersCards>

        </styled.PartnersSection>

      </styled.Box>
    </styled.Background>
  );
}

export default PartnersSection;
