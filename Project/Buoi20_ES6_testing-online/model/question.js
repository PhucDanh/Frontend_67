class Question {
    constructor(id, type, content, answers) {
        this.id = id;
        this.questionType = type;
        this.content = content;
        this.answers = answers;
    }

    checkExact() {};
    render() {};
}

// const newQuestion = new Question(1, "1", "Hôm nay là thứ mấy", [{content: "Chủ Nhật"}, {content: "Thứ 2"}, {content: "Thứ 3"}, {content: "Thứ 4"}]);
// console.log(newQuestion);