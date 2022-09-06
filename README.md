# Front-end Choose Your Own Adventure Take-Home

Design and build a comments feed that displays all comments and notifies a user in real-time when new comments are added.

Here is the data schema for a Comment:
* id: INTEGER
* name: TEXT
* created: DATETIME
* message: TEXT

Here are the API endpoints:
* Create a comment: /createComment (POST)
* Retrieve all comments: /getComments (GET)
* Retrieve a comment: /getComment (GET)
* Delete all comments: /deleteComments (DELETE)
  * This is useful for purging data

![Basic wireframe](wireframe.png)


## Usage

### Run Node Server in Development

```
$ npm install
$ npm run dev
```

### Run Angular Frontend in Development

```
$ cd webapp/
$ npm install
$ npm start
```

### Run Augular Tests

```
$ npm run test
```
