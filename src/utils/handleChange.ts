export const handleChange = (panel: string, setExpanded: React.Dispatch<React.SetStateAction<string | false>>) => () => {
    setExpanded((prevExpanded) => (prevExpanded === panel ? false : panel));
};
