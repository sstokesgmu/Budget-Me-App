//sources
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
//https://www.calculatorsoup.com/calculators/algebra/percentage-increase-calculator.php
//https://www.calculatorsoup.com/calculators/algebra/percentage-decrease-calculator.php
//https://www.appinspo.com/unifiedhr-withdraw-app-2
export const PERCENTAGE_CHANGE_INTERFACE = {INCREASE: 'increase',DECREASE: 'decrease', NO_CHANGE:'no change'}
export const FORMATTER = new Intl.NumberFormat('en-Us', 
    {style: 'currency', currency:'USD', minimumFractionDigits:0, maximumFractionDigits:2,}
)
export function percentageChange(start, current){
    start = start || 1; // This will set start to 1 only if start is falsy (which includes 0, null, undefined, false, NaN, and "").
    let percentage= {change:PERCENTAGE_CHANGE_INTERFACE.NO_CHANGE, amount:0}
    //TODO: Throw an error if the values aren't numbers
    if(current > start) //percentage increase
    {
        percentage.change = PERCENTAGE_CHANGE_INTERFACE.INCREASE;
        percentage.amount= ((current - start)/ Math.abs(start)) * 100;
    }
    else if(current < start ) //percentage decrease
    {
        percentage.change = PERCENTAGE_CHANGE_INTERFACE.DECREASE;
        percentage.amount = ((start - current)/Math.abs(start)) * 100;
    }
    return percentage;
}

export function calculateAmountDirection(amount, trans_type)
{
    return trans_type.toUpperCase() === "DEPOSIT" ? amount : -amount; 
}