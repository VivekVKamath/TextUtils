// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextField from './components/TextField';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [mode,setMode] = useState('light'); // Tells if the dark mode is available or not

  const [alert, setAlert] = useState(null);
  
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  } 

  const removeBodyClasses= () =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      // document.body.style.backgroundColor = '#212529';
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled','success');
      document.title= 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title= 'TextUtils is Amazing Mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled','success');
      // document.title= 'TextUtils - Light Mode';
    }
  }
  return (

    //node modules has to be deleted before giving it to some others. These forders can be retrived using package.json and package-lock.json else by installing node in the terminal.

    //jsx code : htmlFor, tabIndex, etc(all in camel case)

    // class is a keyword , className has to be used instead.

    //{} used to pass the variable name which is declared using any sort  of a datatype -- always used in JS.
    
    // html properties can be declared inside the function only, if used during initialization, it would be considered as user inputs.

    //bootstrap: a framework of css used to design. To implement bootstrap, copy the script tag and link tag contents to the index.html file.

    //props: these are properties in react which are used in custom components where we can pass some of the functalities in a component. Can also be used for re-using. 
    
    //proptypes: Prop types are used to define the data type of the component used . Before using proptype, the proptype has to be imported. Default props can also be set

    //export: export from one file and import to another file. Types: named and default

    //filenames has to be in capital letters

    //rfc: react function component

    //state: state is used to update a variable , state belongs to a component. State can not be upadated without using updating functions

    //hooks: hooks are used to use features of class without making class.

    //useState(): a type of hook used to initialize a state by setting some values.

    //event.target.value: used to change a value when the user wants to change the default value

    //react router: used to change the specified component only and not the non specified ones during the navigation to next page. This saves the data of the user as the page doesn't reload . Hence ,  react router is used as the specified component is only changed. To use React router , npm installation is required.

    //useRef: used to control the behavior of the elements
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path='/textfield' element={<TextField showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter" mode={mode}/>}></Route>
      </Routes>
    </div>
    </Router> 
    </>
  );
}

export default App;
