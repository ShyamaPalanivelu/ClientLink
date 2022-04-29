import { FC } from 'react'
import {
  AdvisorWidgetContainer,
  GainLoserContainer,
  StyledAside,
} from './styles'
import AdvisorWidget from '../../../composites/advisorWidget/AdvisorWidget'
import SmallWidget from '../../../composites/smallWidget/SmallWidget'
import { GainLoserHead } from '../../../composites/gainLoserHead/GainLoserHead'
import { GainLoserTable } from '../../../composites/gainLoserTable/GainLoserTable'
interface childProps {
  children: React.ReactElement
}

const AsideLayout: FC<childProps> = () => {
  return (
    <StyledAside>
      <AdvisorWidgetContainer>
        <AdvisorWidget></AdvisorWidget>
        <SmallWidget></SmallWidget>
      </AdvisorWidgetContainer>
      <GainLoserContainer>
        <GainLoserHead></GainLoserHead>
        <GainLoserTable></GainLoserTable>
      </GainLoserContainer>
    </StyledAside>
  )
}

export default AsideLayout
