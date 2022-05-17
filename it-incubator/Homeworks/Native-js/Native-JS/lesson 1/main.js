const sm = document.getElementById('small')

const onClickHandler1 = () => alert('yo!')
const onClickHandler3 = (e) => {
    if (e.ctrlKey){
        alert('yo!')
    }
}

sm.addEventListener('click', onClickHandler1)
sm.addEventListener('click', onClickHandler3)