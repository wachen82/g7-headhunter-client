import React, { createContext, useState } from 'react';

interface SearchValueContextProps {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

export const SearchValueContext = createContext<SearchValueContextProps>({
    searchValue: '',
    setSearchValue: () => {
    },
});

export const SearchValueProvider: React.FC<React.PropsWithChildren<{}>> = ({
                                                                               children,
                                                                           }) => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <SearchValueContext.Provider value={{ searchValue, setSearchValue }}>
            {children}
        </SearchValueContext.Provider>
    );
};
