//creating element
//  const heading=React.createElement("h1",
//  {id:"heading",
//   xyz:"abc"
// },"heelo")
//heading=js object,react element which hsve props as key,key=atrributes+children
//creatingroot where react id to run or element is to be inserted
//nested html structure
//  <div id="parent">
//         <div id="child">
//             <h1>i m h1 tag</h1>
//             <h2>i m h2 tag</h2>
//         </div>
//         <div id="child2">
//             <h1>i m h1 tag</h1>
//             <h2>i m h2 tag</h2>
//         </div>
//     </div>
const heading = React.createElement("div", {
    id: parent
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "i m h1 tag"),
        React.createElement("h2", {}, "i m h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "i m h1 tag"),
        React.createElement("h2", {}, "i m h2 tag")
    ])
]);
//will use jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
//finally adding.rendermethod convert object into h1 tag and put inside root (dom)
root.render(heading) //render will replace content inside root
 //react is a library ,applied to some part of code,can be used on existing application,not a framework
 //
;

//# sourceMappingURL=index.7c0ccee6.js.map
