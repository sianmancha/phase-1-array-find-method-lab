function superbowlWin(array) {
    let winningYear = array.find((array) => array.result === "W"
    )
    if (winningYear) {
        return winningYear.year;
    } 
}
superbowlWin(record);

