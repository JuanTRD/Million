class Management {
    arr;
    constructor(arrQuestions) {
        this.arr = [];
    }
    add(question) {
        this.arr.push(question);
    }
    totalQuestions() {
        return this.arr.length;
    }
    getArr(i) {
        return this.arr[i];
    }

}