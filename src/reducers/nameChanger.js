const initialState="Rahul";

const changingName =(state=initialState,action)=>{
    switch(action.type){
        case "changeName":
            return action.data;
            default:return state;
    }
}
export default changingName;