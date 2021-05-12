import React from 'react';
import './Presets.css';

const SavePreset = () => {
    return (
        <div className="savePreset-btn">
            <div 
            className="dd-header" 
            role='button'
            >
                <div className="savePreset-title">
                    <p className="dd-header_title--bold">Create New Preset</p>
                </div>
            </div>
        </div>
    );
}

export default SavePreset;