import LandingPageLayout from '../../components/layouts/landingPage/LandingPageLayout'
import HeaderLayout from '../../components/layouts/header/HeaderLayout'
import FooterLayout from '../../components/layouts/footer/FooterLayout'
import ArticleLayout from '../../components/layouts/article/ArticleLayout'
import AsideLayout from '../../components/layouts/aside/ArticleLayout'

import {
  MainContentWrapper,
  MainPane,
} from '../../components/layouts/landingPage/styles'

import SidePaneLayout from '../../components/layouts/sidePane/SidePaneLayout'

import HeaderContent from './headerContent/HeaderContent'
import FooterContent from './footerContent/FooterContent'
import SidePaneContent from './sidePaneContent/SidePaneContent'

function PageContent() {
  return (
    <>
      <SidePaneLayout>
        <SidePaneContent />
      </SidePaneLayout>
      <MainPane>
        <HeaderLayout>
          <HeaderContent />
        </HeaderLayout>

        <MainContentWrapper>
          <ArticleLayout>
            <p>Article Content</p>
          </ArticleLayout>
          <AsideLayout>
            <p>Aside Content</p>
          </AsideLayout>
        </MainContentWrapper>

        <FooterLayout>
          <FooterContent />
        </FooterLayout>
      </MainPane>
    </>
  )
}
const LandingPage = () => {
  return (
    <LandingPageLayout>
      <PageContent />
    </LandingPageLayout>
  )
}

export default LandingPage
