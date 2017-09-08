# note-app

A simple app that writes, reads and deletes notes.
You can only add a ***Title*** and ***Body*** for the text. 

## BASICS

In the command line first run 

To add a note use:

```node app add -t <title of your note> -b <text body for your note>```

To read a note use:

```node app read -t <title of the note you want to read>```

To list all available notes use:

```node app list```

To delete a note use:

```node app del -t <title of the note you want to delete>```

If you want to know availble commands for ***add, read, list and del***, type 

``node app <add/read/list/del> -h``