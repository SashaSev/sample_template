import React, {Component, Suspense} from 'react';
import Page1 from "./components/Page1";

import './App.css';
// import Page2 from "./components/Page2";
// import AsyncComponent from './components/asyncComponent';
const Page2lazy = React.lazy(() => import('./components/Page2'));
const Page3lazy = React.lazy(() => import('./components/Page3'));

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: 'page1'
        }
    }


    onRouteChanges = (route) => {
        this.setState({
            route: route
        })
    };

    render() {
        const {route} = this.state;
        if (route === 'page1') {
            return <Page1 onRouteChanges={this.onRouteChanges}/>
        } else if (route === 'page2') {
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <Page2lazy onRouteChanges={this.onRouteChanges}/>
                </Suspense>
            )
        } else if (route === 'page3') {
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <Page3lazy onRouteChanges={this.onRouteChanges}/>
                </Suspense>
            )
        }
    }
}

export default App;
