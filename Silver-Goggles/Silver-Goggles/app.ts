class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

    

}

class Page {
    el: HTMLElement;
    status: string;
    url: String;
    constructor(url: String) {
        this.url = url;
        this.status = "empty";
        this.el = document.createElement('div');
    }
     
    load() {
        var _el = this.el;
        
        $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent(<string>this.url) + '&callback=?', (data) => {
            this.el.innerHTML = data.contents;
        })
            .done(() => {this.status = "done";})
            .fail(() => { this.status = "fail";});
    }
}

class Currency {
    private _clabel: String;

    constructor() {
    }

    public get clabel(): String {
        return this._clabel;
    }
    public set clabel(value: String) {
        this._clabel = value;
    }
}

var greeter, page_cadBTC;

window.onload = () => {
    var gel = document.getElementById('content');

    greeter = new Greeter(gel);
    greeter.start();

    page_cadBTC = new Page('https://www.canadianbitcoins.com');
    page_cadBTC.load();
};