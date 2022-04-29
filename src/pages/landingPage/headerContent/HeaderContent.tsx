import {
  RootContainer,
  StockWidgetWrapper,
  PagingHeadingWrapper,
  SummaryWidgetPanel,
} from './styles'
import FinancialSummaryWidget1 from '../../../composites/financialSummaryWidget1/FinancialSummaryWidget1'
import FinancialSummaryWidget2 from '../../../composites/financialSummaryWidget2/FinancialSummaryWidget2'
import FinancialSummaryWidget3 from '../../../composites/financialSummaryWidget3/FinancialSummaryWidget3'
import FinancialSummaryWidget4 from '../../../composites/financialSummaryWidget4/FinancialSummaryWidget4'

const HeaderContent = () => {
  return (
    <RootContainer>
      <StockWidgetWrapper>Stock Widget</StockWidgetWrapper>
      <PagingHeadingWrapper>
        <h2>Good Morning! Heather Johnson</h2>
        <div>Your Household Summary</div>
      </PagingHeadingWrapper>
      <SummaryWidgetPanel>
        {/* <div>Financial Summary Widget</div>
        <div>Financial Summary Widget</div>
        <div>Financial Summary Widget</div>
        <div>Financial Summary Widget</div> */}
        <FinancialSummaryWidget1></FinancialSummaryWidget1>
        <FinancialSummaryWidget2></FinancialSummaryWidget2>
        <FinancialSummaryWidget3></FinancialSummaryWidget3>
        <FinancialSummaryWidget4></FinancialSummaryWidget4>

      </SummaryWidgetPanel>
    </RootContainer>
  )
}

export default HeaderContent