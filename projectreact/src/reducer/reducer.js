import * as actionTypes from './actions';

const intialState={
    studentList:[]
}

const reducer =(state=intialState,action)=>
{
    switch(action.type)
    {
        case actionTypes.ADD:
            console.log(action.payload)
            console.log(state.studentList)
            return {...state ,studentList:state.studentList.concat(action.payload.student)};
    }
}
export default reducer;