import logo from './logo.svg';
import './App.css';
import './login.py';
import React, {useState, useEffect} from 'react' 

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  const [data, setData] = useState([{}]);
  const [inputFrom, setInputFrom] = useState("");
  const [inputTo, setInputTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  // useEffect(() => {
  //   // Fetch data from the backend when the component mounts
  //   fetch(`/members?from_location=${inputFrom}&to_location=${inputTo}&departure_date=${departureDate}&return_date=${returnDate}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data.result);
  //       console.log(data.result);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, [inputFrom, inputTo, departureDate, returnDate]);

  const handleFromChange = (e) => {
    setInputFrom(e.target.value.toUpperCase());
  };

  const handleToChange = (e) => {
    setInputTo(e.target.value.toUpperCase());
  };

  const handleDepartureDateChange = (e) => {
    setDepartureDate(e.target.value);
  };

  const handleReturnDateChange = (e) => {
    setReturnDate(e.target.value);
  };

  const handleSearch = () => {
    // Perform the search logic, e.g., update state or perform any other necessary actions based on the search results
    fetch(`/members?from_location=${inputFrom}&to_location=${inputTo}&departure_date=${departureDate}&return_date=${returnDate}`)
    .then((res) => res.json())
    .then((data) => {
      // Update the state or perform any other necessary actions based on the search results
      setData(data);
      console.log(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  };

  // useEffect(() => {
  //   fetch("/members").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log(data);
  //     }
  //   )
  // }, [])

  // const [inputText, setInputText] = useState("");
  // let inputHandler = (e) => {
  //   //convert input text to lower case
  //   var upperCase = e.target.value.toUpperCase();
  //   setInputText(upperCase);
  // };

  return (
    <div className="App">
      
      <header className="App-header">
        
        <p>
        <h1>PLANE TICKET PRICES</h1>
        <h2></h2>
        
        <div className="search_from">
          <p>From:</p>
        <input type="text"
          id="outlined-basic"
          onChange={handleFromChange}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>

      <div className="search_to">
          <p>To:</p>
        <input type="text"
          id="outlined-basic"
          onChange={handleToChange}
          variant="outlined"
          fullWidth
          label="Search"
        />
        </div>
        <div className="departure_date">
          <p>Departure Date:</p>
        <input type="text"
          id="outlined-basic"
          onChange={handleDepartureDateChange}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>

      <div className="return_date">
          <p>Return Date:</p>
        <input type="text"
          id="outlined-basic"
          onChange={handleReturnDateChange}
          variant="outlined"
          fullWidth
          label="Search"
        />
        </div>


        <button onClick={handleSearch}>SEARCH
        </button>
        
        
         
        </p>
        <p>
          
        </p>
        
        {(typeof data.result === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          <div style={{ display: 'flex' }}>
            {data.result.map((member, i) => (
              <p key={i} style={{ marginRight: '15px' }}>{member}</p>
              
            ))}
          </div>
        )}
        <img src="https://media.cntraveler.com/photos/5b47bf2c4b1b564ac0e61d76/1:1/w_1040,h_1040,c_limit/CNT_Intel_Plane%20Tickets_072018_TM%20Detwiler.jpg" 
        width="400"
        height="400"/>
      </header>
      

    </div>
  );
}

export default App;
