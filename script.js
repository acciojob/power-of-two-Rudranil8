const isPowerOfTwo = (number) => {
	if(number<=0){
		return false;
	}
	else{
		return (number&(number-1))===0;
	}
};

const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));
