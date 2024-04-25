import { useState } from "react";
import * as styled from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

interface FaqCardProps {
  question: string;
  answer: string;
}

const FaqCArd = ({ question, answer }: FaqCardProps) => {
  const [questionOpen, setQuestionOpen] = useState(false);

  const handleQuestionOpen = () => {
    setQuestionOpen(!questionOpen);
  }

  return (
    <styled.FaqCard>

      <styled.FaqQuestion onClick={handleQuestionOpen}>
        <styled.FaqQuestionContent>{question}</styled.FaqQuestionContent>
        <styled.FaqIcon>{!questionOpen ? <FontAwesomeIcon icon={faArrowDown} /> : <FontAwesomeIcon icon={faArrowUp} />}</styled.FaqIcon>
      </styled.FaqQuestion>

      {questionOpen &&
        <styled.FaqAnswer>
          {answer}
        </styled.FaqAnswer>
      }

    </styled.FaqCard>
  );
}

export default FaqCArd;
