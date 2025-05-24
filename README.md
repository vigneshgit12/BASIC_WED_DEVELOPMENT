# Basic_Website_using_html_css_javascript 

Here are the notes on the provided code, presented in a concise, point-wise format:

---

## Website Creation: HTML, CSS, and JavaScript

This project demonstrates a basic webpage built using three core web technologies.

---

### 1. HTML (`index.html`) - The Structure

* **Foundation:** Sets up the page's basic structure (document type, language, character encoding, viewport).
* **Title:** Defines the browser tab title as "My Improved Webpage TASK\_1".
* **Styling Link:** Connects to `style.css` for visual design.
* **Content Organization:**
    * **Header:** Contains the main heading "Welcome to My TASK\_1 Webpage!".
    * **Main Section:** Houses the core content.
        * **Introduction:** Includes a heading ("About This Page"), descriptive paragraphs, an **image within a figure** (with a local path, so adjust for online display), and its caption.
        * **External Link:** Provides a clickable link to Wikipedia that opens in a new tab.
        * **Separator:** Uses `<hr>` for visual division.
        * **Interactive Area:** Features a heading ("Interactive Section") and a **button** (`id="myButton"`) for JavaScript interaction.
    * **Footer:** Displays copyright information.
* **Script Link:** Connects to `script.js` for interactive functionality, placed at the end of the `<body>` for optimal loading.

---

### 2. JavaScript (`script.js`) - The Interactivity

* **Execution Timing:** Uses `DOMContentLoaded` to ensure the HTML is fully loaded before the script runs, preventing errors.
* **Element Selection:** Retrieves the button element by its `id` (`myButton`).
* **Safety Check:** Includes a check to confirm the button was found; logs an error if not.
* **Event Handling:** Attaches a `click` event listener to the button.
* **Action on Click:** When clicked, it triggers:
    * An `alert()` pop-up message: "Button clicked! Hello from JavaScript!".
    * A `console.log()` message for debugging: "Button clicked! Hello from JavaScript!".

---

### 3. CSS (`style.css`) - The Styling

* **Global Styles:** Sets `body` defaults: font, no margins, light gray background, dark text, and line height.
* **Header Styling:** Applies dark background, white text, padding, and centers header content.
* **Main Content Layout:** Centers the `main` area, limits its width, adds a white background, `box-shadow`, and `border-radius`.
* **Section Design:** Adds vertical spacing, a bottom border (removed for the last section), and padding.
* **Heading (h2) Visuals:** Styles `<h2>` with a blue color, a distinct left border, and padding.
* **Paragraph Spacing:** Provides basic bottom margin for readability.
* **Responsive Images:** Ensures images (`.responsive-image`) scale within their containers (`max-width: 100%; height: auto;`), adds `display: block`, margins, a border, and `border-radius`.
* **Link Appearance:** Sets links to blue and adds an underline on hover.
* **Button Design:** Styles the button with a green background, white text, padding, rounded corners, `cursor: pointer`, and a smooth `transition` for hover effects (darker green on hover).
* **Footer Placement:** Centers footer text, gives it a dark background, white text, and a top margin.

---

### How to Create This Code:

1.  **Folder Setup:** Create a new folder (e.g., `my-website`).
2.  **HTML File (`index.html`):**
    * Write the basic HTML boilerplate.
    * Add `header`, `main` (with `introduction` and `interactive-section`), and `footer` elements.
    * Include the image (`<img src="path/to/your/image.jpg">`) and remember to put your actual image file in the correct path relative to your HTML.
    * Link `style.css` in the `<head>` and `script.js` before `</body>`.
3.  **CSS File (`style.css`):**
    * Create `style.css` in the *same folder* as `index.html`.
    * Add all the provided CSS rules to style each element and class as desired.
4.  **JavaScript File (`script.js`):**
    * Create `script.js` in the *same folder* as `index.html`.
    * Implement the `DOMContentLoaded` listener.
    * Select the button using `document.getElementById('myButton')`.
    * Attach the `click` event listener and define the `alert()` function.
5.  **View:** Open `index.html` in your web browser.
