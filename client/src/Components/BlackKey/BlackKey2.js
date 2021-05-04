import React from 'react';

const BlackKey2 = ({ blackKey2 }) => {
    return (
        <div className="black-key2">
            {
                blackKey2.map((item) => {
                    return <div className="b-key" key={item.id}>
                        <h5>
                            <span>{item.keyname}</span>
                        </h5>
                    </div>
                })
            }
        </div>
    );
}

export default BlackKey2;