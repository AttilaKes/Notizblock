let notesTitles = ["Ba", "Aufgabe"];
let notes = ["banana", "rasen mähen"];

let archivNotesTitles = [];
let archivNotes = [];

let trashNotesTitles = [];
let trashNotes = [];

function init() {
    getFromLocalStorage();
    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
}

function renderNotes() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderArchivNotes() {
    let archivContentRef = document.getElementById("archiv_content");
    archivContentRef.innerHTML = "";

    for (
        let indexArchivNote = 0;
        indexArchivNote < archivNotes.length;
        indexArchivNote++
    ) {
        archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById("trash_content");
    trashContentRef.innerHTML = "";

    for (
        let indexTrashNote = 0;
        indexTrashNote < trashNotes.length;
        indexTrashNote++
    ) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

function addNote() {
    let noteInputRef = document.getElementById("note_input");
    let noteInput = noteInputRef.value;
    let noteTitleInputRef = document.getElementById("note_title_input");
    let noteTitleInput = noteTitleInputRef.value;

    if (noteTitleInput.trim() === "" || noteInput.trim() === "") {
        return;
    }

    notes.push(noteInput);
    notesTitles.push(noteTitleInput);

    saveToLocalStorage();
    renderNotes();

    noteInputRef.value = "";
    noteTitleInputRef.value = "";
}

function notetotrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);

    saveToLocalStorage();
    renderNotes();
    renderTrashNotes();
}

function notetoArchiv(indexNote) {
    let archivNote = notes.splice(indexNote, 1);
    archivNotes.push(archivNote[0]);
    let archivNoteTitle = notesTitles.splice(indexNote, 1);
    archivNotesTitles.push(archivNoteTitle[0]);

    saveToLocalStorage();
    renderNotes();
    renderArchivNotes();
}

function archivToTrash(indexArchivNote) {
    let trashNote = archivNotes.splice(indexArchivNote, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = archivNotesTitles.splice(indexArchivNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);

    saveToLocalStorage();
    renderArchivNotes();
    renderTrashNotes();
}

function archivToNote(indexArchivNote) {
    let note = archivNotes.splice(indexArchivNote, 1);
    notes.push(note[0]);
    let noteTitle = archivNotesTitles.splice(indexArchivNote, 1);
    notesTitles.push(noteTitle[0]);

    saveToLocalStorage();
    renderArchivNotes();
    renderNotes();
}

function trashtoNote(indexTrashNote) {
    let note = trashNotes.splice(indexTrashNote, 1);
    notes.push(note[0]);
    let noteTitle = trashNotesTitles.splice(indexTrashNote, 1);
    notesTitles.push(noteTitle[0]);

    saveToLocalStorage();
    renderTrashNotes();
    renderNotes();
}

function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    trashNotesTitles.splice(indexTrashNote, 1);

    saveToLocalStorage();
    renderNotes();
    renderTrashNotes();
}

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
    localStorage.setItem("archivNotes", JSON.stringify(archivNotes));
    localStorage.setItem(
        "archivNotesTitles",
        JSON.stringify(archivNotesTitles),
    );
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
    localStorage.setItem("trashNotesTitles", JSON.stringify(trashNotesTitles));
}

function getFromLocalStorage() {
    let savedNotes = JSON.parse(localStorage.getItem("notes"));
    let savedTitles = JSON.parse(localStorage.getItem("notesTitles"));
    let savedArchiv = JSON.parse(localStorage.getItem("archivNotes"));
    let savedArchivTitles = JSON.parse(
        localStorage.getItem("archivNotesTitles"),
    );
    let savedTrash = JSON.parse(localStorage.getItem("trashNotes"));
    let savedTrashTitles = JSON.parse(localStorage.getItem("trashNotesTitles"));

    if (savedNotes !== null) {
        notes = savedNotes;
    }
    if (savedTitles !== null) {
        notesTitles = savedTitles;
    }
    if (savedArchiv !== null) {
        archivNotes = savedArchiv;
    }
    if (savedArchivTitles !== null) {
        archivNotesTitles = savedArchivTitles;
    }
    if (savedTrash !== null) {
        trashNotes = savedTrash;
    }
    if (savedTrashTitles !== null) {
        trashNotesTitles = savedTrashTitles;
    }
}
