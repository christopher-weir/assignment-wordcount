## Assignment

You can view a live version [here](https://unomaly-assignment-app-cweir.now.sh/), you can also view the [src](https://unomaly-assignment-app-cweir.now.sh/_src). This isnt a prod server so it may take a bit to startup if its frozen from downtime.

## Getting started

I have tested this with node 8 and 10. Im not sure if it will work on node 6.

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `npm run build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimises the build for the best performance.

### `npm run start`

Starts the application in production mode.
The application should be compiled first.

## Packages of note used in the app

[Next.js](https://nextjs.org/) which is a lightweight framework for static and server‑rendered applications. I have been using this recently its pretty fun to play with and I thought it would be cool to get it working with sockets.
To save time I bootstrapped the app with [Create Next App](https://github.com/segmentio/create-next-app).<br>

For charting [Chart.js](https://www.chartjs.org/) with [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2) as a react wrapper for it.<br>

[tachyons](https://tachyons.io/) As a css framework. I was bored using bootstrap and thought this looked cool.

## Philosophy

I generally try to keep my react apps as simple as possible, by keeping a single source of truth for the state, in this case in the page container. Then filtering props down to stateless components. As this is a pretty minimal app redux seemed overkill.<br><br>
I wanted to keep the design clear by giving the user some basic stats. Showing the most frequent vs least frequent words, a simple feed showing the incoming words and finally a grouped list of the totals.
