const log = console.log;

const fs = require("fs");
const _ = require("lodash");

function ifFileExists() {
    // checks if file exists in disk

    try {
        return JSON.parse(fs.readFileSync("myNotes.json"));
    } catch (e) {
        return [];
    }
}

const listFiles = () => ifFileExists();


const addNote = (title, body) => {
    // adds note to disk

    const userNote = _.each({title, body}, n => n);
    let emptyNote = [];
    emptyNote = ifFileExists();
    const findNote = _.find(emptyNote, {"title": title});

    switch (findNote) {
        case undefined:
            log("_".repeat(25));
            emptyNote.push(userNote);
            fs.writeFileSync("./myNotes.json", JSON.stringify(emptyNote));
            log("Note added.....");
            break;
        default:
            log("Note title already exists. Please use a unique title");
    }

    return emptyNote;
};

function findFile(file, title) {
    return _.find(file, {"title": title});
}

const readNotes = title => {
// lists all the notes in the disl file
    return findFile(ifFileExists(), title);

};

function deleteNote(title) {
    // finds a the note with the title provided and deletes it
    const fileDel = findFile(ifFileExists(), title);

    switch (fileDel) {
        case undefined:
            return "file does not exist";
            break;
        default:
            const reject = _.reject(ifFileExists(), fileDel);
            fs.writeFileSync("./myNotes.json", JSON.stringify(reject));

            return reject;
    }
}

module.exports = {
    addNote,
    readNotes,
    listFiles,
    deleteNote
};