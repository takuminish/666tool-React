const AkumaNumber = 6;
const reverseAkumaNumber = 9;
const KumaNumberTriple = 666;
const reverseAkumaNUmberTriple = 999;
const SpecialAkumaNUmber1 = 18;
const SpecialAkumaNUmber2 = 27;

export function akumaNumberDecision(inputValue, resultText) {
  //  if(akumaNumberCheck(inputValue)) { return true;}
    if(addOneDigit(inputValue, resultText)) {return true;}
  //  if(multOneDigit(inputValue, resultText)) {return true;}
}

function akumaNumberCheck(inputValue) {
    return true;
}

function addOneDigit(inputValue, resultTexts, calculationCount) {
    if ((parseInt(inputValue / 10) == 0) && (inputValue != AkumaNumber || inputValue != reverseAkumaNumber)) {
        return false;
    }
    let calculationProcessNumber = numberSplitOneDigit(inputValue);
    let calculationResult = numberAddOneDigit(calculationProcessNumber);
    resultTexts[calculationCount] = calculationProcessTextCreate(calculationProcessNumber, calculationResult, "+");

    
    return true;
}

function multOneDigit(inputValue, resultText) {
    return true;
}

function numberSplitOneDigit(inputValue) {
    return [...inputValue + ""].map(x => parseInt(x));
}

function numberAddOneDigit(calculationProcessNumber) {
    return calculationProcessNumber.reduce((a,b) => a+b);
}

function numberMultOneDigit(calculationProcessNumber) {
    return calculationProcessNumber.reduce((a,b) => a*b);
}

function calculationProcessTextCreate(calculationProcessNumber, calculationResult, operator ) {
    let resultText = "";

    calculationProcessNumber.forEach( number => {
        resultText += number;
        resultText += operator;
    });

    resultText = resultText.slice(0, -1);
    resultText += ("=" + calculationResult);

    return resultText;
}