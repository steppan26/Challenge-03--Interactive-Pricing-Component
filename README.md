# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

<img src="./images/screenshotMobile.png" alt="mobile screenshot" height="350"/> <img src="./images/screenshotDesktop.png" alt="desktop screenshot" height="350" style="margin-left: 50px;"/>

### Links

- Solution URL: [FrontEndMentor](https://www.frontendmentor.io/solutions/interactive-pricing-component-htmlcssjs-SYhoNoW3u)
- Live Site URL: [Github](https://steppan26.github.io/Challenge-03--Interactive-Pricing-Component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript
- Mobile-first workflow

### What I learned

This project was a really fun exercise which allowed me to develop my CSS skills whilst being to have fun with some javascript.
I did start out by planning out how I would structure the project before getting stuck into the HTML, but in hindsight I feel that I could have spent more time really breaking it down (particularly figuring out the best way to layout the items and have them change as you scale up). I prefer to get the HTML out early, then move onto the rest, but on this occasion I did have to go back to HTML a couple of times to add wrappers and/or change the structure.
The CSS was by far the more complicated and time-consuming part of this project. The many different elements which needed their own styling make for a pretty long CSS file. I am sure there are some more efficient ways of writing out the CSS to help reduce the number of lines, but I feel that I have everything in order (based on HTML structure) and it's clean and makes sense.

The javascript section of this project was a lot of fun and far simpler than I had anticipated. I feel that the solution I adopted is rather elegant as it only uses a single function with a couple of event listeners.


**To see how you can add code snippets, see below:**

I am particularly happy with this media querie below, which changes from flexbox to grid, which I then align per item to get them exactly where I want them. Grid is fantastic, and on a bigger project I believe I would likely use grid-areas, which can bring a lot of power and flexibility.
```css
@media only screen and (min-width:600px){
    .heading{
        font-size: 1.2em;
        margin: 0;
    }

    .heading > p{
        width: 100%;
        font-size: 1rem;
    }

    .card{
        max-Width: 512px;
    }

    .cardTop{
        width: 85%;
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto 1fr 1fr;
    }

    .pageviews{
        justify-self: self-start;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }

    .priceWrapper{
        justify-self: self-end;
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }

    .pageviews,
    .priceWrapper{
        font-size: 1rem;
        margin: 0;
    }

    .sliderContainer{
        width: 100%;
        justify-self:baseline;
        grid-column: 1 / 3;
        grid-row: 2 / 3;
        margin: 0;
    }

    .priceSlider{
        margin: 6% 0;
    }

    .pricingOption{
        justify-self: flex-end;
        grid-column: 1 / 3;
        grid-row: 3 / 4;
    }

    .discountDesktop{
        display: inline-block;
        background-color: hsl(14, 92%, 95%);
        border-radius: 1em;
        padding: 0.2em 0.5em;
        margin: 0.85em;
        color: hsl(15, 100%, 70%);
        font-size: 0.55rem;
    }

    .discount{
        display: none;
    }

    .cardBottom{
        width: 85%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    ul{
        text-align: left;
    }

}
```
I am pleased with the following piece of javascript as I was able to implement all the functionality of this project into this simple function, which gets triggered by event listening.
```js
function setPrice(){
    let selectorLocation = parseInt(priceSlider.value) - 1;
    pageviews.innerHTML = pageviewsArray[selectorLocation];
    let bgDistance = (selectorLocation * 10) * 2.5;
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

```


### Continued development

For my next project I would like to work on a project which would allow me to make effective us of CSS Grid areas, as I feel I have a good understanding of how it works but I have yet to really use it.
I would also like to work on some more complex javascript code, I will most likely do my next project using React so I further my knowledge and understanding of building with components and, ultimately, start manipulating 'states'.

### Useful resources

- [Stack Overflow](https://www.stackoverflow.com) - Just a fantastic community where almost every question I have seems to have already been asked and answered. This site was particularly useful within this project to figure out how to ma
- [W3 Schools: Range Slider](https://www.w3schools.com/howto/howto_js_rangeslider.asp) - This was particularly useful to help me understand how to create and style a range slider.
- [W3 Schools: Toggle Switch](https://www.w3schools.com/howto/howto_css_switch.asp) - This was particularly useful to help me understand how to create and style a toggle switch.


## Author

- Website - [Github Profile](https://github.com/steppan26)
- Frontend Mentor - [@steppan26](https://www.frontendmentor.io/profile/steppan26)
