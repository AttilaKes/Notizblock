let allNotes = {
    notesTitles: ["Ba", "Aufgabe"],
    notes: ["banana", "rasen mähen"],
    archivNotesTitles: [],
    archivNotes: [],
    trashNotesTitles: [],
    trashNotes: [],
};

function init() {
    getFromLocalStorage();
    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
}

function moveNote(indexNote, startKey, destinationKey) {
    let note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0]);
    let notesTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
    allNotes[destinationKey + "Titles"].push(notesTitle[0]);

    init();
}

function renderNotes() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderArchivNotes() {
    let archivContentRef = document.getElementById("archiv_content");
    archivContentRef.innerHTML = "";

    for (
        let indexArchivNote = 0;
        indexArchivNote < allNotes.archivNotes.length;
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
        indexTrashNote < allNotes.trashNotes.length;
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

    init();

    noteInputRef.value = "";
    noteTitleInputRef.value = "";
}

function deleteNote(indexTrashNote) {
    allNotes.trashNotes.splice(indexTrashNote, 1);
    allNotes.trashNotesTitles.splice(indexTrashNote, 1);

    init();
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
