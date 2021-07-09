class FillInBlank extends Question {
    constructor(id, type, content, answers) {
        super(id, type, content, answers);
    }

    checkExact() {
        let answerInput = document.getElementById("answer-" + this.id).value;
        return answerInput.toLowerCase() === this.answers[0].content.toLowerCase();
    };

    render(index) {
        return `
            <div>
                <h3>Câu hỏi ${index}: ${this.content} </h3>
                <input id="answer-${this.id}"/>
            </div>
        `
    }
}