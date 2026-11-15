// ============================================
// Notes App
// ============================================

// DOM elements
const noteInput = document.querySelector("#note-input");
const categoryInput = document.querySelector("#category-input");
const addButton = document.querySelector("#add-button");
const notesList = document.querySelector("#notes-list");
const searchInput = document.querySelector("#search-input");
const errorMessage = document.querySelector("#error-message");
const countDisplay = document.querySelector("#count-message");

// Load notes from localStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// ============================================
// Save notes
// ============================================
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// ============================================
// Validation
// ============================================
function isValidNote(text) {
  const cleaned = text.trim();

  if (cleaned.length === 0) {
    errorMessage.textContent = "Note cannot be empty.";
    return false;
  }

  if (cleaned.length > 200) {
    errorMessage.textContent =
      "Note cannot be longer than 200 characters.";
    return false;
  }

  errorMessage.textContent = "";
  return true;
}

// ============================================
// Count message
// ============================================
function countMessage() {
  if (notes.length === 0) {
    return "You have no notes yet.";
  }

  if (notes.length === 1) {
    return "You have 1 note.";
  }

  return `You have ${notes.length} notes.`;
}

// ============================================
// Render notes
// ============================================
function render(filteredNotes = notes) {
  notesList.textContent = "";

  filteredNotes.forEach((note) => {
    const li = document.createElement("li");

    const noteInfo = document.createElement("span");
    noteInfo.textContent =
      `${note.text} | ${note.category} | ${note.createdAt}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
      deleteNote(note.id);
    });

    li.appendChild(noteInfo);
    li.appendChild(deleteButton);

    notesList.appendChild(li);
  });

  countDisplay.textContent = countMessage();
}

// ============================================
// Add note
// ============================================
function addNote(text, category) {
  if (!isValidNote(text)) {
    return;
  }

  const newNote = {
    id: Date.now(),
    text: text.trim(),
    category: category.trim(),
    createdAt: new Date().toLocaleString(),
  };

  notes.push(newNote);

  saveNotes();
  render();

  noteInput.value = "";
  categoryInput.value = "";
}

// ============================================
// Delete note
// ============================================
function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);

  saveNotes();
  render();
}

// ============================================
// Search notes
// ============================================
function searchNotes(searchTerm) {
  const filtered = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  render(filtered);
}

// ============================================
// Event listeners
// ============================================
addButton.addEventListener("click", () => {
  addNote(noteInput.value, categoryInput.value);
});

searchInput.addEventListener("input", (event) => {
  searchNotes(event.target.value);
});

// ============================================
// Initial render
// ============================================
render();