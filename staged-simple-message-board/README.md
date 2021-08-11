# Simple Apps need APIs

In this repo we see how many APIs emerge _without_ planning.

## Stage 1: A basic structure

* `svr.js` is a four line express static server.
* `index.html` contains just static content.
* `index.js` is a simple client JS script that writes the the console on page load.

## Stage 2: Reading some data ([see the diff](https://github.com/portsoc/staged-simple-message-board/commit/stage-2))

* `svr.js` adds an array of default messages and a route (at `/messages`) that returns them in response to a GET request.
* `index.html` just has the `messagelist` id added so we can refer to it in the script.
* `index.js` adds a `loadMessages` function that fetches messages from the server, replacing the initial static content.

## Stage 3: Storing data ([see the diff](https://github.com/portsoc/staged-simple-message-board/commit/stage-3))

* `svr.js` adds a second route for `/messages`, this time defining what we do for POST requests – we add a new message.
* `index.html` includes two new input fields for entering a new message.
* `index.js` includes a new `sendMessage` function that posts the new message, and a `checkKeys` function that looks for ENTER being pressed so posting a new message is more usable.  The `loadMessages` function has been refactored to call smaller named functions.

## Stage 4: An API route for every message ([see the diff](https://github.com/portsoc/staged-simple-message-board/commit/stage-4))

* `svr.js` now stores objects instead of strings, using UUIDs to identify messages; and adds a new route at `/messages/:id` for getting the details of any individual message.
* `index.html` includes a new `detail` field.
* `index.js` allows users to hover over messages to get information about the time the message was posted (this is retrieved for each message as the `mouseenter` event occurs).

## Stage 5: Refactoring as a module ([see the diff](https://github.com/portsoc/staged-simple-message-board/commit/stage-5))

* `svr.js` has been simplified with all code that isn't specific to HTTP removed to a separate module.
* `messageboard.js` created which now contains all the core logic.

## Stage 6: An API route and client page for update messages ([see the diff](https://github.com/portsoc/staged-simple-message-board/commit/stage-6))

* `svr.js` adds a second route at `/messages/:id` to allow PUT requests so a message can be edited, also adds `extensions` parameter to `express.static` to automatically fill in `.html` in URLs.
* `messageboard.js` adds a function for updating a message.
* `index.js` now adds an "(edit)" link to each message.
* `message.html` created to show an individual message.
* `message.js` created with the client-side script for sending an edited message to the server with a PUT request.

## Stage 7: Style! ([see the diff](https://github.com/portsoc/staged-simple-message-board/commit/stage-7))

* `index.html` and `message.html` put the inputs in a `<header>` and add a link to the stylesheet
* `style.css` makes it all pretty, with dark and light mode

## Stage 8: Data belongs in a database ([see the diff](https://github.com/portsoc/staged-simple-message-board/commit/stage-8))

* `svr.js` uses the `messageboard` module asynchronously
* `messageboard.js` uses SQLite instead of an in-memory array, using the `sqlite` package
* `migrations-sqlite/001-initial.sql` is the SQL script that creates the necessary table (used in `messageboard.js` by the `db.migrate()` call)
* `database.sqlite` is the database file (it gets created by `messageboard.js` when we first run the server)

## Stage 9: PostgreSQL ([see the diff](https://github.com/portsoc/staged-simple-message-board/commit/stage-9))

* `messageboard.js` uses PostgreSQL instead of SQLite, using the `pg` package
* `messageboard.sql` is the SQL script that creates the necessary tables (used in `package.json` by the `setuppg` script)
* `config.json` specifies where to find a running PostgreSQL and which database to use (edit this if you have trouble connecting to your PostgreSQL)

## Stage 10: Uploading avatar pictures (based on Stage 8) ([see the diff](https://github.com/portsoc/staged-simple-message-board/commit/stage-10a))

* `index.html` adds an input field for selecting an avatar picture, and default avatars for the messages present before current messages are loaded from the server
* `style.css` makes sure the new field fits nicely and that avatar pictures are formatted with the messages
* `index.js` puts avatars in the messages (when present, otherwise the default image); and submits messages with the avatar (switching from JSON to `FormData` which supports embedded files)
* `svr.js` adds file upload functionality with the `multer` package (but keeps the JSON parser as well for backwards compatibility) and gives the incoming file to `mb.addMessage()`; before it's accepted, an uploaded file is in `upload/`
* `messageboard.js` moves uploaded pictures in `client/images/` and notes their filename in the database, and when retrieving messages, it puts the public path to the picture in every message object
* `migrations-sqlite/002-file.sql` adds a file column to the Messages table
* `client/images/` is a folder that stores uploaded pictures, contains a single generic image used when no avatar is available for a message
* `upload/` is a folder that stores uploaded files before we verify them and move them to `client/images/`

## Exercise


Imagine a database with tables for lecturers and students, in which every student has a personal tutor who is a lecturer.

1. Who might want to use data from such a database? _(List potential users)_
2. Consider each type of user that wants to access the data: what functionality will they want from the web app? _(List use cases)_
3. Design a (read-only) API that provides the data necessary to fulfil the requirements identified above:
   * Identify the routes
   * Specify what the server would do in response to a GET request
   * Describe when the client web app will use the request
   * NB: You don't have to use any syntax here, you're just dealing with concepts.

When done with the above, extend the exercise:

4. Add a table of modules: every student currently studies several modules, and every module is currently taught by one or more lecturers. Repeat steps 1–3.
5. Consider that we need to remember the modules students took in previous years; so a final-year student can have 11 modules they studied before, and 5 they are studying currently. Repeat steps 1–3.
6. Consider who would want to update any of the data. Repeat steps 1–3 but this time design a read-write API: beside the GET routes you defined above, you can define PUT, POST, and DELETE routes.
