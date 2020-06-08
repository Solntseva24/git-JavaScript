//ждем пока все загрузится и запускаем

window.addEventListener('load', () => {
    const settings = new Settings();
    const status = new Status();
    const board = new Board();
    const game = new Game();

    settings.init({phase: 'X'});
    board.init(settings);
    game.init(status, board, settings);


    game.run();
});