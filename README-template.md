# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

How to structure my code with the approach of mobile first design.

How to do form validations in javascript

To see how you can add code snippets, see below:

```html

```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const regx = /^([a-zA-Z0-9\._])+@([a-zA-Z0-9])+.([a-z])+$/;

const validate = () => {
    if(regx.test(emailValue.value)) {
        errText.classList.remove('error');
        emailValue.classList.remove('err-border');
        emailValue.value = "";
    }
    else { 
        errText.classList.add('error');
        emailValue.classList.add('err-border');
     }
}
}
```


### Continued development

I will be focusing on how to use the BEM technology to make my CSS more structure and more robust.

Learn form validation using sass coupled with css pseudo elements

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [PDF Drive](https://www.pdfdrice.com) - This helped in downloading a free pdf on how to do form validation in sass

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author


- Frontend Mentor - [@yannmarc](https://www.frontendmentor.io/profile/yannmarc)
- Twitter - [@yannmarc](https://www.twitter.com/yannmarc)



