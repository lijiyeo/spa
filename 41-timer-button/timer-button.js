$(function(){
    var $btn=$('input'),
    num=6,
    timer;
    function show() {
        
    }
    timer=setInterval(function(){
        num--;
        if(num===0){
            clearInterval(timer);
            $btn.val('同意');
            $btn.removeAttr('disabled');
        }
        else{
            $btn.val('同意('+num+'s)');
        }
    },1000);
    $btnAdd.click(function () {
        $timerButton.show('#mian');
    });
}
);