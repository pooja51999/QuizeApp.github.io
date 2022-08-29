const questions =[
    {
        'que': 'which of the following is the markup language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JAVASCRIPT',
        'd': 'PHP',
        'correct':'a'
    },
    {
        'que': 'what year was Javascript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct':'b'
    },
    {
        'que': 'what does CSS stands for?',
        'a': 'Hypertext Markup Languuage',
        'b': 'CasStyle cading Sheet',
        'c': 'Jasonn Object Notation',
        'd': 'None',
        'correct':'b'
    },

]
let index = 0;
let total = questions.length;
let right=0, wrong=0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');
 const data = questions[index];
const loadQuestion = () => {
    const data = questions[index];
    if(index === total){
        return endQuiz();
    }
    reset();
    console.log(data);
    quesBox.innerText = (index+1)+')'+data.que;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () =>{
    const ans = getAnswer();
    if(ans == data.correct){
        right++;

    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) =>{
            if(input.checked){
                answer = input.value;
                
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
           input.checked = false
            }
        
    )

}
const endQuiz = () => {
    document.getElementById("box").innerHTML =' <h3>Thank You For Playing The Quize</h3>'
}

//initial call
loadQuestion();



















