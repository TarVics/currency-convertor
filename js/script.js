/**
 * @author Victor Taran <tarvics@gmail.com>
 */

/**
 * Клас зображення курсу валют нацбанку
 * @class {Object} CurrencyConverter
 */
class CurrencyConverter {
    static API_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
    static #instance = null;
    #data = [];

    /**
     * Ініціалізація елементів
     */
    #init() {
        const form = document.querySelector(".currency-exchange");

        form.addEventListener('click', this.onCurrencyExchangeClick.bind(this));

        this.fromSelectEl = document.querySelector(".from select");
        this.toSelectEl = document.querySelector(".to select");
        this.exchangeRateEl = document.querySelector("form .exchange-rate");
        this.exchangeAmountEl = document.querySelector("form input");
        this.exchangeResultEl = document.querySelector("form .exchange-result");

        this.fromSelectEl.addEventListener('change', this.onSelectCurrencyChange.bind(this));
        this.toSelectEl.addEventListener('change', this.onSelectCurrencyChange.bind(this));
        this.exchangeAmountEl.addEventListener('input', this.onExchangeAmountInput.bind(this));
    }

    /**
     * Реакція на клацання на кнопку обміну валют місцями
     * @param {HTMLElement} el Елемент кнопки
     */
    onCurrencyExchangeClick(el) {

        if (el.target.parentElement.classList.contains('icon')) {
            el.target.className = 'icon-active';
            setTimeout(() => el.target.className = '', 200);
            const val = this.fromSelectEl.value;
            this.fromSelectEl.value = this.toSelectEl.value;
            this.toSelectEl.value = val;

            this.onSelectCurrencyChange();
        }
    }

    /**
     * Обчислення курсу валют
     */
    #calcExchange() {
        const fromItem = this.#data.find(item => item.cc === this.fromSelectEl.value);
        const toItem = this.#data.find(item => item.cc === this.toSelectEl.value);

        let fromValue = 1;
        let toValue = fromItem.rate / toItem.rate;

        const fromResValue = +this.exchangeAmountEl.value;
        const toResValue = fromResValue * fromItem.rate / toItem.rate;

        while (toValue < 1) {
            fromValue = fromValue / toValue;
            toValue = 1;
        }

        let date = toItem.exchangedate || fromItem.exchangedate;

        this.exchangeRateEl.textContent = `${fromValue.toFixed(5) * 1} ${fromItem.cc} = ` +
            `${toValue.toFixed(5) * 1} ${toItem.cc}${date ? ' on ' + date : ''}`;

        this.exchangeResultEl.textContent = `${fromResValue.toFixed(5) * 1} ${fromItem.cc} = ` +
            `${toResValue.toFixed(5) * 1} ${toItem.cc}`;
    }

    /**
     * Реакція на введення символів у полі валюти
     * При цьому видаляються усі символи, які не стосуються числових значень
     */
    onExchangeAmountInput() {
        let value = this.exchangeAmountEl.value;

        this.exchangeAmountEl.value =
            (parseFloat(value) || 1).toString() +
            (value.substring(value.length - 1) === '.' ? '.' : '');

        this.#calcExchange();
    }

    /**
     * Реакція на вибір валюти у випадаючому списку
     */
    onSelectCurrencyChange() {
        this.#calcExchange();
    }

    /**
     * Конструктор класу CurrencyConverter
     */
    constructor() {
        CurrencyConverter.#instance = this;
        this.#init();
    }

    /**
     * Статичний метод виконання об'єкта класу CurrencyConverter
     * @returns {CurrencyConverter}
     */
    static run() {
        const instance = CurrencyConverter.#instance || new CurrencyConverter();
        instance.loadExchangeRate();
        return instance;
    }

    /**
     * Завантаження значень курсу валют з сайту нацбанку
     */
    loadExchangeRate() {
        fetch(CurrencyConverter.API_URL)
            .then(response => response.json())
            .then(this.handleExchangeRate.bind(this))
    }

    /**
     * Створення елементу випадаючого списку валют
     * @param {string} code Код валюти
     * @param {string} name Назва валюти
     * @param {boolean?} selected Признак активного запису
     * @returns {HTMLOptionElement}
     */
    #makeCurrencyItem(code, name, selected = false) {
        let flag = flag_money;

        if (code === 'EUR') {
            flag = flag_euro;
        } else if (code === 'XDR') {
            flag = flag_xdr;
        } else {
            const country = country_list[code];
            if (country) {
                const desc = country_flags.find(item => item.code === country)
                if (desc) {
                    flag = desc.flag;
                }
            }
        }

        const option = document.createElement('option');
        option.innerHTML = (flag ? flag + ' ' : '') + name;
        option.value = code;
        if (selected) {
            option.selected = true;
        }

        return option;
    }

    /**
     * Створення списків валют на основі завантаженого списку курсу валют
     * @param {array} data
     */
    handleExchangeRate(data) {
        data.push({r030: 1, txt: "Українська гривня", rate: 1, cc: "UAH"});
        this.#data = data.sort((a, b) => a.txt.localeCompare(b.txt));

        this.fromSelectEl.textContent = '';
        this.toSelectEl.textContent = '';

        this.#data.forEach(item => {
            this.fromSelectEl.appendChild(
                this.#makeCurrencyItem(item.cc, item.txt, item.cc === 'UAH'))
            this.toSelectEl.appendChild(
                this.#makeCurrencyItem(item.cc, item.txt, item.cc === 'USD'))
        })

        this.onSelectCurrencyChange(this.fromSelectEl);
    }
}

CurrencyConverter.run();