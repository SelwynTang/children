$(document).ready(function() {
    var $width = $(document).width();
    var $height = $(document).height();
    $(".mask").width($width); 
    $(".mask").height($height);

    function showMask(){     
        $(".mask").show();     
    }  
    //隐藏遮罩层  
    function hideMask(){   
      $(".mask").hide();    
    } 
    $(".btn").click(function(){
      showMask()
    })
    $(".btn01").click(function(){
      hideMask()
    })
})