function grade(score) {
    var scoresAndGrades = [
        {
            scoreLowerLimit : 0,
            scoreUpperLimit : 59,
            grade : 'D'
        },
        {
            scoreLowerLimit : 60,
            scoreUpperLimit : 79,
            grade : 'C'
        },
        {
            scoreLowerLimit : 80,
            scoreUpperLimit : 89,
            grade : 'B'
        },
        {
            scoreLowerLimit : 90,
            scoreUpperLimit : 100,
            grade : 'A'
        }
    ];
    var resultGrade = scoresAndGrades.find(function (scoreAndGrade) {
        return (score >= scoreAndGrade.scoreLowerLimit) && (score <= scoreAndGrade.scoreUpperLimit );
    });

    // scoresAndGrades.forEach(function (scoreAndGrade) {
    //     if (score >= scoreAndGrade.score){
    //         resultGrande = scoreAndGrade.grade;
    //     }
    // });
    return resultGrade.grade;
}