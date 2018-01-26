var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
var Page = (function () {
    function Page(url) {
        this.url = url;
        this.status = "empty";
        this.el = document.createElement('div');
    }
    Page.prototype.load = function () {
        var _this = this;
        var _el = this.el;
        $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent(this.url) + '&callback=?', function (data) {
            _this.el.innerHTML = data.contents;
        })
            .done(function () { _this.status = "done"; })
            .fail(function () { _this.status = "fail"; });
    };
    return Page;
}());
var Currency = (function () {
    function Currency() {
    }
    Object.defineProperty(Currency.prototype, "clabel", {
        get: function () {
            return this._clabel;
        },
        set: function (value) {
            this._clabel = value;
        },
        enumerable: true,
        configurable: true
    });
    return Currency;
}());
var greeter, page_cadBTC;
window.onload = function () {
    var gel = document.getElementById('content');
    greeter = new Greeter(gel);
    greeter.start();
    page_cadBTC = new Page('https://www.canadianbitcoins.com');
    page_cadBTC.load();
};
//# sourceMappingURL=app.js.map