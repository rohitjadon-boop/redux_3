export const nameChange=()=>{
    return (dispatch)=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json())
        .then((data)=>{
            dispatch({type:"changeName", data:data[Math.floor(Math.random()*10)].name});
        })
    }
}

