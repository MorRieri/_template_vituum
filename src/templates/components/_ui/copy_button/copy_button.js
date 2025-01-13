// /* Кнопка скопировать номер */

const copyToClipboard = (content, el) => {
    if (window.isSecureContext && navigator.clipboard) {
        navigator.clipboard.writeText(content);
    } else {
        unsecuredCopyToClipboard(content, el);
    }
};

const unsecuredCopyToClipboard = (text, parentEl) => {
    const textArea = document.createElement("textarea");
    textArea.value=text;
    parentEl.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try{
        document.execCommand('copy')
    }
    catch(err){
        console.error('Unable to copy to clipboard',err)
    }
    parentEl.removeChild(textArea)
};

let activateCopyButtons = (block) => {
    let copy_buttons = block.querySelectorAll('.js_copy_button')

    copy_buttons.forEach(b =>{
        b.addEventListener('click', (e)=>{
            let text = b.dataset.copy
            copyToClipboard(text, e.currentTarget.parentNode)

            PopupManager.open('popup_for_notification', { title: b.dataset.notification_title, text: '', type: 'success', autoClose: 3000 })
            b.classList.add('is_copying')

            setTimeout(()=>{
                PopupManager.close('popup_for_notification')
                // b.classList.remove('is_copying')
            }, 1400)
        })
    })
}

activateCopyButtons(document)

