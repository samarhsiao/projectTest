/** Please write the sample code to debounce handleOnChange (Do not use
any 3th party libs other than react) **/
const SearchBox = () => {
    handleOnChange = (event) => {
        clearTimeout(timer)
        const timer = setTimeout(() => {
            // make ajax call
        }, 800);
    };
    return <input type="search" name="p" onChange={handleOnChange} />;
};