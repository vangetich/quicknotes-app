# QuickNotes

QuickNotes is a simple and responsive note-taking web application built with HTML, CSS, and JavaScript. The app allows users to create, organize, search, and delete notes using categories such as Personal, Work, and Study. Notes are automatically saved in the browser using localStorage, ensuring that they remain available even after the page is refreshed or closed. The application focuses on clean design, input validation, and a user-friendly experience while demonstrating core front-end development skills.

## Features

- Add notes with categories (Personal, Work, or Study)
- Store notes as objects with unique IDs, text, category, and creation date
- Display notes as styled note cards
- Delete individual notes
- Validate note input before saving
- Limit notes to 200 characters
- Display helpful error messages
- Search notes in real time
- Show accurate note counts for zero, one, or many notes
- Save notes automatically using localStorage
- Load saved notes when the application starts
- Responsive layout for desktop and mobile devices

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage API

## Project Structure

```
quicknotes-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run the Project Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/quicknotes-app.git
   ```

2. Navigate into the project folder:

   ```bash
   cd quicknotes-app
   ```

3. Open the project in your preferred code editor.

4. Open the `index.html` file in a web browser.

Alternatively, in Visual Studio Code you can:

1. Install the Live Server extension.
2. Right-click `index.html`.
3. Select **Open with Live Server**.

The application will launch in your browser and be ready to use.

## Usage

1. Enter a note in the text field.
2. Select a category.
3. Click **Add Note**.
4. View notes in the notes section.
5. Use the search box to filter notes.
6. Click **Delete** to remove a note.
7. Refresh the page to confirm notes persist through localStorage.

## What I Learned

During this project, I learned:

1. How to create and manipulate DOM elements using JavaScript methods such as `querySelector()`, `createElement()`, and `textContent()`.
2. How to store and retrieve application data using `localStorage`, `JSON.stringify()`, and `JSON.parse()`.
3. How to use arrays of objects to manage structured application data.
4. How to implement form validation and provide meaningful feedback to users.
5. How to build responsive layouts using CSS Flexbox and media queries.
6. How to create reusable rendering functions that update the user interface efficiently.

## Future Improvements

- Edit existing notes
- Filter by category
- Sort notes by date
- Dark mode support
- Export notes to text or PDF files

## Author

Created as part of the QuickNotes web application project.