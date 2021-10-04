import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App/App'

declare global {
    interface Window {
        api? : any
    }
}

ReactDOM.render(<App />, document.getElementById('root'));