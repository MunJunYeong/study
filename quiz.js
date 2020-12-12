const question = [
    {
        quest : '고래상어는 고래이다',
        answer : false ,
        score : 7,
    },
    {
        quest : '지구는 둥글다',
        answer : true ,
        score : 10,
    },
    {
        quest : '서울은 대한민국의 수도이다',
        answer : true ,
        score : 5,
    },
    {
        quest : '세상에서 중국이 인구가 제일 많다',
        answer : true ,
        score : 5,
    },
    ]

    let totalScore = 0;
    let questIndex = 0;
    let message = document.getElementById('inner');
    let contents = document.getElementById('contents');
    let questWrap = document.getElementById('questWrap');
    let wrongAnwer = [];

    function render(index){
        if(index >= question.length) {
            resultRender();
            return;
        }
        questRender(index);
    }

    function resultRender(){
        const questContent = document.getElementById('questContent');
        questContent.remove();
         const pTag = document.createElement('p');
            const testObj = document.createTextNode(`오답노트`);
            pTag.append(testObj);
            contents.append(pTag);
        for(let i=0; i< wrongAnwer.length; i++){
            const pTag = document.createElement('p');
            const testObj = document.createTextNode(`문제 : ${wrongAnwer[i].quest}, 점수 : ${wrongAnwer[i].score}`);
            pTag.append(testObj);
            contents.append(pTag);
        }
        const pTag2 = document.createElement('p');
            const testObj2 = document.createTextNode(`총점: ${totalScore}`);
            pTag2.append(testObj2);
            contents.append(pTag2);
        console.log(wrongAnwer);
        console.log(totalScore);
    }
    function questRender(index) {
        if(questWrap.children[0]) questWrap.children[0].remove(); 
        const pTag = document.createElement('p');
        const testObj = document.createTextNode(`문제 : ${question[index].quest}, 점수 : ${question[index].score}`);
        pTag.append(testObj);
        questWrap.append(pTag);
    }

    function clickEvent(event){
        if(questIndex >= question.length) return;
        if(question[questIndex].answer === event) {
            totalScore += question[questIndex].score;
            message.innerHTML = '정답입니다.'+ totalScore
            
        } else {
            wrongAnwer.push(question[questIndex]);
            message.innerHTML = '오답입니다.'
        }
        
        questIndex += 1;
        render(questIndex);

    }

    render(questIndex);



