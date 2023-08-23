const parent = React.createElement("div", {id:"parent"},  //parent
React.createElement("div", {id:"child"},                  //child
[React.createElement("h1", {}, "I am H1 Tag!"),           //child
React.createElement("h2", {}, "I am H2 Tag!")]            //child sibling
) );         
// When more than 2 element then make an Array
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);