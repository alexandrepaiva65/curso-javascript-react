import CardGame from "../../components/CardGame";

function BoardGame(amountCards){
    // const amountCards = 6;
    const $htmlCardGame = CardGame();
    const $htmlBoardGame = $htmlCardGame.repeat(amountCards);

    console.log($htmlBoardGame);

    return $htmlBoardGame;
}

export default BoardGame;