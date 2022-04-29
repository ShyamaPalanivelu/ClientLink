import FinancialSummaryWidget1 from './FinancialSummaryWidget1'
export default {
  title: "Composites/FinancialSummaryWidget1",
 component: FinancialSummaryWidget1,
};

export const FinancialSummary = () => <FinancialSummaryWidget1/>;
FinancialSummary.story = {
  name: "FinancialSummary",
};