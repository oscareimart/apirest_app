const setOrderStringUrl = (str) => {
    let newStr = str.split(",")
    console.log(newStr);
    return newStr.map(e => e.replaceAll("[[", " ").replaceAll("]]", " ").replaceAll(" ", "").split('|'))
}

const setAttrStringUrl = (str) => {
    let newStr = str.replaceAll("[", "")
        .replaceAll("]", "")
    return newStr.split(",")
}

module.exports = {
    setAttrStringUrl, setOrderStringUrl
}