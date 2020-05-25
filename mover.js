'use strict';

let mover = {
    /**
     * получает и отдает направление от пользователя
     * @returns {int} возвращаем направление, введенное пользователем
     */
    getDirection() {
      const avialableDirections = [1, 3, 7, 9];
      while (true) {
          let direction = parseInt(prompt('Введите число (1, 3, 7 или 9), куда вы хотите переместиться, "Отмена" для выхода.'));
          if (isNaN(direction)) {
              return null;
          }
          if (!avialableDirections.includes(direction)) {
              alert('Для перемещения необходимо ввести одно из чисел 1, 3, 7, или 9.');
              continue;
          }
          return direction;
      }
  },
    /**
     * Отдает следующую точку, в которой будет находиться пользователь после движения
     * @param {init} direction Направление движения игрока
     * @returns {{x: int, y: int}} Следующая позиция игрока
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch(direction) {
            case 1:
                if (player.y == 0 || player.x == 0) {
                    break;
                } else {
                    nextPosition.y--;
                    nextPosition.x--;
                    break;
                };
            case 3:
                if (player.y == 0 || player.x == config.colsCount - 1) {
                    break;
                } else {
                    nextPosition.y--;
                    nextPosition.x++;
                    break;
                }
            case 7:
                if (player.y == config.rowsCount - 1 || player.x == 0) {
                    break;
                } else {
                    nextPosition.x--;
                    nextPosition.y++;
                    break;
                }
            case 9:
                if (player.y == config.rowsCount - 1 || player.x == config.colsCount - 1) {
                    break;
                } else {
                    nextPosition.y++;
                    nextPosition.x++;
                    break;
                }
        }
        return nextPosition;
    }
};