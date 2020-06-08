/** Здесь будет хранится статус игры, например играем мы, завершили или остановлено. */
class Status {
    constructor() {
        this.setStatusPlaying();
    }

    /**
         * Проверка что мы "играем", что игра не закончена.
         * @returns {boolean} Вернет true, статус игры "играем", иначе false.
         */
        isStatusPlaying() {
            return this.status === 'playing';
        }

    /**
         * Ставит статус игры в "остановлена".
         */
        setStatusStopped() {
            this.status = 'stopped';
        }

        /**
         * Ставит статус игры в "остановлена".
         */
        setStatusPlaying() {
            this.status = 'playing';
        }
        

}