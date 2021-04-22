const toggleButton = document.getElementById("checkbox");
const priceSlider = document.getElementById("priceSlider");
const pageviews = document.getElementById("pageviews");
const price = document.getElementById("price");
const billingCycle = document.getElementById("billingCycle");
const pageviewsArray = ["10k PAGEVIEWS", "50k PAGEVIEWS", "100k PAGEVIEWS", "500k PAGEVIEWS", "1M PAGEVIEWS"];
const priceArrayMonthly = ["8", "12", "16", "24", "36"];


function setPrice(){
    let selectorLocation = parseInt(priceSlider.value) - 1;
    pageviews.innerHTML = pageviewsArray[selectorLocation];
    let bgDistance = (selectorLocation * 10) * 2.5;
    // priceSlider.style.background = "linear-gradient(var(--clr-full-slider) ${bgDistance}, var(--clr-empty-slider))";
    priceSlider.style.background = "linear-gradient(to right, var(--clr-full-slider) " + bgDistance + "%, var(--clr-empty-slider)" + bgDistance + "%)";


    if(toggleButton.checked === true ){
        let MonthlyPrice = parseInt(priceArrayMonthly[selectorLocation]) / 1.25;
        let annualPrice = MonthlyPrice * 12;
        price.innerHTML = "$" + annualPrice.toFixed(2);
        billingCycle.innerHTML = "/year";
    } else {
        price.innerHTML = "$" + parseInt(priceArrayMonthly[selectorLocation]).toFixed(2);
        billingCycle.innerHTML = "/month";
    }
}


priceSlider.addEventListener("input", setPrice);
toggleButton.addEventListener("input", setPrice);