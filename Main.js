let q1 = new Question("Tổng 10 số từ 1-10 bằng bao nhiêu?",["55", "60", "70", "75"],0,"200.000");
let q2 = new Question("1+1=?",["3", "2", "1", "5"],1,"400.000");
let q3 = new Question("Việt Nam có bao nhiêu đơn vị hành chính cấp tỉnh tính đến năm 2022?",["61", "62", "63", "64"],2,"600.000");
let q4 = new Question("Vua Quang Trung họ là gì?",["Nguyễn", "Trần", "Lê","Hồ"],3,"800.000");
let q5 = new Question("Năm nào sau đây không phải là năm nhuận?",[2024,1904,2000,1900],3,"1.000.000");
let q6 = new Question("Ngày sinh của Bác Hồ là ngày bao nhiêu?",['19/05/1890','19/06/1890','15/09/1880','16/05/1880'],0,'1.500.000')
let q7 = new Question("Quốc gia vạn đảo ở Đông Nam Á là quốc gia nào?",['Malaysia','Indonesia','Philipines','Laos'],1,'2.500.000');
let q8 = new Question("Câu lệnh nào sau đây để dừng và thoát khỏi hàm?",['break;','back;','return;','exit;'],2,'4.000.000');
let q9 = new Question("Đà Lạt thuộc tỉnh nào?",['Nha Trang','Quảng Ngãi','Quảng Bình','Lâm Đồng'],3,'6.000.000');
let q10 = new Question("Hiện tại CR7 đang đá cho đội bóng nào?",['Al Nassr','MU','Barca','Việt Nam'],0,'10.000.000');
let M = new Management();

M.add(q1);
M.add(q2);
M.add(q3);
M.add(q4);
M.add(q5);
M.add(q6);
M.add(q7);
M.add(q8);
M.add(q9);
M.add(q10);
let index = 0;
let win = "<img src='data:image/jpeg;base64,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'>"
let lose = "<img src='https://i.pinimg.com/236x/6d/5f/21/6d5f212f90b1036192f90249f4af796c--sticker.jpg'>"
let timeout;


let time = setInterval(() => {
    document.getElementById('timeCountDown').innerHTML = timeout + " seconds";
    timeout--;
    if (timeout < 0) {
        clearInterval(time);
        end();
    }
    document.getElementById('vol').value -= 1;
    if (timeout<10) {
        document.getElementById("timeCountDown").style.animation = "hi 1000ms infinite";

    } else {
        document.getElementById("timeCountDown").style.animation = "hi 100ms";
    }
    }, 1000)


displayQuestions(M.getArr(0));
function displayQuestions(question) {
    timeout=30;
    document.getElementById('vol').max = timeout;
    document.getElementById('vol').value = timeout;
    document.getElementById('question').innerHTML = M.arr[index].getQuestion();
    for (let i=0; i<question.getAnswerList().length; i++) {
        document.getElementById("answer_"+(i+1)).innerHTML = `<label><button onclick='check(${i})' style="width: 200px; height: 30px; background-color: blue; color:white; border-radius: 15px" onmouseover="changeBackgroundBtnHover(this)" onmouseout="changeBackgroundBtnActive(this)">` + question.getAnswerList()[i] + "</button></<label>";
    }

}
function check(i) {
    if (i == M.getArr(index).getAnswer()) {
        document.getElementById("output").innerHTML = "Cau tra loi chinh xac";
        document.getElementById("table3-row-" +(index+1)).style.backgroundColor = "green";
        document.getElementById("table3-row-" +(index+1)).style.color = "white";
        index++;
        if (index<M.totalQuestions()) {
            document.getElementById("output").innerHTML = "";
            displayQuestions(M.getArr(index));
        } else {
            end();
        }
    } else {
        end();
    }
}
function end() {
    if (index < M.totalQuestions()) {
        clearInterval(time);
        document.getElementById("output").innerHTML = lose + "<br>"+"<p style='font-size: 30px; background: burlywood'>Trò chơi kết thúc</p> " + "<button onclick='restart()' style='width: 150px; height: 30px; font-size: 20px'>Choi lai</button>";
        for (let i=0; i<M.getArr(index).getAnswerList().length; i++) {
            document.getElementById("answer_"+(i+1)).innerHTML = `<button style="width: 200px; height: 30px; background-color: blue; color:white; border-radius: 15px" onmouseover="changeBackgroundBtnHover(this)" onmouseout="changeBackgroundBtnActive(this)">` + M.getArr(index).getAnswerList()[i] + "</button>";
        }
    } else if (index == M.totalQuestions()){
        clearInterval(time);
        document.getElementById("table3-row-" +(index)).style.backgroundColor = "yellow";
        document.getElementById("table3-row-" +(index)).style.color = "red";
        document.getElementById("output").innerHTML = win + "<br>" + "<p style='font-size: 30px; background: burlywood'> Chuc mung ban da tro thanh trieu phu </p>";
    }
}

// function next() {
//     if (index<M.totalQuestions()) {
//         document.getElementById("output").innerHTML = "";
//         displayQuestions(M.getArr(index));
//     } else {
//         end();
//     }
// }

function changeBackgroundBtnHover(btn) {
    btn.style.backgroundColor = "red";
}
function changeBackgroundBtnActive(btn) {
    btn.style.backgroundColor = "blue";
}

function disableButton(btn) {
    document.getElementsByClassName(btn).disabled = true;
}
function unDisableButton(btn) {
    document.getElementsByClassName(btn).disabled = false;
}
function restart() {
    location.replace("Start.html");
}