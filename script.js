let input = document.getElementById('input')
input.addEventListener('change', (e) => {
    let value = e.target.value;
    if(input.validity.valid){
        document.getElementsByClassName('fill')[0].style.width = value + '%';
        document.getElementsByClassName('number')[0].innerHTML = value + '%';
        document.getElementsByClassName('wrong-value')[0].style.visibility = 'hidden';
        input.classList.remove('error');
        if(value === ''){
            document.getElementsByClassName('fill')[0].style.width = 0 + '%';
            document.getElementsByClassName('number')[0].innerHTML = 0 + '%';
            document.getElementsByClassName('wrong-value')[0].style.visibility = 'hidden';
        }
    }else{
        input.classList.add('error');
        document.getElementsByClassName('wrong-value')[0].style.visibility = 'visible';
    }
})