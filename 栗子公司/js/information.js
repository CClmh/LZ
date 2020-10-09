$(function ($) {
	function ones() {
        // 请求获取数据
    $.ajax({
        url: "json/information.json",
        type: "GET",
        dataType: "json",
        success: function (result) { //成功操作
            res = result.data;
            console.log(res);
            var tab = $("#infortable")[0];
            tab = tab.childNodes[1]; //tbody标签
 
            //   console.log(tab)
            for (var i = 0; i < res.length; i++) {
                //循环添加               
                var tr = $("<tr>"); //创建tr标签
                var td1 = $("<td>"); //创建td标签
                td1.text(res[i].name);
                var td2 = $("<td>"); //创建td标签
                td2.text(res[i].sex);
                var td3 = $("<td>"); //创建td标签
                td3.text(res[i].nation);
                var td4 = $("<td>"); //创建td标签
                td4.text(res[i].age);
                var td5 = $("<td>"); //创建td标签
                td5.text(res[i].education);
                var td6 = $("<td>"); //创建td标签
               	td6.text(res[i].marriage);
                var td7 = $("<td>"); //创建td标签
                td7.text(res[i].phone);
                tr.append(td1);
                tr.append(td2);
                tr.append(td3);
                tr.append(td4);
                tr.append(td5);
                tr.append(td6);
                tr.append(td7);
                tab.append(tr[0]);
                
            }
        },
        error: function () {
            console.log("请求失败！！")
            }
 
        });
 
    };
    ones();
 
})