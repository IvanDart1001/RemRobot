$(document).ready(function () {
    $('#chat').bind('keypress', function (event) {
        if (event.keyCode == "13") {
            replyX();
        }
    });
});

function replyX() {
    var strX = $("#chat").val();
    var mBH1 = $("#msgBOX").height();
    var mBDH1 = $("#msgDeco").offset();
    var Vurl = "";
    $.ajax({
        url:"http://www.tuling123.com/openapi/api",
        type: "POST",
        datatype:"JSON",
        data:{key:"b846dd897d6d4d2fbbfbd8b2cf44736c",info:strX},
        success:function(returndata){
            $("#TRUEmsgBOX").html(returndata.text);
            var mBH2 = $("#TRUEmsgBOX").height();
            $("#msgBOX").animate({ height: mBH2 });
            var mBDH2 = mBDH1.top + mBH2 - mBH1;
            $("#msgDeco").animate({ top: mBDH2 });
            var tok = "24.1306e1b1c9c6ac5e12418c0b46283aee.2592000.1484458518.282335-8579528";
            //var tok = "";
            var lan = "zh";
            var cuid = "30-3A-64-6E-99-2F"
            var ctp = "1"
            var Vword = $("#TRUEmsgBOX")[0].innerHTML;
            //getTOKEN();
            Vword = encodeURI(encodeURI(Vword));
            lan = encodeURI(encodeURI(lan));
            cuid = encodeURI(encodeURI(cuid));
            tok = encodeURI(encodeURI(tok));
            ctp = encodeURI(encodeURI(ctp));
            Vurl = "http://tsn.baidu.com/text2audio?tex=" + Vword + "&lan=" + lan + "&cuid=" + cuid + "&ctp=" + ctp + "&tok=" + tok;
            $("#Talk").attr("src", Vurl);
            $("#Talk")[0].play();
        },
        error:function(returndata){
            console.log(returndata);
        }
    });
}

function getTOKEN() {
    $.ajax({
        url: "http://127.0.0.1/getToken",
        type: "POST",
        async: false,
        datatype: "JSON",
        data: { grant_type: "client_credentials", client_id: "Bk92nRctlvuErcEDAe4YrcxP", client_secret: "1c9ae72a6080707aad6f0d491fa0efca" },
        success: function (data) {
            console.log(data);
            tok = data.token;
        },
        error: function (data) {
            console.log(data);
        }
    });
}
