document.addEventListener('DOMContentLoaded', function() {
    const buttons = this.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(bot) {
            const abaAlvo = bot.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            const buttonTarget = document.querySelector(`[data-tab-button=${abaAlvo}]`)
            hide();
            hideButtonMark();
            aba.classList.add('shows__list--is-active');
            buttonTarget.classList.add('shows__tabs__button--is-active')
        })
    }

function hide() {
    const ContainerTabs = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < ContainerTabs.length; i++) {
        ContainerTabs[i].classList.remove('shows__list--is-active')
    }
    }

function hideButtonMark() {
    const buttonMark = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttonMark.length; i++) {
        buttonMark[i].classList.remove('shows__tabs__button--is-active')
    };
}
});