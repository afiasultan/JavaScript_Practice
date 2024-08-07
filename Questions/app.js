// Option 1: traversing the dom
/* 
const btns = document.querySelectorAll(".question-btn");
btns.forEach(function(btn) {

    btn.addEventListener("click", function(e) {

        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");

    });

});
*/

// Option 2: Using selectors inside element
const questions = document.querySelectorAll(".question");
questions.forEach(function(question) {

    const btn = question.querySelector(".question-btn");
    
    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            item.classList.remove("show-text");
        });
        question.classList.toggle("show-text");
    });


});