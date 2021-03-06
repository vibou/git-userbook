This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
#The Git UserBook Project

## Implementation Steps

1. Start implementation of autocomplete component and its controller
The aim here is to have a code as clean as possible while seperating as
much the models from the views.
    The  AutoComplete controller is therefore responsible for all the logic
    behind the autocomplete process. The Autocomplete component is just displaying
    the result.
<br />
2. Implement the Request from GIT User Search API and deal only with the simple
case
<br />
3. Now that the normal use case is working, I take care of limit cases such as no result and too many request
<br />
4. The TooManyRequest use case is more complex to deal with. One way would be to retry the request after a certain amount of time. However if the field changes in between the new value has to be considered.

    After some testing, it appears that a fairly high amount of time is required to unlock the rate limit. I also discovered that an api endpoint was available to check the state of the limit. This endpoint is not restricted. It gives the timestamp in second where the API endpoint search is going to be available again.

    <br />

    So I decided to disable the input field untill this timestamp is reached. In addition a message has to be displayed so that the user understand why the field is blocked.
<br />
5. All Features are implemented
        - start time: <tt>Wed May 15 18:54:16 2019 +0200</tt>
        - end time: <tt>Wed May 15 20:03:02 2019 +0200</tt>

<br />
6. The idea now is to add some CSS to cheer everything up

        - Add CSS and Bug Fix: retry search after too many request timed out.
        - Add Capability to select an item from auto complete list.

Finish Exercise: <tt>Wed May 15 20:39:11 2019 +0200</tt>

## Implementation Timeline
- Main Feature Implementation (with all controls): 01H09
- CSS and Extra Feature / Bug Fix: 00H36
**Total Time spent: 01H45**



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
