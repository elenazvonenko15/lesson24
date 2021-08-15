function debounce(fn, timer) {
    let flag;
    return (...args) => {
        if (flag) return;
        flag = true;
        const promise = new Promise(resolve => setTimeout(resolve, timer));
        promise.then(() => {
            fn.apply(this, args);
            flag = false;
        });
    };
}

function show() {
    alert('Works');
}
const $element = document.querySelector('.btn');
const delay = 2000;
$element.addEventListener('click', debounce(show, delay));