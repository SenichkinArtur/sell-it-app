import React from 'react';
import style from './ErrorBoundary.module.css';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    
    render() {
        if (this.state.hasError) {
            return (
                <div className={`${style.error_message} flex-grow`}>
                    <h5>Something went wrong.</h5>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
