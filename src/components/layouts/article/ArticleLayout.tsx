import { FC } from 'react'
import { CardHeader } from '../../../composites/cardHeader/CardHeader'

import StyledArticle, { ArticleHeadingWrapper } from './styles'
import ChevronTopLogo from '../../../../src/assets/images/chevrontop.png'
interface childProps {
  children: React.ReactElement
}

const ArticleLayout: FC<childProps> = () => {
  return (
    <StyledArticle>
      Article Content
      {/* <ArticleHeadingWrapper>
        <CardHeader
          label={'Non-Retirement Accounts'}
          text={'Total:$2345667'}
          icon={ChevronTopLogo}
        ></CardHeader>
      </ArticleHeadingWrapper> */}
    </StyledArticle>
  )
}

export default ArticleLayout
