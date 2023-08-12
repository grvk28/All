//3 marks
//useState useEffect useMemo useContext

//do by own, hint or typing

import React from "react";
import Home from "../../projects/home";
import { useContext } from "react";
import UseCaseAnimation from "./usehooks/useEffect3";
import UseCaseFetchApi from "./usehooks/useEffect0";
import UseCaseInputValidation from "./usehooks/useEffect1";
import UseCaseUpdateFetch from "./usehooks/useEffect4";
import UseCaseUpdateApi from "./usehooks/useEffect5";
import UseCaseLiveFilter from "./usehooks/useEffect2";
import { useReducer } from "react";


function Hooks(){
    let Pro=useContext('gauty')
    let iv=[
        {
            id:1,
            name:'gaurav',
            age:22,
            admin:true
        },
        {
            id:2,
            name:'saurav',
            age:24,
            admin:false
        },
        {
            id:3,
            name:'kaurav',
            age:28,
            admin:true
        }
    ]
    const [state,dispatch]=useReducer(reducerMthd,iv)

    const reducerMthd=(users,action)=>{
        switch(action.type){
            case 'addUser': {
                return [
                    ...users,
                    action.newUser
                ]
            }
            case 'updateUser': {
                return users.map(user => {
                    if(user.id == action.updatedUser.id)
                        return action.updatedUser
                    return user;
                })
            }
            case 'deleteUser': {
                return users.filter(user => user.id !== action.id)
            }
            default: {
                // Handle error here
            }
        }

        const handleAddUser = (user) => {
            dispatch({
                type: 'addUser',
                newUser: user
            })
        }
        const handleUpdateUser = (updatedUser) => {
            dispatch({
                type: 'updateUser',
                updatedUser: updatedUser
            })
        }
        
        const handleDeleteUser = (userId) => {
            dispatch({
                type: 'deleteUser',
                id: userId
            })
        }
        
    }
    return(
        <div>
            
            <Home/>
            Hooks SECRMCILD
            useState useEffect useContext useReducer useRef useMemo useCallback 
            useImperativevalue useLayoutEffect use
            <div>1. useState 
                <div>A.uses: form control</div>
                <div>B. display rates controlled by db</div>
                <div>C. State management</div>
                <div>D. Conditional rendering</div>
                <div>E. Toggle flags (true/false)</div>
                <div>F. Counter</div>
                <div>G. Get API data and store it in state</div>
            </div>
            <div></div>
            <div>
                2. useEffect usecases
            <div>A. Running once on mount: fetch API data; declaring a function and calling inside useEffect</div>
            <div>B. Running on state change: validating input field</div>
            <div>C. Running on state change: live filtering</div>
            <div>D. Running on state change: trigger animation on new array value(Skkipping Effect)</div>
            <div>E. Running on props change: update paragraph list on fetched API data update</div>
            <div>F. Running on props change: updating fetched API data to get BTC updated price</div>
            
            <UseCaseFetchApi/>
            <UseCaseInputValidation/>
            <UseCaseUpdateFetch/>
            <UseCaseUpdateApi/>
            <UseCaseLiveFilter/>
            </div>
            <div>3.useContext 
                <div>
                    <div>global state</div>
                    <div>theme</div>
                    <div>application configuration</div>
                    <div>authenticated user name</div>
                    <div>user settings</div>
                    <div>preferred language</div>
                    <div>a collection of services</div>
                </div>
            </div>
            <div>4. useReducer </div>
            <>Examples: stopwatch</>
            <>const [users,dispatch] = useReducer(reducermtd,usrdata)</>
            {/* <UsersList users={users}
           handleUpdateUser={handleUpdateUser}
           handleDeleteUser={handleDeleteUser}
               />
            <AddUserForm handleAddUser={handleAddUser} /> */}
            <div>4ii.   useRef</div>
            <>Uses: Managing focus, text selection, or media playback</>
            <div>5. useMemo </div>
            <>
            const myComponent = React.memo((props) => {
    /* render using props */
});

export default myComponent;
const myComponent = (props) => {
    /* render using props */
};

export const MemoizedComponent = React.memo(myComponent);

const calculation = useMemo(() => expensiveCalculation(count), [count]);
</>
            <div>6. useCallback </div>
            <>the usecallback hook is used when you have a component in which a child is rendering repeatedly without the need for it</>
            <>
            {/* const incrementAge = useCallback(() => {
            setAge(age + 1);//child comp
            }, [age]); useCallback() is similar to useMemo() but it memorizes functions instead of values, which makes your application run faster by preventing re-creations. */}
            </>
            <div>7. useImperativevalue </div>
            <div>8. useLayoutEffect</div>
            
        </div>
    )
}

export default Hooks;