# Setup
## Backend API
 - Using the server provided by udacity: git@github.com:udacity/reactnd-project-readable-starter.git
 - install packages with npm install
 - run server with npm start
 - take notice of the port the server is running on.

 ## Frontend
 - Set REACT_READABLE_API_URL environmental variable for the server, defaulted to localhost:3001
 - install packages with npm install
 - run with yarn start

 # Views
## Default (Root)  /
should list all available categories, which should link to a category view for that category
should list all of the posts ordered by voteScore (highest score first)
should have a control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp
should have a control for adding a new post

## Category View ?cat=<category>
identical to the default view, but filtered to only include posts with the selected category

## Post Detail View (modal)
should show the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score
should list all of the comments for that post, ordered by voteScore (highest first)
should have a control for reordering comments by score or timestamp
should have controls to edit or delete the post
should have a control to add a new comment.
implement comment form however you want (inline, modal, etc.)
comments should also have controls for editing or deleting

## Create/Edit View /post/create  /  /post/<id>
should have a form to create new post or edit existing posts
when editing, existing data should be populated in the form
