// SOURCE
// https://react-redux.js.org/api/provider

// Provider makes the Redux store available to any nested components that are wrapped in the connect() function
// - Typically <Provider> is at the top-level, with the entire app's component tree inside of it
// - <Provider> allows for the use of connected components

// Props
// 1. Store (Redux Store) -- Required
//      - The single Redux store in the application
//
// 2. chidlren (reactElement) -- Required
//      - Root of the component hierarchy
//
// 3. context -- Optional
//      - If provided, must provide the same context instance for ALL of the connected components as well.
//      - Otherwise, might result in some runtime error.
