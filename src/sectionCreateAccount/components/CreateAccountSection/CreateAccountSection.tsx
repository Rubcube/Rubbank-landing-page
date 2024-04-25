import Button from '../../../common/components/Button/Button';
import * as styled from './styles';

const CreateAccountSection = () => {
  return (
    <styled.Background>
      <styled.BackgroundOpacity>
        <styled.Box>
          <styled.CreateAccountSection>
            <styled.CreateAccountTitle>
              Pare de perder tempo, e transforme sua vida financeira agora!
            </styled.CreateAccountTitle>

            <Button $width="222px" $height="62px">Abrir Conta</Button>

          </styled.CreateAccountSection>
        </styled.Box>
      </styled.BackgroundOpacity>
    </styled.Background>

  );
}

export default CreateAccountSection;
