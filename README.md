# Frontend Mentor - Photosnap Website solution

This is a solution to the [Photosnap Website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/photosnap-multipage-website-nMDSrNmNW).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-did)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Make sure that the application is accessible for users of Assistive Technologies

### Screenshot

![./Screenshot.png](./screenshot.png)

### Links

- Solution URL: [Frontend Mentor Solution](https://your-solution-url.com)
- Live Site URL: [Live Site at Vercel](https://photosnap-nine-teal.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Responsive Design
- CSS Animations
- [React](https://reactjs.org/) - JS library
- [React Router v6](https://reactrouter.com/en/main) - JS routing library
- [Sass](https://sass-lang.com/) - CSS preprocessor

### What I learned

#### click-target-helper class

The project heavily uses the `.click-target-helper` utility class. It creates a pseudoelement that increases the click area without affecting the design. This way, users can easily interact with small or irregularly shaped elements.

This class has the following features:

- It creates a pseudoelement that increases the click area without affecting the design.
- It uses CSS variables to set the minimum size and the inset of the pseudoelement.
- It applies position: relative to the element and position: absolute to the pseudoelement.

However, there are some caveats with using this class:

- It makes the element positioned, which may not be desirable in some cases. For example, if you want to use z-index or transform on the element, you may encounter some issues.
- When elements are grouped very closely together, the click area may overlap. This can cause confusion or frustration for users who may not be able to click on the intended element.
- It may interfere with other pseudoelements or positioned elements. For example, if you want to use ::before or ::after for styling purposes, you may need to adjust their position or z-index accordingly, or remove the class altogether.

Here is the code for the `.click-target-helper` utility class:

```css
.click-target-helper {
  position: relative;
}

.click-target-helper::after {
  --click-target-minimum: 44px;
  --inset-by: min(0px, calc((100% - var(--click-target-minimum)) / 2));

  content: '';
  position: absolute;
  top: var(--inset-by);
  left: var(--inset-by);
  right: var(--inset-by);
  bottom: var(--inset-by);
}
```

#### visually-hidden class

Accessibility is an important aspect of web development that ensures that everyone can access and use your website, regardless of their abilities or preferences. One of the challenges of accessibility is to provide meaningful and descriptive names for components that do not have visible text content, such as icons, images, or links.

The `.visually-hidden` class is a common technique for solving this problem. It makes the content inaccessible visually, yet accessible to assistive technologies (AT) such as screen readers. It allows you to create semantic and meaningful HTML elements that convey the purpose and function of the component to AT users.

One example of using the .visually-hidden class in my project is on the Stories Page. This page displays a list of articles with a title, an image, and a link to read more. The visual label of the link is “Read More”, but since there are numerous links to different articles, the screen reader will just read something like “Read More, Link, Read More, Link, Read More, Link” which is confusing and not helpful.

Using the `.visually-hidden` class, we can provide further details about where the link is heading. For example, if the title of the article is “The Milky Way”, we can add a span element with the `.visually-hidden` class and the text “about The Milky Way”. This way, the screen reader will read “Read More about The Milky Way, Link”, which is much more informative and clear.

Here is the code for this example:

```jsx
<StyledLink href="#">
  Read More <span className="visually-hidden">about {title}.</span>
</StyledLink>
```

#### prefers-reduced-motion

Animations can enhance the user experience and the visual appeal of your website, but they can also cause problems for some users who have motion sensitivity, vestibular disorders, or epilepsy. To ensure that animations are accessible and not causing any headaches to the viewers, you should respect their preferences and provide them with options to reduce or disable animations. `prefers-reduced-motion` media query, which lets you detect if the user has requested that the system minimize the amount of animation or motion it uses. The `no-preference` value indicates that the user has not expressed any preference for reduced motion. So I wrapped most of my animations and transitions in this query.

#### Accessible Mobile Navigation

Mobile navigation is a common feature of many websites that allows users to access different pages or sections of the website from a small screen. However, mobile navigation can also pose some challenges for accessibility, especially for users who rely on assistive technologies (AT) such as screen readers or keyboard navigation.

- One of the best practices for mobile navigation is to place the button that opens and closes the navigation menu inside the <nav> element. This way, AT users can easily access the landmark that represents the navigation region and activate the button to toggle the menu.
- To indicate the state of the button and the menu, I used the `aria-expanded`and `aria-controls` attributes. The `aria-expanded` attribute tells AT users whether the menu is expanded or collapsed, while the `aria-controls` attribute tells AT users which element is controlled by the button.
- Another technique I used is to close the menu when the user presses the Esc key.
- I also implemented tab trapping inside the menu. This means that when the menu is open, only the elements inside the menu can be focused by pressing <kbd>Tab</kbd> or <kbd>Shift</kbd>+<kbd>Tab</kbd>. This prevents users from accidentally moving their focus outside of the menu and losing their context.

The code for tab trapping:

```jsx
const tabTrap = (e) => {
  if (e.key !== 'Tab' || e.keyCode !== 9) return;

  if (e.shiftKey) {
    if (document.activeElement === [first focusable element]) {
      [last focusable element].focus();
      e.preventDefault();
    }
  } else if (document.activeElement === [last focusable element]) {
    [first focusable element]focus();
    e.preventDefault();
  }
};
```

#### Accessible Toggle Component

This project showcases how I implemented a toggle component on the pricing page of a website. The toggle component allows the user to switch between monthly and yearly plans, and it looks like a simple switch component. However, I wanted to make it accessible for assistive technologies (AT) such as screen readers, so that they can announce which pricing plan was chosen.
The usual way to create a switch component is to use an <input type='checkbox'> element and style it with CSS. However, this approach has some drawbacks when it comes to accessibility: a checkbox only has two possible states: checked or unchecked. This means that the screen reader will only announce something like “Monthly plan, checked” or “Monthly plan, unchecked”, and not indicate if the “Yearly plan” was chosen.
To overcome these challenges, I decided to use two radio buttons instead of a checkbox, and make them look like a classic toggle using SVG. Radio buttons have some advantages over checkboxes:

- Radio buttons can have multiple values, and only one of them can be selected at a time. This means that the screen reader can announce something like “Monthly plan, selected” or “Yearly plan, selected”, and indicate which option is currently active.
- Radio buttons can have explicit labels that describe their values. The screen reader can read out the labels and inform the user what the radio buttons are for.

```jsx
<fieldset>
  <label for="toggle-input-1">{firstValue}</label>
  <span className="wrapper">
    <input
      type="radio"
      name="plan"
      id="toggle-input-1"
      value={firstValue}
      checked={currentValue === firstValue}
      onChange={handleChange}
    />
    <input
      type="radio"
      name="plan"
      id="toggle-input-2"
      value={secondValue}
      checked={currentValue === secondValue}
      onChange={handleChange}
    />
    <ToggleSVG aria-hidden="true" focusable="false" />
  </span>
  <label for="toggle-input-2">{secondValue}</label>
</fieldset>
```

#### Table Component

I wanted to avoid several levels of table heading for narrow viewports, so I followed the advice from [this article](https://inclusive-components.design/data-tables/) by Heydon Pickering. The article shows how to use semantic HTML elements to make the table more suited for narrow viewports. Here are the changes I made to the HTML tags:

| Original           | New    |
| ------------------ | ------ |
| `<caption>`        | `<h2>` |
| `<th scope="row">` | `<h3>` |
| `<th scope="col">` | `<dt>` |
| `<td>`             | `<dd>` |

This structure works better for mobile, where users are used to scrolling vertically. It also preserves the accessibility of the table, just in a different way.

### Useful resources

- [Codepen by Kevin Kipp .click-target-helper class](https://codepen.io/third774/pen/XWgXZRY) - I used the `.click-target-helper` from this clever codepen.
- [The Anatomy of visually-hidden](https://www.tpgi.com/the-anatomy-of-visually-hidden/)
- [Navigation Landmark Discoverability](https://www.scottohara.me/blog/2016/08/10/discovering-landmarks.html) - An article by Scott O’Hara that explains the common mistake of placing the menu button outside the <nav> element.
- [On Designing and Building Toggle Switches](https://www.sarasoueidan.com/blog/toggle-switch-design/) - An amazing article by Sara Soueidan about building accessible toggle switches. My implementation of the toggle component is based on this article.
- [Inclusive Components: Data Tables](https://inclusive-components.design/data-tables/) by Heydon Pickering.

## Author

- Frontend Mentor - [@Akherousin](https://www.frontendmentor.io/profile/Akherousin)
