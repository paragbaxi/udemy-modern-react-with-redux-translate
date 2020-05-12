import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends Component {
    state = {
        language: 'english',
    };

    onLanguageChange = (language) => {
        this.setState({ language });
    };

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i
                        className="flag us"
                        onClick={() => this.onLanguageChange('english')}
                    />
                    <i
                        className="flag in"
                        onClick={() => this.onLanguageChange('hindi')}
                    />
                </div>
                <ColorContext.Provider value="red">
                    {/* follows whatever is in state so is dynamic */}
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
                {/* follows default value, 'hindi', set as prop */}
                {/* <LanguageContext.Provider value="hindi">
                    <UserCreate />,
                </LanguageContext.Provider> */}
                {/* follows default value set, 'english' in LanguageContext.js */}
                {/* <LanguageContext.Provider value="english">
                    <UserCreate />
                </LanguageContext.Provider> */}
            </div>
        );
    }
}

export default App;
