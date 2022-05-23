const server = async(type) => {
    let data = await fetch(`https://realmod-app.herokuapp.com/${type}`);
    let json = await data.json();
    return json
};

export default server