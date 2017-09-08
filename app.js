const log = console.log;

const yargs = require("yargs");


const myModule = require("./moduleYangu");


const title = {
    alias   : "t",
    demand  : true,
    describe: "Title of the note"
};

const body = {
    alias   : "b",
    demand  : true,
    describe: "Body of the note"
};

const command = yargs
    .command("add", "add note", {title, body})
    .command("read", "select a note to read", {title})
    .command("list", "lists all notes")
    .command("del", "select a note and delete it", {title})
    .help()
    .argv;


switch (command._[0]) {
    case "add":
        const addedNote = myModule.addNote(command.title.toLowerCase(), command.body);
        break;

    case "read":
        const readNote = myModule.readNotes(command.title.toLowerCase());

        log("Reading file...");
        log();
        log(readNote.title.toUpperCase());
        log("_".repeat(25));
        log();
        log(readNote.body);
        log();
        log();
        log("Finished reading file");
        break;

    case "list":
        const files = myModule.listFiles();
        log(files);
        break;

    case "del":
        const deleteFile = myModule.deleteNote(command.title.toLowerCase());
        log(`${command.title} note has been deleted.`);
        break;
    default:
        log("command does not exist");
}

