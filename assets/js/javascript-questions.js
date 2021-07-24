//Lists the JavaScript questions for the JavaScript Quiz
var questions = [
    {
        title: "If you type the following code in the console window, what result will you get?\
                3 > 2 > 1 === false;",
        choices: ["true", "false"],
        answer: "true"
    },
    {
        title: "JavaScript is a ___-side programming language.",
        choices: ["client", "server", "both", "none"],
        answer: "both"
    },
    {
        title: "Which of the following will write the message “Hello!” in an alert box?",
        choices:["alertBox(“Hello!”)", "alert(Hello!)", "msgAlert(“Hello!”)", "alert(“Hello!”)"],
        answer: "alert(“Hello!”)"
    },
    {
        title: "How do you find the minimum of x and y using JavaScript?",
        choices:["min(x,y)", "Math.min(x,y)", "Math.min(xy)", "min(xy)"],
        answer: "Math.min(x,y)"
    },
    {
        title: "Which is the correct “if” statement to execute if “x” is equal to 2?",
        choices: ["if(x 2)", "if(x = 2)", "if(x == 2)", "if(x != 2 )"],
        answer: "if(x == 2)"
    },
    {
        title: "Which preceeds the definition of a function in Javascript?",
        choices:["def","function", "var", "$"],
        answer: "function"
    },
    {
        title: "What will Number.NaN(name) return, if name = 'Name'?",
        choices:["true", "false", "name", "string"],
        answer: "false"
    },
    {
        title: "Which is the correct JavaScript syntax to alter the HTML text given below?\
                <p id=”greeting”>Hello World!</p>",
        choices:[
            "document.getElementById('greeting').innerHTML = 'Hello Planet!'",
            "document.getElementsById('greeting').innerText = 'Hello You!'",
            "document.getElementById(greeting).innerHTML = “Hello You!”",
            "document.getElementByTagName('p')[0].innerHTML = 'Hello Planet!'"
        ],
        answer: "document.getElementById('greeting').innerHTML = 'Hello Planet!'"
    },
    {
        title: "What is the result of the code: String(“Hello”) === “Hello”",
        choices:["true", "false", "SyntaxError", "ReferenceError"],
        answer:"true"
    },
    {
        title: "Which of the following statements will show a message that asks for user input in a popup window?",
        choices:["alert()", "prompt()", "confirm()", "message()"],
        answer: "prompt()"
    }
  ];