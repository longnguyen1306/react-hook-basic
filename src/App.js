import logo from './logo.svg';
import './App.css';
import Nav from "./views/Nav";

const App = () => {
    let name = 'Long Nguyễn Dương';
    let number = 2022;

    return (
        <div className="App">
            <Nav />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>Hello world with {name} - {number}</h1>
            </header>
        </div>
    );
}

export default App;
