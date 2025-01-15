import {PopupsManager as PopupManager} from "../../../libs/0_PopupsManager/index"
console.log('popup_registration')

PopupManager.register('popup_1')
PopupManager.open('popup_1')
console.log(PopupManager)
console.log('popup')