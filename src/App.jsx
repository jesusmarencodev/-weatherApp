import React, {Fragment} from 'react';
import Header from './comnponents/Header';
import Form from './comnponents/Form';

function App() {
  return (
    <Fragment>
        <Header title="Weather ReactApp"/>
        <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col m6 s12">
                <Form/>
                d
              </div>
              <div className="col m6 s12">
                2
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
