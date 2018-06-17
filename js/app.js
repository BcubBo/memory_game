/*
 * 创建一个包含所有卡片的数组
 */


/*
 * 显示页面上的卡片
 *   - 使用下面提供的 "shuffle" 方法对数组中的卡片进行洗牌
 *   - 循环遍历每张卡片，创建其 HTML
 *   - 将每张卡的 HTML 添加到页面
 */
let tempMatchingBox = [];
let matchingBox = [];
let mark = 0;
// 洗牌函数来自于 http://stackoverflow.com/a/2450976
//随机图片数组
let arrayPics = ['fa-diamond','fa-diamond','fa-paper-plane-o','fa-paper-plane-o','fa-anchor','fa-anchor','fa-bolt','fa-bolt','fa-cube','fa-cube','fa-leaf','fa-leaf','fa-bomb','fa-bomb','fa-bicycle','fa-bicycle'];
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
//需要保证有16个方格而且只有八件图表且不重复，或者是直接随机的给出图片的位置
//所有的li需要添加点击事件,点击之后显示图片，并更改class属性值为，动态添加属性
function allLiClick(){
    //调用随机生成的方法进行图标的随机生成
    let randompics = shuffle(arrayPics);
    let allLi = $(".card");
    console.log("Click Events add !");
    console.log("The length of li is "+allLi.length);
    //添加点击事件成功后，进行匹配判定。
    //如果不匹配进行关闭操作，如果匹配就显示
    console.log(allLi);
    allLi.each(function(){
        console.log("进入jquery each循环")
        $(this).on('click',function(){
            $(this).addClass("open show");
            //添加标示关键字
            console.log($(this).find("i").attr("class"));
            //直接在此处进行判断传入参数即可，判断逻辑在下放给出
        });
    });
    //随机数生成完成
    for(let i = 0;i<randompics.length;i++){
        console.log("li循环后："+allLi[i]);
        $(allLi[i]).find("i").attr("class",("fa "+randompics[i]));
    };

};


//匹配函数，什么时候判断？
//应该含有相同的属性的函数
//还应有计数机制，记录已经匹配的卡牌数为多少，具体实现就是数字8为全匹配告知获胜
//当已经匹配后要清除点击事件
//使用双重数组的形式存储已经匹配的卡片
//循环遍历临时数组数据进行匹配判定

//计数标示，只有click点击时进行存储，匹配后进行清除防止重复，进行取余操作来进行卡片匹配，决定采用此方法，在重新生成和刷新操作后要记得清除标记。或者只存储1/2作为标示
//不可行。还是增长计数。保证单数计数始终和偶数计数进行匹配操作

var matching = function(){
    let iclass = $(this).find("i").attr("class");


};
//匹配后怎么办，不匹配后怎么办

var ifmatch = function(){

};
var ifnotmatch = function(){

};

//获得的星星数
var stars = function(){


};
//计数器
var  counting = function(){
    mark++;
};






/*
 * 设置一张卡片的事件监听器。 如果该卡片被点击：
 *  - 显示卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
 *  - 将卡片添加到状态为 “open” 的 *数组* 中（将这个功能放在你从这个函数中调用的另一个函数中）
 *  - 如果数组中已有另一张卡，请检查两张卡片是否匹配
 *    + 如果卡片匹配，将卡片锁定为 "open" 状态（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 如果卡片不匹配，请将卡片从数组中移除并隐藏卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 增加移动计数器并将其显示在页面上（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 如果所有卡都匹配，则显示带有最终分数的消息（将这个功能放在你从这个函数中调用的另一个函数中）
 */
