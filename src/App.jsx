import React, {Fragment, useState, useEffect} from 'react';
import Header from './comnponents/Header';
import Form from './comnponents/Form';
import Weather from './comnponents/Weather';
import Error from './comnponents/Error';

function App() {  
  const [search, setSearch] = useState({
    city: '',
    country: ''
  });

  const [consult, setConsult] = useState(false);
  const [reaction, setReaction] = useState({});
  const [error, setError] = useState(false);

  //apply destructuring
  const { city, country} = search;

  //use Effect
  useEffect(() => {
      //consulting API
      const consultingAPI = async () => {
        if(consult){
          const appId = '9fd35b9802a9d46cb6e17671885a9561';
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
          
          const response = await fetch(url);
          const result = await response.json();

          setReaction(result);
          setConsult(false);
          //Detenting if response is 404 error
          if(reaction.cod === '404'){
            setError(true);
          }else{
            setError(false);
          }
        }
      }
      consultingAPI();
      // eslint-disable-next-line
  }, [consult])
  let component;
  if(error){
    component = <Error message="Result not found"/>
  }else{
    component = <Weather reaction={reaction}
  />
  }

  return (
    <Fragment>
        <Header title="Weather ReactApp"/>
        <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col m6 s12">
                <Form
                  search={search}
                  setSearch={setSearch}
                  setConsult={setConsult}
                />

              </div>
              <div className="col m6 s12">
                {component}
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
