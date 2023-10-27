class Question {
    question;
    answerList;
    answer;
    money;

    constructor(question, answerList, answer, money) {
        this.question = question;
        this.answerList = answerList;
        this.answer = answer;
        this.money = money;
    }

    getQuestion() {
        return this.question;
    }

    getAnswerList() {
        return this.answerList;

    }

    getAnswer() {
        return this.answer;
    }

}