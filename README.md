## Shopping Site Demo

This is a sample application build to replicate a shopping website.

The site is mobile responsive and saves wishlisted items to localStorage for peristance.

#### To Run Locally:
Pull down this repo, `cd` into the repo directory, run `npm install`. Then once all the depenencies are done downloading and built, you can run the project by running `npm run start` 

#### Tech: 
This app was build using React and Styled Components only.

This application was scaffolded using the [Create React App](https://create-react-app.dev/) scaffolding tool to save time setting up the bare boilerplate react app.

#### The Approach:
The this app does not have any navigation
or require a complex state, so no complex app state solutions or even a router were necessary.

The app required there to be modals and a menu stickied to the bottom of the window, so React Portals were used in combination with dynamically appending root nodes to the document body.

The app required some sort persistent of interaction with the data in the form of favoriting certain items. To get past this, mock requests were created using Promise functions and time outs to replicate the load time behind a request.

#### Folder Structure:
__components:__ This folder contains all reuseable components
__hooks:__ This folder contains react hooks helper components.
__pages:__ This folder contains child folders containing an index.js which is the root of the page, and also contains all custom components belonging to that page.
__utils:__ This folder contains utility files, this is really for common tools or miscellaneous files.