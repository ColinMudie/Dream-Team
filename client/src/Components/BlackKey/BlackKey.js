import React from 'react';

const BlackKey = ({ blackKey }) => {
    return (
        <div className="black-key">
            {
                blackKey.map((item) => {
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

export default BlackKey;