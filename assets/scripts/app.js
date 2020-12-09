const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input fields
function getUserNumberInput(){
	return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, CalcNumber){
	const calcDescription = `${resultBeforeCalc} ${operator} ${CalcNumber}`
	outputResult(currentResult, calcDescription);
}

function add(){
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	let logEntries = [];
	
	currentResult += enteredNumber;
	createAndWriteOutput('+', initialResult,enteredNumber);
	
	const logEntry = {
		operation : 'ADD',
		prevResult : initialResult,
		number : enteredNumber,
		result : currentResult			
	};
	logEntries.push(logEntry);
	console.log(logEntry.operation);
	console.log(logEntries);
}

function subtract(){
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult -= enteredNumber;
	createAndWriteOutput('-', initialResult,enteredNumber);
}

function multiply(){
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult *= enteredNumber;
	createAndWriteOutput('*', initialResult,enteredNumber);
}

function divide(){
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult /= enteredNumber;
	createAndWriteOutput('/', initialResult,enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
