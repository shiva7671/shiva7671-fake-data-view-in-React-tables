import {HomeContainer,HeadingContainer,HeadingName} from "./HomeStyles.js"
import HeaderSection from "../HeaderSection/HeaderSection.js"
import FooterSection from "../FooterSection/FooterSection.js"

const HomeRoute=()=>{
  return(
    <HomeContainer>
      <HeaderSection/>
      <HeadingContainer>
        <HeadingName>Varalaxmi Seeds, Pesticides & Fertilizers</HeadingName>
      </HeadingContainer>
      <FooterSection />
    </HomeContainer>

  )
}

export default HomeRoute
