function grade(score) {
    var scoresAndGrades = [
        {
            scoreLowerLimit : 0,
            scoreUpperLimit : 60,
            grade : 'D'
        },
        {
            scoreLowerLimit : 60,
            scoreUpperLimit : 80,
            grade : 'C'
        },
        {
            scoreLowerLimit : 80,
            scoreUpperLimit : 90,
            grade : 'B'
        },
        {
            scoreLowerLimit : 90,
            scoreUpperLimit : Infinity,
            grade : 'A'
        }
    ];
    var resultGrade = scoresAndGrades.find(function (scoreAndGrade) {
        return (score >= scoreAndGrade.scoreLowerLimit) && (score < scoreAndGrade.scoreUpperLimit );
    });

    return resultGrade.grade;
}