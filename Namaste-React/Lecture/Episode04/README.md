### props

### config driven UI

### Why Do we need to pass unique key while rendering a component using map
- If we do not pass unique keys to component, if the position of any component changes, React will render all the component
- But when we pass unique key to component, then React only render the new component, it not render the existing component to the ReactDOM. Hence it optimizes the code. 