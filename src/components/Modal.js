import React, { Component } from 'react';
import Portal from '../Portal';

class Modal extends Component {
    render() {
        const { children, toggle, active, titleModal } = this.props;
        return (
            <Portal>
                {active && (
                    <div className="modal-content">
                        <div className="modal-header">
                            <span onClick={toggle} className="close">&times;</span>
                            <h2>{titleModal}</h2>
                        </div>
                        {children}
                        <div className="modal-footer">
                            <h3>&#128122;</h3>
                        </div>
                    </div>
                )}
            </Portal>
        )
    }
}


export default Modal; 