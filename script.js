const fromCurrency = document.getElementById('fromCurrency');
const amountInput = document.getElementById('amount');
const resultDisplay = document.getElementById('result');
const convertBtn = document.getElementById('convertBtn');
const exchangeRateDisplay = document.createElement('p'); // عنصر لعرض سعر الصرف

exchangeRateDisplay.style.marginTop = '10px';
exchangeRateDisplay.style.color = '#555';
resultDisplay.insertAdjacentElement('afterend', exchangeRateDisplay);

// أسعار صرف ثابتة مقابل الدولار (أمثلة)
const exchangeRates = {
    EUR: 0.94,  // يورو
    GBP: 0.83,  // جنيه إسترليني
    JPY: 148.5, // ين ياباني
    SAR: 3.75,  // ريال سعودي
    AED: 3.67,  // درهم إماراتي
    EGP: 30.90, // جنيه مصري
    INR: 83.0,  // روبية هندية
    CNY: 7.3,   // يوان صيني
    CAD: 1.37,  // دولار كندي
    AUD: 1.55,  // دولار أسترالي
    CHF: 0.9,   // فرنك سويسري
    RUB: 96.0   // روبل روسي
};

// تعبئة القوائم المنسدلة بالعملات
function populateCurrencyOptions() {
    Object.keys(exchangeRates).forEach(currency => {
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        fromCurrency.appendChild(option);
    });
}

// تنفيذ عملية التحويل
function convertCurrency() {
    const from = fromCurrency.value;
    const amount = parseFloat(amountInput.value);

    if (from in exchangeRates) {
        const rate = exchangeRates[from];
        const result = (amount * rate).toFixed(2);
        resultDisplay.textContent = `النتيجة: ${result} ${from}`;
        exchangeRateDisplay.textContent = `1 USD = ${rate} ${from}`;
    } else {
        resultDisplay.textContent = 'حدث خطأ. تحقق من إدخال البيانات.';
    }
}

convertBtn.addEventListener('click', convertCurrency);
populateCurrencyOptions();
