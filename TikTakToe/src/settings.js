class Settings {
    /**
     * @param {Object} params - Парметры игры.
     * @param {number} params.rowsCount - количество строк игрового поля.
     * @param {number} params.colsCount - количество колонок игрового поля.
     * @throws {Error} если переданы не верные настройки выбрасывается
     * соответствующая ошибка.
     */
    init(params) {
        let defaultParams = {
            phase: "X",
            mapValues: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ],};
        Object.assign(defaultParams, params);
        
        this.mapValues = defaultParams.mapValues;
        this.phase = defaultParams.phase;
    }
}