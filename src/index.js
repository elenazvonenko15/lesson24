function debounce(fn, timer) {
    let flag = false;
    return (...args) => {
        if (flag) return;
        new Promise(resolve => setTimeout(resolve, timer))
            .then(() => {
                fn.apply(this, args);
                flag = false;
            });

        flag = true;
    };
}

function show() {
    alert('Works');
}
const $element = document.querySelector('.btn');
const delay = 2000;
$element.addEventListener('click', debounce(show, delay));