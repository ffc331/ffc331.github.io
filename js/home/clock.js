let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"
];

function clock(){
    var date = new Date();
    document.getElementById("header-time-p").innerHTML =  month[date.getMonth()] + " " + preInt((date.getDate()),2) + " ｜ " + date.getFullYear();
    setTimeout(current_time,1000); //每秒呼叫一次功能: current_time()
    function current_time(){
        document.getElementById("header-time-p").innerHTML =  month[date.getMonth()] + " " + preInt((date.getDate()),2) + " ｜ " + date.getFullYear();
        setTimeout(current_time,1000); //每秒呼叫一次功能: current_time()
    }
}

function preInt(num, length){
    var i =(num +"").length;
    while(i++ < length) num = "0" +num;
    return num
}


clock();