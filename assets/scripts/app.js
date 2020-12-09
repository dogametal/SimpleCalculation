const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
// Gets input from input fields
function getUserNumberInput(){
	return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, CalcNumber){
	const calcDescription = `${resultBeforeCalc} ${operator} ${CalcNumber}`
	outputResult(currentResult, calcDescription);
}

function writeLog(
	operationIdentifier,
	prevResult,
	operationNumber,
 	newResult)	{

	const logEntry = {
			operation : operationIdentifier,
			prevResult : prevResult,
			number : operationNumber,
			result : newResult			
		};
		logEntries.push(logEntry);
		console.log(logEntry.operation);
		console.log(logEntries);
	
}

function add(){
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
		
	currentResult += enteredNumber;
	createAndWriteOutput('+', initialResult,enteredNumber);
	writeLog('ADD', initialResult, enteredNumber, currentResult);
	
}

function subtract(){
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult -= enteredNumber;
	createAndWriteOutput('-', initialResult,enteredNumber);
	writeLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply(){
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult *= enteredNumber;
	createAndWriteOutput('*', initialResult,enteredNumber);
	writeLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide(){
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult /= enteredNumber;
	createAndWriteOutput('/', initialResult,enteredNumber);
	writeLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
