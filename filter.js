let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}


let sorttBtn = document.querySelector('.what-we-offer__filter-menu').children;
let sorttItem = document.querySelector('.what-we-offer__item-container').children;

for(let i = 0; i < sorttBtn.length; i++){
    sorttBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sorttBtn.length; j++){
            sorttBtn[j].classList.remove('current');
        }

        this.classList.add('current');

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sorttItem.length; k++){
            sorttItem[k].classList.remove('active');
            sorttItem[k].classList.add('delete');

            if(sorttItem[k].getAttribute('data-item') == targetData || targetData == "one"){
                sorttItem[k].classList.remove('delete');
                sorttItem[k].classList.add('active');
            }
        }
    });
}