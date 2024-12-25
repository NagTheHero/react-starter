const parent = React.createElement(
  "div",
  { id: "Parent" },
  React.createElement("div", { id: "Child" }, [
    React.createElement("h1", {}, "hello WOrld"),
    React.createElement("h2", {}, "From Me"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
