const questionElems = document.querySelectorAll('.question');
const iconElems = document.querySelectorAll('.icon');
const answerElems = document.querySelectorAll('.answer');


questionElems.forEach((questionElem, index) => {

    questionElem.addEventListener('click', () => {

        const arrAnswerElems = [...answerElems];
        const ansIsOpening = arrAnswerElems.find(ans => ans.classList.contains('open'));
        const ansIndexIsOpening = arrAnswerElems.findIndex(ans => ans.classList.contains('open'));

        answerElems[index].classList.toggle('open');

        if (ansIsOpening && ansIndexIsOpening !== index) {
            ansIsOpening.classList.toggle('open');
            questionElems[ansIndexIsOpening].style.fontWeight = 400;
            iconElems[ansIndexIsOpening].style.transform = 'none';
        }

        if (answerElems[index].classList.contains('open')) {
            questionElems[index].style.fontWeight = 700;
            iconElems[index].style.transform = 'rotate(180deg)';
        } else {
            questionElems[index].style.fontWeight = 400;
            iconElems[index].style.transform = 'none';
        }


    });

});