let myButtonOne = document.getElementById("one")
let myButtonTwo = document.getElementById("two")
let myButtonThree = document.getElementById("three")
let myButtonFour = document.getElementById("four")
let myButtonFive = document.getElementById("five")
let myButtonSix = document.getElementById("six")
let myButtonSeven = document.getElementById("seven")
let myButtonEight = document.getElementById("eight")
let myButtonNine = document.getElementById("nine")
let outcome = document.getElementById("outcome")

let finalOutcome = function() {
	xWins = 'X Wins!'
	oWins = 'O Wins!'
	if (((one === two) && (two === three) && (three === 'x')) ||
		((four === five) && (five === six) && (six === 'x')) || 
		((seven === eight) && (eight === nine) && (nine === 'x')) ||
		((one === four) && (four === seven) && (seven === 'x')) ||
		((two === five) && (five === eight) && (eight === 'x')) || 
		((three === six) && (six === nine) && (nine === 'x')) ||
		((one === five) && (five === nine) && (nine === 'x')) || 
		((three === five) && (five === seven) && (seven === 'x'))) {
		outcome.innerHTML = xWins
		disableButton(myButtonOne)
		disableButton(myButtonTwo)
		disableButton(myButtonThree)
		disableButton(myButtonFour)
		disableButton(myButtonFive)
		disableButton(myButtonSix)
		disableButton(myButtonSeven)
		disableButton(myButtonEight)
		disableButton(myButtonNine)
	} else if (((one === two) && (two === three) && (three === 'o')) ||
		((four === five) && (five === six) && (six === 'o')) || 
		((seven === eight) && (eight === nine) && (nine === 'o')) ||
		((one === four) && (four === seven) && (seven === 'o')) ||
		((two === five) && (five === eight) && (eight === 'o')) || 
		((three === six) && (six === nine) && (nine === 'o')) ||
		((one === five) && (five === nine) && (nine === 'o')) || 
		((three === five) && (five === seven) && (seven === 'o'))) {
		outcome.innerHTML = oWins
		disableButton(myButtonOne)
		disableButton(myButtonTwo)
		disableButton(myButtonThree)
		disableButton(myButtonFour)
		disableButton(myButtonFive)
		disableButton(myButtonSix)
		disableButton(myButtonSeven)
		disableButton(myButtonEight)
		disableButton(myButtonNine)
	}
}

let val = 'x'

let changeButtonOne = function() { 
	myButtonOne.innerHTML = val
	one = val
	if (val === 'x') {
		val = 'o'
	} else {
		val = 'x'
	}
	finalOutcome()
	disableButton(myButtonOne)
}

let changeButtonTwo = function() { 
	myButtonTwo.innerHTML = val
	two = val
	if (val === 'x') {
		val = 'o'
	} else {
		val = 'x'
	}
	finalOutcome()
	disableButton(myButtonTwo)
}

let changeButtonThree = function() { 
	myButtonThree.innerHTML = val
	three = val
	if (val === 'x') {
		val = 'o'
	} else {
		val = 'x'
	}
	finalOutcome()
	disableButton(myButtonThree)
}

let changeButtonFour = function() { 
	myButtonFour.innerHTML = val
	four = val
	if (val === 'x') {
		val = 'o'
	} else {
		val = 'x'
	}
	finalOutcome()
	disableButton(myButtonFour)
}

let changeButtonFive = function() { 
	myButtonFive.innerHTML = val
	five = val
	if (val === 'x') {
		val = 'o'
	} else {
		val = 'x'
	}
	finalOutcome()
	disableButton(myButtonFive)
}

let changeButtonSix = function() { 
	myButtonSix.innerHTML = val
	six = val
	if (val === 'x') {
		val = 'o'
	} else {
		val = 'x'
	}
	finalOutcome()
	disableButton(myButtonSix)
}

let changeButtonSeven = function() { 
	myButtonSeven.innerHTML = val
	seven = val
	if (val === 'x') {
		val = 'o'
	} else {
		val = 'x'
	}
	finalOutcome()
	disableButton(myButtonSeven)
}

let changeButtonEight = function() { 
	myButtonEight.innerHTML = val
	eight = val
	if (val === 'x') {
		val = 'o'
	} else {
		val = 'x'
	}
	finalOutcome()
	disableButton(myButtonEight)
}

let changeButtonNine = function() { 
	myButtonNine.innerHTML = val
	nine = val
	if (val === 'x') {
		val = 'o'
	} else {
		val = 'x'
	}
	finalOutcome()
	disableButton(myButtonNine)
}

let disableButton = function(btn) {
	document.getElementById(btn.id).disabled = true;
}













