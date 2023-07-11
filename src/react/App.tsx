import React from 'react';

const App = () => {

    const myStyle = {
        color: 'azure',
        fontSize: 40,
    }

    return (
        <>
            <main className="block">
                <div className="container">
                    <div className="cube" id="c1"></div>
                    <div className="platform">
                        setTimeout (setInterval)
                    </div>
                </div>
    
                <div className="container">
                    <div className="cube" id="c2">
                        <i className="myfont-camera" style={myStyle}></i>
                    </div>
                    <div className="platform">
                        requestAnimationFrame
                    </div>
                </div>
    
                <div className="container">
                    <div className="cube" id="c3">
                        <i className="myfont-idea" style={myStyle}></i>
                    </div>
                    <div className="platform">
                        keyframes
                    </div>
                </div>
    
                <div className="container">
                    <div className="cube" id="c4">
                        <i className="myfont-clock" style={myStyle}></i>
                    </div>
                    <div className="platform">
                        builtin
                    </div>
                </div>
            </main>

            <div className="block" id="block2">
                <p>Hello!</p>
            </div>
        </>
    );
};

export default App;