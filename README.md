Skills

    Proficient with Javascript, Typescript, React and application state management
    Understanding of how to consume RESTful APIs
    Working knowledge of UI/UX best practices to create an intuitive, usable interface
    Proficiency with CSS to style application

Requirements

Rivet has developed a RESTful API for it's employee directory. You will create a simple, usable, single page React application to view, add and update employees in this directory. The API requires an access token which you will be provided by email.

### Your solution should satisfy the following requirements:

- [x] Allow all employee profiles to be viewed on a single screen
- [x] Allow a single employee profile to be viewed
- [x] Allow a new employee profile to be created
- [x] Allow an existing employee profile to be updated

### Endpoints

The following endpoints have been provided to complete your task:

**Get all employee profiles:**

    GET https://codechallenge.rivet.work/api/v1/profiles

**Get single employee profile:**

    GET https://codechallenge.rivet.work/api/v1/profile/{id}

**Create new employee profile:**

    POST https://codechallenge.rivet.work/api/v1/profile

**Update existing employee profile:**

    PUT https://codechallenge.rivet.work/api/v1/profile/{id}


Profile Data Structure


Profiles have the following JSON data structure:

{
    "first_name": "string / 255 char max / required",
    "last_name": "string / 255 char max / required",
    "phone": "string / 255 char max / required",
    "email": "string / 255 char max / required",
    "address": "string / 255 char max / required",
    "city": "string / 255 char max / required",
    "state": "string / 255 char max / required",
    "zip": "string / 255 char max / required",
    "photo": "string / 255 char max / URL to image file",
    "notes": "string / 4GB max"
}


## Deliverable MVP

You will use React to create a single page application (SPA). Once complete, email a link to a public git repo or zipped version of your application (Dropbox, Google Drive, OneDrive, etc) and provide instructions on how to build and run your solution to Andy Lawrence at andy@rivet.work.
## Considerations Stretch

    Your solution should make use of ES6 Javascript techniques such as promises, classes and arrow functions (where appropriate).
    Bonus points for using Redux Toolkit for state management
    Readable code will be favored over clever, confusing code.
    The optional image field only takes a URL string. If you want to add a profile image, you will need to figure out how to host it yourself.
    Get creative! Engaging micro-interactions, animations and bold design choices are encouraged.

Happy Coding 🤓