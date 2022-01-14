const btns = document.querySelector('button'),
    overlay = document.querySelector('.overlay');

// btn.addEventListener('click', () => {
//     alert('click');
// });

// let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i ++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);               
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.array.forEach(Element => {
    Element.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});
