"use strict";
//# sourceURL=main.js

 function deleteImg(obj) {
     
	console.log(obj.id);
    $.ajax({
    	url: "/" + obj.id,
        type: 'delete',
        success:function(result){
        	// 删除成功时,取出页面的该行元素
        	var parentNode = obj.parentNode;
        	var grandNode = parentNode.parentNode;
        	grandNode.removeChild(parentNode);
        	console.log("删除成功!");

        },
        error:function(){
        	console.log("删除失败!");
        }
    
    });

}