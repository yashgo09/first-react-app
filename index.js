const container = React.createElement("div", { className: "container" }, [
  React.createElement("h1", { key: "1" }, "Hello"),
  React.createElement("div", { key: "2" }, [
    React.createElement("p", { key: "1" }, "I am Paragraph1"),
    React.createElement("p", { key: "2" }, "I am Paragraph2"),
  ]),
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(container);
