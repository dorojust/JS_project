reSet()

let score = 0;

function reSet(){
    const id = localStorage.getItem('id');
    document.getElementById(id).setAttribute('selected',"");
}




function deleteObj(id) {
    const obj = document.getElementById(id);
    obj.remove();
}

function dropText_1() {
    const LOLChampions = ["가렌","갈리오","갱플랭크","그라가스","그레이브즈","그웬","나르","나미","나서스","노틸러스","녹턴","누누와윌럼프","니달리","니코","다리우스","다이애나","드레이븐","라이즈","라칸","람머스","럭스","럼블","레넥톤","레오나","렉사이","렐","렝가","루시안","룰루","르블랑","리신","리븐","리산드라","릴리아","마스터이","마오카이","말자하","말파이트","모데카이저","모르가나","문도박사","미스포츈","바드","바루스","바이","베이가","베인","벨코즈","볼리베어","브라움","브랜드","블라디미르","블리츠크랭크","비에고","빅토르","뽀삐","사미라","사이온","사일러스","샤코","세나","세라핀","세주아니","세트","소나","소라카","쉔","쉬바나","스웨인","스카너","시비르","신짜오","신드라","신지드","쓰레쉬","아리","아무무","아우렐리온솔","아이번","아지르","아칼리","아크샨","아트록스","아펠리오스","알리스타","애니","애니비아","애쉬","야스오","에코","엘리스","오공","오른","오리아나","올라프","요네","요릭","우디르","우르곳","워윅","유미","이렐리아","이블린","이즈리얼","일라오이","자르반4세","자야","자이라","자크","잔나","잭스","제드","제라스","제이스","조이","직스","진","질리언","징크스","초가스","카르마","카밀","카사딘","카서스","카시오페아","카이사","카직스","카타리나","칼리스타","케넨","케이틀린","케인","케일","코그모","코르키","퀸","클레드","키아나","킨드레드","타릭","탈론","탈리야","탐켄치","트런들","트리스타나","트린다미어","트위스티드페이트","트위치","티모","파이크","판테온","피들스틱","피오라","피즈","하이머딩거","헤카림"]
    const item = LOLChampions[Math.floor(Math.random() * LOLChampions.length)];
    dropText(item,5);

    second = 1.8;
    setTimeout(dropText_1, second*1000);
}
function dropText_2() {
    const English = ["adore","envious","fascinated","fond","manifest","astonished","bewildered","embarrassed","hesitate","panic","startled","dismayed","provoke","abhorrent","annoying","frustrated","furious","hatred","humiliating","irritated","keen","mournful","lament","lonely","sorrowful","gloomy","grief","amused","gratifying","indulgent"]
    const item = English[Math.floor(Math.random() * English.length)];
    dropText(item,4)

    second = 2.5;
    setTimeout(dropText_2, second*1000);
}
function dropText_3() {
    const 사자성어 = ["이심전심","일심동체","혼연일체","혼연일치","유일무이","이구동성","일망타진","유비무환","유구무언","적자생존","설상가상","진퇴양난","호사다마","결초보은","일장춘몽","감언이설","감탄고토","견물생심","구사일생","고진감래","동병상련","비몽사몽","오리무중","어부지리","유유상종","일취월장",'일석이조','애지중지',"속수무책",'사면초가','자포자기',"죽마고우",'작심삼일']
    const item = 사자성어[Math.floor(Math.random() * 사자성어.length)];
    dropText(item,5)

    second = 1.8;
    setTimeout(dropText_3, second*1000);
}

function dropText(item, range) {
    const e = document.getElementById('gameBox');
    var rd = Math.floor(Math.random() * 900);

    e.insertAdjacentHTML('beforeend', '<div style="margin-left:' + rd + 'px;" id="' + item + '" class="marquee">' + item + '</div>');
    
    if ($('.marquee').length === range) {
        localStorage.setItem('score', score);
        window.location.href = 'faild.html';
    }
}



function judgeAnswer(){
    var ting = new Audio('pok.mp3');
    ting.volume = 0.5;
    var tlfvo = new Audio('faild.mp3');
    tlfvo.volume = 0.2;

    if (window.event.keyCode === 13){
        try {
            const input = document.getElementById('input').value;
            if(input === document.getElementById(input).id){
                ting.play();
                deleteObj(input);
                score += 1;
                console.log(score);
                document.getElementById('score').innerText = `Score: ${score}`;
            }
        }catch {
            tlfvo.play();
        }finally{
            document.getElementById('input').value = "";
        }
        
    }
}

function selectSubject(value) {
    localStorage.setItem('id', value)
    document.getElementById("input").style.visibility = "visible";
    document.getElementById("score").style.visibility = "visible";
    deleteObj("box2")
    if(value === "1"){
        dropText_1();
    }
    if(value === "2"){
        dropText_2();
    }
    if(value === "3"){
        dropText_3();
    }
}