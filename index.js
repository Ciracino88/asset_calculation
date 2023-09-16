var sum_asset = 2500; // 100
var cma_cash = 1250; // 50
var stock_and_coin = 1250; // 50
var coin = 500; // 20
var stock = 750; // 30
var fore_stock = 500; // 20
var dome_stock = 250; // 10
var month = 0;

hover_logo();

function cal() {
    const cma_interest = cal_cma_interest(Math.floor(cma_cash * 0.01) * 100) / 2;
    const coin_interest = cal_coin_interest(Math.floor(coin * 0.01) * 100) / 2;

    sum_asset = sum_asset + cma_interest + coin_interest + 100;

    sa = sum_asset * 0.1;
    fsa = Math.floor(sa) * 10;
    sum_asset = fsa;
    cma_cash = fsa * 0.5;
    stock_and_coin = fsa * 0.5;
    coin = fsa * 0.2;
    stock = fsa * 0.3;
    fore_stock = fsa * 0.2;
    dome_stock = fsa * 0.1;
    month += 1;

    init();
}

function cal_cma_interest(cma) {
    console.log(cma * 0.03);
    console.log(cma * 0.03 / 365);
    console.log(cma * 0.03 / 365 * 30);
    return cma * 0.03 * 30 / 365 * 30;
}

function cal_coin_interest(co) {
    return co * 0.03 * 30;
}

function init() {
    var q1 = document.getElementById("sum_asset");
    var q2 = document.getElementById("cma_cash");
    var q3 = document.getElementById("stock_and_coin");
    var q4 = document.getElementById("coin");
    var q5 = document.getElementById("stock");
    var q6 = document.getElementById("fore_stock");
    var q7 = document.getElementById("dome_stock");
    var q8 = document.getElementById("month");

    q1.innerText = `총자산 : ${sum_asset}`;
    q2.innerText = `현금(CMA) : ${cma_cash}`;
    q3.innerText = `주식 및 코인 : ${stock_and_coin}`;
    q4.innerText = `코인 : ${coin}`;
    q5.innerText = `주식 : ${stock}`;
    q6.innerText = `해외 주식 : ${fore_stock}`;
    q7.innerText = `국내 주식 : ${dome_stock}`;
    q8.innerText = `n개월 후 : ${month}`;
}

function hover_logo() {
    const q = document.getElementById("logo");
    const t = document.getElementById("logo_page");
    q.addEventListener('mouseover', (event) => {
        t.style.display = 'block';
    });
    q.addEventListener('mouseout', (event) => {
        t.style.display = 'none';
    });
}