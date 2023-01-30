import React from 'react';
import Icon1 from '../../images/imgs1.png';
import Icon2 from '../../images/imgs2.png';
import Icon3 from '../../images/imgs3.png';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesH2, ServicesP, ServicesIcon } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Catégories</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Primaire</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Collège</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Lycée</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services