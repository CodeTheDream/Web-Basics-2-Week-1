
// Example Question 1: Write a function that squares two numbers and appends the value into the htmlTarget1 variable. Run your function on the right side of the answer 1 variable so that it outputs in your browswer. 

// this is your function called square. It takes a single parameter, number, and returns that values times itself.
const square = (number) => {
  return number * number
}

// this is your answer variable, on the right side we are running your square function and passing in a single arugment, the number 12.
const answer1 = square(12)
// here we are printing out the answer in the console so we can check it out. (Command + Shift + J on a mac)
console.log('answer1', answer1)

// This will be given to you for each question (for now). For each question. But here is how it works. we are setting the htmlTarget variable to be the result of an item in our DOM (the html) that has an id of 'a-1'. On the next line of code we are running a built in javascript function innerHTML and replacing the contents of whatever is inside of 'a-1' with the variable we previously declared "answer1"

const htmlTarget1 = document.getElementById('a-1')
htmlTarget1.innerHTML = answer1


// Question 2: Write a function that gives you the area of a triangle. Run your function on the right side of the answer 2 variable so that it outputs in your browswer. 

//create a function here called 'calculateTriangleArea' and give it the correct parameters to use and have it return the solution. Area of a triagnle is 1/2 length * width or 1/2 height * width


// set const answer2 = to your funciton and pass required arguments into your function
const answer2 = ""

const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2