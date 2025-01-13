// Accordion

let initAccordionItems = (block) => {
    let accordion_items = block.querySelectorAll(".accordion");

    accordion_items.forEach(item => {
        let accordion_button = item.querySelector('.accordion--button')

        accordion_button.addEventListener("click", function(e){

            accordion_items.forEach(it => {

                it !== item ? it.classList.remove('is_open') : it.classList.toggle('is_open')

            });

        })
    })
}

initAccordionItems(document)