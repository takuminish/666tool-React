const akumaNumber = 6;
const reverseAkumaNumber = 9;
const akumaNumberTriple = 666;
const reverseAkumaNUmberTriple = 999;
const specialAkumaNUmber1 = 18;
const specialAkumaNUmber2 = 27;
const reverseAkumaNumberText = "9を反転させると6";
const reverseAkumaNUmberTripleText = "999を反転させると666"
const specialAkumaNUmber1Text = "18は6 + 6 + 6";
const specialAkumaNUmber2Text = "27は9 + 9 + 9";
const addOperator = "+";
const multOperator = "×";

export function akumaNumberDecision(inputValue, resultTexts) {
    if (isNaN(inputValue)) {return false;}
    let checkAkumaNumber = akumaNumberCheck(inputValue, resultTexts);
    if(checkAkumaNumber !== false) {return checkAkumaNumber;}
    checkAkumaNumber = calculationOneDigit(inputValue, resultTexts, 0, addOperator);
    if(checkAkumaNumber !== false) { return checkAkumaNumber;}

    checkAkumaNumber = calculationOneDigit(inputValue, resultTexts, 0, multOperator);
    if(checkAkumaNumber !== false) { return checkAkumaNumber;}

    return false;
}

function akumaNumberCheck(number, resultTexts) {
    number = reverseAndSpecialAkumaNumberCheck(number, resultTexts);

    switch(number) {
        case akumaNumber:
            return akumaNumber;

        case akumaNumberTriple:
            return akumaNumberTriple;

        default:
            return false;
    }
}

function reverseAndSpecialAkumaNumberCheck(number, resultTexts) {
    switch(number) {
        case reverseAkumaNumber:
                resultTexts.push(reverseAkumaNumberText);
                return akumaNumber;
    
            case reverseAkumaNUmberTriple:
                resultTexts.push(reverseAkumaNUmberTripleText);
                return akumaNumberTriple;
    
            case specialAkumaNUmber1:
                resultTexts.push(specialAkumaNUmber1Text);
                return akumaNumberTriple;
    
            case specialAkumaNUmber2:
                resultTexts.push(specialAkumaNUmber2Text);
                return akumaNumberTriple;
    
            default:
                return number;
    }
}

function calculationOneDigit(inputValue, resultTexts, calculationCount, operator) {
    let checkAkumaNumber = akumaNumberCheck(inputValue, resultTexts);
    if(checkAkumaNumber !== false) { return checkAkumaNumber;}

    if (inputValue <= 10) { return false; }

    let calculationProcessNumber = numberSplitOneDigit(inputValue);
    let calculationResult = 0;
    switch(operator) {
        case addOperator:
            calculationResult = numberAddOneDigit(calculationProcessNumber);
            break;
        case multOperator:
            calculationResult = numberMultOneDigit(calculationProcessNumber);
            break;
    }

    resultTexts[calculationCount] = calculationProcessTextCreate(calculationProcessNumber, calculationResult, operator);

    checkAkumaNumber = calculationOneDigit(calculationResult, resultTexts, calculationCount+1, addOperator);
    if(checkAkumaNumber !== false) { return checkAkumaNumber;}

    checkAkumaNumber = calculationOneDigit(calculationResult, resultTexts, calculationCount+1, multOperator);
    if(checkAkumaNumber !== false) { return checkAkumaNumber;}
    
    resultTexts.splice(calculationCount,1);
    return false;
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