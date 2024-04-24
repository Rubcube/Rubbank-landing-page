import * as styled from "./styles";
import Divisor from "../../assets/imgs/divisor.svg";
import ServiceItem from "./ServiceItem";
import Dollar from "../../assets/imgs/iconsServices/attach_money.svg";
import Support from "../../assets/imgs/iconsServices/live_help.svg";
import Allert from "../../assets/imgs/iconsServices/mark_chat_unread.svg";

const ServicesSection = () => {
  return (
    <styled.Box>
      <styled.ServicesSections>

        <styled.ServicesTitle>
          Nossos Serviços
        </styled.ServicesTitle>


        <img src={Divisor} alt="Divisor" />

        <styled.ServicesDescription>
            Com o Rubbank, o poder está literalmente em suas mãos.  Não espere mais para transformar sua relação com o dinheiro.
        </styled.ServicesDescription>

        <styled.ServicesItems>

          <ServiceItem

            icon={Dollar}

            title="Controle Total das suas Finanças"

            description="Gerencie suas contas, orçamentos e investimentos em um só lugar.
            Acompanhe suas despesas, receitas e metas financeiras com facilidade."

          />

          <ServiceItem

            icon={Support}

            title="Suporte Personalizado"

            description="Conte com nossa equipe especializada para responder suas dúvidas e  oferecer suporte técnico quando necessário. Estamos aqui para garantir  sua tranquilidade financeira."

          />

          <ServiceItem

            icon={Allert}

            title="Alertas Inteligentes"

            description="Fique por dentro das suas finanças com notificações personalizadas.  Receba alertas sobre saldos baixos, pagamentos pendentes e outras  atividades importantes."

          />

        </styled.ServicesItems>

      </styled.ServicesSections>
    </styled.Box>
  );
}

export default ServicesSection;
