    const regexSearch = (str, pattern) => {
        const regexPattern = pattern.replace(/[%]/g, '.*').replace(/[_]/g, '.').replace(/[.*+?^=!:${}()|\[\]\/\\]/g, '\\$&');
        const regex = new RegExp(`${regexPattern}`, 'i'); 
        return regex.test(str);
    };

    const handleSearch = () => {
        if (searchBook == "") {
            return
        }
        setLoader(true)
        setShowSearchBtn(false)
        const data = backUpData.filter((v) => regexSearch(v.label, searchBook) && v); 
        setPublisherData(data)
        setLoader(false)
    }
