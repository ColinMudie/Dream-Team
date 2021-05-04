import React from 'react';

const WhiteKey = ({ whiteKey }) => {
    return (
        <div className="white-key">
            {
                whiteKey.map((item) => {
                    return <div className="w-key" key={item.id}>
                        <h5>
                            <span>{item.keyname}</span>
                        </h5>
                    </div>
                })
            }
        </div>
    );
}

export default WhiteKey;