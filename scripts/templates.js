function getNoteTemplate(indexNote) {
    return `
    <div class="note">
        <h3>${notesTitles[indexNote]}</h3>
        <p>${notes[indexNote]}</p>
        <div>
            <button onclick="notetotrash(${indexNote})" class="btn" >X</button>
            <button onclick="notetoArchiv(${indexNote})" class="btn" >A</button>
        </div>    
    </div>    
    `;
}

function getArchivNoteTemplate(indexArchivNote) {
    return `
    <div class="note">
        <h3>${archivNotesTitles[indexArchivNote]}</h3>
        <p>${archivNotes[indexArchivNote]}</p>
        <div>
            <button onclick="archivToTrash(${indexArchivNote})" class="btn" >X</button>
            <button onclick="archivToNote(${indexArchivNote})" class="btn" >N</button>
        </div>    
    </div>    
    `;
}

function getTrashNoteTemplate(indexTrashNote) {
    return `
    <div class="note">
        <h3>${trashNotesTitles[indexTrashNote]}</h3>
        <p>${trashNotes[indexTrashNote]}</p>
        <div>
            <button onclick="deleteNote(${indexTrashNote})" class="btn" >X</button>
            <button onclick="trashtoNote(${indexTrashNote})" class="btn" >N</button>
        </div>    
    </div>    
    `;
}
