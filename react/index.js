'use strict';
let ce = React.createElement;

function TableRow(props) {

}

function TableBody(props) {

}

function TableCaption(props) {
  return ce("caption", null, props.caption)
}

function TableHeader(props) {
  let h = [];
  for (let idx of props.headers)
  {
    h.push(ce("th", {key:idx}, props[idx]))

  }
  return h;
}

function MakeTable(props) {
  let caption;
  let header;
  let body;
  
  if (props.caption) {
    caption = ce(TableCaption, {caption:props.caption});
    
  }
  
  if (props.headers) { 
    header = ce(TableHeader, {headers:props.headers});
  }
    
  body = ce(TableBody,props.data); 
    
    
  return React.createElement('table', null,'', caption, header, body);
}

let myProps1 = {
  caption : "People",
  headers : ["First","Last","Birthday","Address"],
  data: people,  
};


let myProps2 = {
  headers : [
    "City",
    "Date",
    "Temp (F)",
    "Humidity (%)",
    "Wind Speed (mph)",
    "Wind Direction",
    "Condition",
    "Precipitation (in)"
    ],
  data: weather,  
};
const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MakeTable, myProps2));


