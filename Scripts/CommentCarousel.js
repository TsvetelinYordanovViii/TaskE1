const nextCommentBtn = document.querySelector('.previous-comment');
const previousCommentBtn = document.querySelector('.next-comment');
nextCommentBtn.addEventListener('click', () => { moveComment('next'); });
previousCommentBtn.addEventListener('click', () => { moveComment('previous'); });

const moveComment = (direction) => {
    const current = document.querySelector('.comment-box.current');
    const previous = [document.querySelector('.comment-box.previous-1'), document.querySelector('.comment-box.previous-2')];
    const next = [document.querySelector('.comment-box.next-1'), document.querySelector('.comment-box.next-2')];

    if (direction === 'next') {
        swapClass(previous[1], 'previous-2', 'previous-1', direction);
        swapClass(previous[0], 'previous-1', 'current', direction);
        swapClass(current, 'current', 'next-1', direction);
        swapClass(next[0], 'next-1', 'next-2', direction);
        swapClass(next[1], 'next-2', 'previous-2', direction);
    }
    else if (direction === 'previous') {
        swapClass(previous[1], 'previous-2', 'next-2', direction);
        swapClass(previous[0], 'previous-1', 'previous-2', direction);
        swapClass(current, 'current', 'previous-1', direction);
        swapClass(next[0], 'next-1', 'current', direction);
        swapClass(next[1], 'next-2', 'next-1', direction);
    }
}

const swapClass = (item, replacedClass, replacingClass) => {
    item.classList.remove(replacedClass);
    item.classList.add(replacingClass);
};