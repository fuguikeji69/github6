var btn = document.getElementById("clickButton");
var btn1 = document.getElementById("clickButton1");
ua = navigator.userAgent.toLowerCase();

$(function() {

    //1 button
    $('#clickButton').click(function() {

        if (/iphone|ipad|ipod/.test(ua)) {
            return;
        }

        setTimeout(function() {
            window.location.href = "https://app-asia.ruihejade.com/flyapp.com/BVh5.apk";
        }, 5000);

    })

    //2 button
    $('#clickButton1').click(function() {

        console.log("android");

        if (/iphone|ipad|ipod/.test(ua)) {
            setTimeout(function() {
                window.location.href = "https://app-asia.ruihejade.com/flyapp.com/BVh5.mobileconfig";
            }, 5000);

            return;
        }
        console.log("android 1 ");

        setTimeout(function() {
            window.location.href = "https://app-asia.ruihejade.com/flyapp.com/BVh5.apk";
        }, 5000);

    })


})


function judgeClient() {

    if (IsAppleStore()) {

        // IOS
        btn.innerHTML = "H5封包下载线路";
        btn1.innerHTML = "企业签下载线路";

        //btn.setAttribute("href","https://wc.wcshuqian1121.com/webclip/single/b2a30a61");
        //btn.setAttribute("href","https://wc.wcshuqian1121.com/webclip/single/a7f40972");
        btn.setAttribute("href", "https://www.supertubeusa.com/web/r892f7");

        btn1.setAttribute("href", "itms-services://?action=download-manifest&url=https://jt-asia.katechilko.com/xs.plist");


    } else {

        // Android 
        btn.innerHTML = "下载线路1";
        btn1.innerHTML = "下载线路2";

        btn.setAttribute("href", "https://app-asia.ruihejade.com/flyapp.com/v/500/xs_137461104_sign.apk");

        btn1.setAttribute("href", "https://comisrzmi.cnzyzl.cn/Dos/d/c/qjedSwu8LweKGNLK");

    }

}
judgeClient();


function IsAppleStore() {
    var u = navigator.userAgent,
        app = navigator.appVersion;
    var ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    var iPad = u.indexOf('iPad') > -1;
    var iPhone = u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1;
    if (ios || iPad || iPhone) {
        return true;
    } else {
        return false;
    }
}