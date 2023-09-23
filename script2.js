// script.js
const problem1 = document.getElementById('problem1');
const problem2 = document.getElementById('problem2');
const problem3 = document.getElementById('problem3');
const checkButton = document.getElementById('check-button');
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {
    const answer1 = parseInt(problem1.value);
    const answer2 = parseInt(problem2.value);
    const answer3 = parseInt(problem3.value);

    if (isNaN(answer1) || isNaN(answer2) || isNaN(answer3)) {
        result.textContent = 'Please enter valid numbers for all problems.';
    } else {
        const correct1 = answer1 === 5;
        const correct2 = answer2 === 8;
        const correct3 = answer3 === 10;

        const score = (correct1 + correct2 + correct3) * 33.33; // Calculate the score as a percentage

        if (score === 100) {
            result.textContent = 'Great job! You got all the answers right!';
        } else {
            result.textContent = `You got ${score}% of the answers correct. Keep practicing!`;
        }
    }
});
