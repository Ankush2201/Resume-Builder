import React, { createContext, useState } from 'react';

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
    const [pageSize, setPageSize] = useState('A4');
    const [font, setFont] = useState('Arial');
    const [themeData, setThemeData] = useState({}); // Your existing state

    return (
        <ResumeContext.Provider value={{ pageSize, setPageSize, font, setFont, themeData, setThemeData }}>
            {children}
        </ResumeContext.Provider>
    );
}

export default ResumeContext