function calcAreaGrade(area){
    if(area == "A"){
        return 2;
    } else if(area == "B"){
        return 1;
    } else if(area == "C"){
        return 0.5;
    } else return 0;
}

function calcTypeGrade(type){
    switch(type){
        case 0:
            return 0;
        case 1:
            return 2.5;
        case 2:
            return 1.5;
        case 3:
            return 1;
        default: return 0;
    }
}

function calcTotalGrade(sub1,sub2,sub3,areaGrade,typeGrade){
    return sub1 + sub2 + sub3 + areaGrade + typeGrade;
}

function checkResult(sub1,sub2,sub3,standardGrade,totalGrade){
    if((sub1==0)||(sub2==0)||(sub3==0)){
        return false;
    } else {
        if(totalGrade >= standardGrade){
            return true;
        } else return false;
    }
}


function main(){
    /**
     * input: diem chuan, diem 3 mon, khu vuc, doi tuong
     * 
     * process:
     *      - tao bien: sub1, sub2, sub3, standard, area, type
     *      - khu vuc => diem khu vuc
     *      - doi tuong => diem doi tuong
     *      - tinh tong diem
     *      - kiem tra ket qua
     *      - in ket qua ra man hinh
     * 
     * output: tong so diem, ket qua
     */
    var sub1 = 10;
    var sub2 = 9;
    var sub3 = 8;
    var standard = 26;
    var area = "B";
    var type = 2;
    var areaScore = calcAreaGrade(area);
    var typeScore = calcTypeGrade(type);
    var totalScore = calcTotalGrade(sub1,sub2,sub3,areaScore,typeScore);
    console.log(totalScore);
    console.log(checkResult(sub1,sub2,sub3,standard,totalScore));
    var result = checkResult(sub1,sub2,sub3,standard,totalScore);
    if(result == true){
        console.log("Dau voi so diem la: ",totalScore);
    } else console.log("Rot voi so diem la: ",totalScore);
}
main();

