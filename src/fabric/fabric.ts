interface AbstractFactory {
    createSelect(): void,
    createMenu(): void
}

class GreenFactory implements AbstractFactory {
    public createSelect() {
        const select = document.createElement('select');
        select.style.border = '3px solid #89e042';

        for(let i = 0; i < 5; i += 1) {
            const option = document.createElement('option');
            option.style.color = '#89e042';

            option.value = 'Green option' + i;
            option.text = 'Green option' + i;

            select.add(option);
        }

        return select;
    }

    public createMenu() {
        const menu = document.createElement('div');
        const menuOptions = document.createElement('ul');

        menu.classList.add('menu');
        menu.innerText = 'hover me green';

        menuOptions.classList.add('menu--menu_options');
        menuOptions.style.backgroundColor = '#89e042';

        for(let i = 0; i < 5; i += 1) {
            const option = document.createElement('li');
            option.style.color = 'white';

            option.innerText = 'Menu item' + i;

            menuOptions.appendChild(option);
        }

        menu.appendChild(menuOptions);

        return menu;
    }
}

class RedFactory implements AbstractFactory {
    public createSelect() {
        const select = document.createElement('select');
        select.style.border = '3px solid rgb(240, 52, 52)';

        for(let i = 0; i < 5; i += 1) {
            const option = document.createElement('option');
            option.style.color = 'rgb(240, 52, 52)';

            option.value = 'Red option' + i;
            option.text = 'Red option' + i;

            select.appendChild(option);
        }

        return select;
    }

    public createMenu() {
        const menu = document.createElement('div');
        const menuOptions = document.createElement('ul');

        menu.classList.add('menu');
        menu.innerText = 'hover me red';

        menuOptions.classList.add('menu--menu_options');
        menuOptions.style.backgroundColor = 'rgb(240, 52, 52)';

        for(let i = 0; i < 5; i += 1) {
            const option = document.createElement('li');
            option.style.color = 'white';

            option.innerText = 'Menu item' + i;

            menuOptions.appendChild(option);
        }

        menu.appendChild(menuOptions);

        return menu;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    let block = document.getElementById('block2');
if(block) {
    console.log('block hello!1');
    block.appendChild(new RedFactory().createSelect());
    block.appendChild(new GreenFactory().createSelect());

    block.appendChild(new RedFactory().createMenu());
    block.appendChild(new GreenFactory().createMenu());
}
});