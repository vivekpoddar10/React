## Routing

### react router dom

We will use react-router-dom library for routing different components

- createBrowserRouter - It is a function which takes an array of object which contains two key-value pair: path, element

  - path specifies the routing path
  - element specifies what should happen for that routing
  - e.g: const router = createBrowserRouter
     

- RouterProvider - We have defined the different router, but to use them we have to render all the routers
    - to render all the routers, we have to import an element called <em>RouterProvider</em>
    - so, instead of rendering one element is app.js, render the router array returned from <em>createBrowserRouter</em>
    - e.g. root.render(RouterProvider router={router})

- useRouteError
  - use to dynamically show the errors

- Outlet
  - use to dynamically route components
  - e.g: {Header}{Outlet}{Footer}
    - header and footer will remain present on every route, routing component will be replaced by the outlet

- useParam
  - It helps to use the parameter passed in the url
  - e.g. url: localhost:1234//restaurant/resId
    - resId can be fetched and used in the code by useParam
    - const {resId} = useParam();
  useParam returns an object containing the parameter


## Types of routing:
- server side routing - 
- client side routing - happens in react, i.e. all the information are loaded, whenever we clicks on some link to external page, it is routed to that page. Only certain block is changed i.e. whole page is not loaded
