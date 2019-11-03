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

/* 0からinputVlueまでの間で悪魔の数字に変換できる数の個数の頻度を数える
　 横軸はinputValue / 10の値とする

   return akumaNumberFrequency 悪魔の数字の出現頻度の連想配列のarray
          [
              { 
                  akumaNumberCount: 6の出現頻度,
                  akumaNumberTripleCount: 666の出現頻度,
                  otherCount: 悪魔の数字以外の出現頻度,
                  dx: グラフの横軸の値
              },
              ...
          ]
   params inputValue Formで入力した値
   params akumaNukberFrequency 悪魔の数字の頻度を格納する連想配列
*/
export function akumanumberFrequency(inputValue, akumaNukberFrequency) {

    let dx = parseInt(inputValue / 10);  // 入力した数値の1/10を折れ線グラフの横軸の単位とする
    let arrayPosition = 0;  

    for (let i = 0; i < inputValue; i++) {

        // 悪魔の数字の推移を求める必要があるため、一つ前の頻度の値を初期値とする
        if(i >= dx * arrayPosition) {
            let beforAkumaNumberCount = akumaNukberFrequency[arrayPosition]['akumaNumberCount'];
            let beforAkumaNumberTripleCount = akumaNukberFrequency[arrayPosition]['akumaNumberTripleCount'];
            let beforOtherCount = akumaNukberFrequency[arrayPosition]['otherCount'];
            arrayPosition++;
            akumaNukberFrequency.push({
                akumaNumberCount: beforAkumaNumberCount,
                akumaNumberTripleCount: beforAkumaNumberTripleCount,
                otherCount: beforOtherCount,
                dx: dx * arrayPosition
            });
        }

        switch(akumaNumberDecision(i, [])) {
            case akumaNumber:
                akumaNukberFrequency[arrayPosition]['akumaNumberCount']++;
                break;
            case akumaNumberTriple:
                akumaNukberFrequency[arrayPosition]['akumaNumberTripleCount']++;
                break;
            default:
                    akumaNukberFrequency[arrayPosition]['otherCount']++;
        }
    }

    return akumaNukberFrequency;
}

/* 入力値を悪魔の数字に変換する。引数のresultTextsには悪魔の数字への変換過程を格納する。
    return 6に変換できた場合 6
           666に変換できた場合 666
           変換できなかった場合 false
    params inputValue Formで入力した値
    params resultTexts　画面に表示する文字の配列 初期値 []　  

    実行例 inputValue = 12345の時
          returnする値 6
          resultTexts = [
              1+2+3+4+5=15,
              1+5=6
          ]
    となる
*/
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