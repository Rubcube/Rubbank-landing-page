import * as styled from "./styles";

interface ServiceItemProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceItem = ({ title, description, icon }: ServiceItemProps) => {
  return (
    <styled.ServicesItem>
      <styled.ServicesItemImg src={icon} alt="Icon" />
      <styled.ServicesItemTitle>{title}</styled.ServicesItemTitle>
      <styled.ServicesItemDescription>{description}</styled.ServicesItemDescription>
    </styled.ServicesItem>
  );
}

export default ServiceItem;
