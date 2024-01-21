
# Episode 2

- <strong>npm</strong> manages the packages for us.

- To initiate <strong>npm</strong> in our project, use command <strong>npm init</strong>. It will create a <em>package.json</em> file for us

- <strong>Bundlers</strong> manages project dependencies, combine them into single file so that they can be easily deployed. I am using <strong>parcel</strong>

    ### What does Parcel do?
    - Build the app
    - create local server
    - gives HMR - 'Hot Module Replacement' by using 'File Watching Algorithm' to auto refresh the web page correspondence to change in source code.
    - Faster build by using caching
    - Image optimization
    - Minification of our file
    - Bundle and compresses the file
    - Consistent hashing
    - Differential bundling - create bundle for older version, so that project can be run on older browsers
    - Host the webapp on 'https'

- to install <em>parcel</em> in development environment use command <strong>npm install -D parcel</strong>

- it will <em>update</em> our <em>package.json file</em> by adding <em>devDependencies</em> which contain the <em>'parcel' version</em>. Ahead of parcel version there may be two symbol
    - caret(^) - it denotes that the 'parcel' version will be automatically updated to all major/minor releases.
    - tilde(~) - it denotes that 'parcel' version will be automatically updated for only major releases.

- one more file <em>package-lock.json</em> will be created which will store all the <em>records of our project at the time of creation</em>.

- when we install 'parcel', all the node modules are downloaded to our project. This happens because 'parcel' has its own dependencies and those dependencies have their own dependencies and so on. This is called 'Transitive dependency'.

- We should put all the <em>node_module</em> inside <em>.gitignore</em> as it will unneccessary make our code bulky, and they can be regenerated using command 'npm install'

- Instead of using <em>CDN</em> links for <em>React</em> and <em>ReactDOM</em>, us can install <em>React</em> and <em>ReactDOM</em>, inside our <em>node_module</em>
    - for react, use <strong>npm install react</strong>
    - for react dom, use <strong>npm install react-dom</strong>

- Then import these inside the .js file
    - <em>import React from 'react'</em>
    - <em>import ReactDOM from 'react-dom/client'</em>

- As we are importing module inside .js file, we will get an error, to fix this, add <em>type="module" inside the <em>script</em> tag in html file where wwe inject the js file

- To build the project using <em>parcel</em> use command <strong>npx parcel <em>index.html</em></strong>'.

- To build the project for production using <em>parcel</em> use command <strong>npx parcel build <em>index.html</em></strong>'.



