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


export function akumaNumberDecision(inputValue, resultTexts) {
    if(akumaNumberCheck(inputValue, resultTexts)) {return true;}
    if(addOneDigit(inputValue, resultTexts, 0)) {return true;}
  //  if(multOneDigit(inputValue, resultText)) {return true;}
}

function akumaNumberCheck(number, resultTexts) {
    switch(number) {
        case akumaNumber:
            return true;

        case akumaNumberTriple:
            return true;

        case reverseAkumaNumber:
            resultTexts.push(reverseAkumaNumberText);
            return true;

        case reverseAkumaNUmberTriple:
            resultTexts.push(reverseAkumaNUmberTripleText);
            return true;

        case specialAkumaNUmber1:
            resultTexts.push(specialAkumaNUmber1Text);
            return true;

        case specialAkumaNUmber2:
            resultTexts.push(specialAkumaNUmber2Text);
            return true;

        default:
            console.log("seikou");
            return false;
    }
}

function addOneDigit(inputValue, resultTexts, calculationCount) {
    if ((parseInt(inputValue / 10) == 0) && (inputValue != akumaNumber || inputValue != reverseAkumaNumber)) {
        return false;
    }
    let calculationProcessNumber = numberSplitOneDigit(inputValue);
    let calculationResult = numberAddOneDigit(calculationProcessNumber);
    resultTexts[calculationCount] = calculationProcessTextCreate(calculationProcessNumber, calculationResult, "+");
    
    if(akumaNumberCheck(calculationResult, resultTexts)) { return true;}

    

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