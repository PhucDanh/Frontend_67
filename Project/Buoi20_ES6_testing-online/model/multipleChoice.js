class MultipleChoice extends Question {
    constructor(id, type, content, answers) {
        super(id, type, content, answers);
    }

    checkExact() {
        // 1. Check xem người dùng chọn ô input nào => id của đáp án đang chọn
        let answerId;
        const answerInputs = document.getElementsByClassName("answer-" + this.id);
        for(let answerInput of answerInputs) {
            if(answerInput.checked) {
                answerId = answerInput.value;
            }
        }
        // 2. Check người dùng có đang chọn hay ko, nếu ko chọn => false
        if(!answerId) {
            return false;
        }
        // 3. Dựa vào id lấy đc, tìm ra đối tượng đáp án trong danh sách đáp án => exact
        const foundedAnswer = this.answers.find((item) => {return item.id === answerId});
        return foundedAnswer.exact;
    };

    // Return đoạn html tương ứng của loại câu hỏi multiple choice
    render(index) {
        let answerHTML = "";
        for (let item of this.answers) {
            answerHTML += `
            <div>
                <input value="${item.id}" type="radio" class="answer-${this.id}" name="answer-${this.id}" />
                <label>${item.content}</label>
            </div>
            `
        }

        return `
            <h5> Câu hỏi ${index}: ${this.content} </h5>
            ${answerHTML}
        `
    }
}

// const newQuestion = new MultipleChoice(1, "1", "Hôm nay là thứ mấy", [{content: "Chủ Nhật"}, {content: "Thứ 2"}, {content: "Thứ 3"}, {content: "Thứ 4"}]);
// console.log(newQuestion);