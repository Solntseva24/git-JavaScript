class Board {
    constructor() {
        this.gameTableElement = document.getElementById("game");
    }

    /**
     * Метод получает другие игровые объекты, которые нужны ему
     * для работы.
     * @param {Settings} settings объект настроек.
     */
    init(settings) {
        this.settings = settings;
    
    }

    /**
     * Вывод ячеек в html.
     */
    renderMap() {
        for (let row = 0; row < 3; row++) {
            const tr = document.createElement('tr');
            this.gameTableElement.appendChild(tr);
            for (let col = 0; col < 3; col++) {
                let td = document.createElement('td');
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                tr.appendChild(td);
            }
        }
    }

    /**
     * Заполняет ячейку в которую кликнул пользователь в событии event.
     * @param {Event} event
     * @param {HTMLElement} event.target
     */
    fillCell(event) {
        // Получаем строку и колонку куда кликнули.
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        // Заполняем ячейку и ставим значение в массиве, в свойстве mapValues.
        this.settings.mapValues[row][col] = this.settings.phase;
        event.target.textContent = this.settings.phase;
    }

    /**
     * Меняет фигуру (крестик или нолик).
     */
    togglePhase() {
        this.settings.phase = this.settings.phase === 'X' ? '0' : 'X';
    }
}    