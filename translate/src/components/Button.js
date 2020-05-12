import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
    // required by this.context
    // static contextType = LanguageContext;

    renderSubmit(value) {
        // value is 'english' from LanguageContext.js default
        return value === 'english' ? 'Submit' : 'Karo';
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {/* Inline example */}
                    {(value) => (value === 'english' ? 'Submit' : 'Karo')}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        // 'english' since it's the default
        // console.log(this.context);
        //
        // use this.context
        // const text = this.context === 'english' ? 'Submit' : 'Karo';
        // return <button className="ui button primary">{text}</button>;
        //
        // use Consumer component
        return (
            <ColorContext.Consumer>
                {/* helper function */}
                {this.renderButton}
            </ColorContext.Consumer>
        );
    }
}

// {
//     /* inline example */
// }
// {
//     (color) => (
//         <button className={`ui button ${color}`}>
//             <LanguageContext.Consumer>
//                 {/* Inline example */}
//                 {/* {(value) => (value === 'english' ? 'Submit' : 'Karo')} */}
//                 {this.renderSubmit}
//             </LanguageContext.Consumer>
//         </button>
//     );
// }

export default Button;
