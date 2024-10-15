

(function(document, React, ReactDOM) {
    "use strict";
    
    const ReactComponent = ({ title, text }) => {
        return React.createElement("div", { className: "react-component" },
            React.createElement("h1", null, title),
            React.createElement("p", null, text)
        );
    };
    
    function initializeComponent(element) {
        const root = ReactDOM.createRoot(element);
        root.render(
            React.createElement(React.StrictMode, null,
                React.createElement(ReactComponent, {
                    title: element.dataset.title,
                    text: element.dataset.text
                })
            )
        );
    }
    
    // Initialize all react components on the page
    document.addEventListener("DOMContentLoaded", function() {
        const elements = document.getElementsByClassName("react-component");
        Array.from(elements).forEach(initializeComponent);
    });
    
})(document, React, ReactDOM);