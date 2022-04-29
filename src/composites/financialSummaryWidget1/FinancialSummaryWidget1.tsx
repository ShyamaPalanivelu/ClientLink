
import Label from '../../components/label/Label'
import {
  WholeWidget,
  FirstLabelComponent,
  SecondLabelComponent,
} from './styles'

export const FinancialSummaryWidget1 = () => {
  return (
    
    <WholeWidget>
      <FirstLabelComponent>
        < Label
          fontSize={'16px'}
          fontStyle={'normal'}
          fontWeight={400}
          lineHeight={'24px'}
          label={'Total HouseHold Value'}
          fontFamily={'SourceSansProRegular'}
        />
      </FirstLabelComponent>

      {/* {Styling for second element} */}
      <SecondLabelComponent>
        <Label
          fontSize={'26px'}
          fontStyle={'normal'}
          fontWeight={700}
          lineHeight={'48px'}
          label={'$1,129,924.42'}
          fontFamily={'SourceSansProBold'}
        />
      </SecondLabelComponent>
    </WholeWidget>
  )
}
export default FinancialSummaryWidget1
