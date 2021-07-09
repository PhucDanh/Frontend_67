/**
 * PROJECT: Trắc nghiệm online
 *   1. Chức năng cơ bản:
 *      Hiện danh sách câu hỏi
 *      Chấm điểm
 *   2. Lên mockup
 *   3. Phân tích lớp đối tượng
 */

let questionList = [];

var fetchQuestion = () => {
    axios({
        url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
        method: "GET"
    }).then(function(result) {
        console.log(result);
        questionList = mapData(result.data);
        renderQuestion(questionList);
    }).catch(function(error) {
        console.log(error)
    })
}

const renderQuestion = (data) => {
    let content = "";
    for (let i in data) {
        content += data[i].render(+i + 1);
        // console.log(data[i]);
    }
    document.querySelector("#questions").innerHTML = content;
}

const mapData = (questionList) => {
    // const mappedData = [];

    // for (let item of questionList) {
    //     const {questionType, id, content, answers} = item;
    //     if(item.questionType === 1) {
    //         mappedData.push(new MultipleChoice(questionType, id, content, answers));
    //     } else {
    //         mappedData.push(new FillInBlank(questionType, id, content, answers));
    //     }
    // }
    // console.log(mappedData);

    const mappedData = questionList.map((item) => {
        const {questionType, id, content, answers} = item;  // Destructuring
        if(item.questionType === 1) {
            return new MultipleChoice(id, questionType, content, answers); 
        } else {
            return new FillInBlank(id, questionType, content, answers);
        }
    })

    return mappedData;
}

const handleSubmit = () => {
    let result = 0;
    for(let item of questionList) {
        if(item.checkExact()) {
            result++;
        }
    }
    alert("Số câu đúng là: " + result + "/" + questionList.length);
}

fetchQuestion();

// ---------- Demo map function ES6 ----------- //
// var a = ["Hieu", "Dung", "Tai"];
// var b = [];
// // => b = ["A Hieu", "A Dung", "A Tai"]
// b = a.map((item) => {return "A " + item});
// console.log(a);
// console.log(b);