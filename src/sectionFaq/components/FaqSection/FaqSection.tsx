import SectionTitle from '../../../common/components/SectionTitle/SectionTitle';
import * as styled from './styles';
import Divisor from '../../../assets/imgs/divisor.svg';
import FaqCard from '../FaqCard/FaqCard';

import { useState } from 'react';

const FaqSection = () => {
  return (
    <styled.Box>
        <styled.FaqSection id='faq'>

          <SectionTitle>Perguntas Frequentes</SectionTitle>

          <img src={Divisor} alt="Divisor" />

          <styled.FaqCards>
            <FaqCard
              question="Quais tipos de transações poderei realizar através do aplicativo?"
              answer="Para abrir uma conta, basta acessar o nosso site e clicar em 'Abra sua conta'. Preencha os campos solicitados e siga as instruções."
            />

            <FaqCard
              question="Como posso entrar em contato com o suporte técnico se tiver problemas ou dúvidas?"
              answer="Para abrir uma conta, basta acessar o nosso site e clicar em 'Abra sua conta'. Preencha os campos solicitados e siga as instruções."
            />

            <FaqCard
              question="Quais medidas estão sendo tomadas para proteger meus dados pessoais e financeiros?"
              answer="Para abrir uma conta, basta acessar o nosso site e clicar em 'Abra sua conta'. Preencha os campos solicitados e siga as instruções."
            />

            <FaqCard
              question="Haverá taxas associadas ao uso do aplicativo?"
              answer="Para abrir uma conta, basta acessar o nosso site e clicar em 'Abra sua conta'. Preencha os campos solicitados e siga as instruções."
            />

          </styled.FaqCards>

          </styled.FaqSection>
      </styled.Box>
  );
}

export default FaqSection;
