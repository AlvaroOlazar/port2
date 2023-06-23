import React from 'react'

export default function Modal({ isOpen, isOpen2, isOpen3, isOpen4, isOpen5, isOpen6, isOpen7, isOpen8, children }) {
    
    const BACKGROUND_STYLE = {
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'rgb(0,0,0, 0.7)',
        zIndex: '1000'
      }
      
      const MODAL_STYLE = {
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '600px',
          height: '400px',
          transform: 'translate(-50%,-50%)',
          backgroundColor: '#fff',
          borderRadius: '10px',
          color: 'black',
      }
      
    if (isOpen) {
        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <div>{children}</div>
                </div>
            </div>
        )
    }else if (isOpen2){    
        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <div>{children}</div>
                </div>
            </div>
        )
    }else if (isOpen3){    
        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <div>{children}</div>
                </div>
            </div>
        )
    }else if (isOpen4){    
        return (
            <div style={BACKGROUND_STYLE}>
            <div style={MODAL_STYLE}>
                <div>{children}</div>
            </div>
        </div>
        )
    }else if (isOpen5){    
        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <div>{children}</div>
                </div>
            </div>
        )
    }else if (isOpen6){    
        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <div>{children}</div>
                </div>
            </div>
        )
    }else if (isOpen7){    
        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <div>{children}</div>
                </div>
            </div>
        )
    }else if (isOpen8){    
        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <div>{children}</div>
                </div>
            </div>
        )
    }

    return null
    }