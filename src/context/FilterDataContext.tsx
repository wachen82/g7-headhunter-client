import React, { createContext, useState } from 'react';

export interface FilterProps {
    params: string;
    setParams: (value: string) => void;
}

export const FilterDataContext = createContext<FilterProps>({
    params: '',
    setParams: () => {},
});

export const FilterDataProvider: React.FC<React.PropsWithChildren<{}>> = ({
                                                                      children
                                                                  })=> {
    const [params, setParams] = useState('')
    return (
        <FilterDataContext.Provider value={{params, setParams}}>
            {children}
        </FilterDataContext.Provider>
    );
};
