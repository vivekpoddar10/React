### File structure
We should structure our file properly
- Keep all the component codes separately inside a <em>Components</em> folder
- Keep all the source code inside <em>src</em> folder
- Keep all the hard coded things inside separate folder, don't write them directly inside component or src folder
- Use import and export to use all ready written codes in different files

### Types of Export
There are 2 types of import/ export
- Default: 
    - export default <em>Component</em>
    - import <em>Component</em> from <em>file_location</em>


- Named: 
    - export const <em>Component</em>
    - import {<em>Component</em>} from <em>file_location</em>

### Reconciliation Algorithm (React Fiber)
- Introduced in React16
- Incremental Rendering - split rendering work into chunks
- React use Virtual DOM (an object that represents Original DOM)
- whenever the object is changed, it finds the difference between previous VirtualDOM and new VirtualDOM, using <em>Diff Algorithm</em>
- It updates the original DOM i.e. UI

### Signal Responsibility Project

### How React (UI) connects to other services in microservices
There are two ways:
    - Page Load -> API Call, wait for data to come -> render the element
    - Page Load -> render all the basic element -> API Call -> re-render the element with the data

React uses the second approach

## React Hooks
- It is a normal JS utility function
- It is mainly of two type
- useState()
        - create super powerful state(or static) variable
        - whenever the state variable changes, react re-render the elements
        - if we use normal variable (let), whenever the value will change, variable will store the updated value but the change will not be displayed.
        - syntax: const [item, setItem] = useState([]);
        - useState() return a array of length 2
            - at 0 index, the default value by which the variable is initialized. In this case, an empty array
            - at 1 index, setter function, which will trigger the change in value and render the change
- useEffect()
        - @param (callback function, dependency array)
        - it is use to call the callback function after all the element are rendered
        - if we don't specify the dependency array, element will be rendered at each change
        - if we specify empty dependency array, element will be rendered only once.
        - if we specify the dependency, element will be rendered each time the dependency element changes.

- hooks should be declared in global scope