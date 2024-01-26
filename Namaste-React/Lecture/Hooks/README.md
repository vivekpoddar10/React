### App Layout
Header
    - logo
    - nav items
Body
    - search
    - food item container
         - food image
         - name, rating
         - price
footer
    - copyright
    - links
    - address
    - contact
 
### File structure
We should structure our file properly
- Keep all the component codes seperately inside a <em>Components</em> folder
- Keep all the source code inside <em>src</em> folder
- Keep all the hard coded things inside seperate folder, don't write them directly inside component or src folder
- Use import and export to use all ready written codes in different files

### Types of Export
There are 2 types of import/ export
- Default: 
    import <em>Component</em> from <em>file_location</em>
    export default <em>Component</em>


- Named Export: 
    import {<em>Component</em>} from <em>file_location</em>
    export const <em>Component</em>

## React Hooks
- Normal JS utility function
- useState()
        - create superpowerfull state variable
        - whenever the state variable changes, react re-render the elements
        - 
- useEffect()

### Reconcilation Algorithm (React Fiber)
- Introduced in React16
- React use Virtual DOM (an object that represents Original DOM)
- whenever the object is changed, it finds the difference between previous VirtualDOM and new VirtualDOM, using <em>Diff Algorithm</em>
- It updates the original DOM i.e. UI