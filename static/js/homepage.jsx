'use strict';

function Homepage() {
  return (
  <React.Fragment>
    <p>Hi there buddy!</p>
    <p>Check out our <a href="/cards">cards!</a></p>
    <img src="/static/img/balloonicorn.jpg" />
  
  </React.Fragment>

  );

}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
