import React, { Component } from 'react';

// 'english' is default
// const context = React.createContext('english');

// console.log(context);

// export default context;

// export default React.createContext('english');

const Context = React.createContext('english');

export class LanguageStore extends Component {
    state = { language: 'english' };

    onLanguageChange = (language) => {
        this.setState({ language });
    };

    render() {
        return (
            <Context.Provider
                value={{
                    ...this.state,
                    onLanguageChange: this.onLanguageChange,
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;
