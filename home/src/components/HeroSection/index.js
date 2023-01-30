import React ,{useState} from 'react'
import Image from '../../images/img1.png'
import { HeroContainer,ImageBg, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }


  return (
    <HeroContainer>
        <HeroBg>
            <ImageBg autoPlay loop muted src={Image} type='image/png' />
        </HeroBg> 
        <HeroContent>
          <HeroH1>Virtual Banking mode easy</HeroH1>
          <HeroP>
            Sign up for new account today and receive
          </HeroP>
          <HeroBtnWrapper>
            <Button to="connexion" onMouseEnter={onHover} onMouseLeave={onHover}
            primary= "true"
            dark="true"
            >
              Get started {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
