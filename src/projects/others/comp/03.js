import { createStoreHook } from "react-redux";

function Third(){
    return(
        <div className="middle">
            <div className="ThreeHead"></div>
            <div></div>
            <div className="Four-one">
                <div className="bold">Checklist:</div>
                <div>
                    <div>1. Why Redux?</div>
                    <div>2. Fetching Data and Setting state
                        in a React Class Component vs Using Redux 
                        and Hooks to do the same thing.
                    </div>
                    <div>
                        3. Deep dive into the Redux Provider and
                        the "Store"(ft. Reducers & Hooks)
                    </div>
                </div>
            </div>
            <div>
                <div className="bold">So, Why Redux?</div>
                <div>
                    It is typical in React to use a class component to 
                    declare your applications state, passing this down 
                    to each child component indivdually. As 
                    straight forward as this may be,
                    it will take a profuse amount of planning
                    ahead to minimize your time spent
                    restructuring and fixing bad practices in your app.
                </div>
                <div className="rtc"></div>
                <div className="abx">
                    Left: Regular State Hierarchy Right: How redux helps
                </div>
                <div>
                    In the figure above, state is normally passed from 
                    top to bottom while Redux allows you to have a direct
                    relationship. It does so by saving your state in a "Store"
                    that you can access regardless of where you are in your
                    application.
                </div>
            </div>
            <div>
                <div className="bold">Example: Normal Fetching in Class Component</div>
                <div>Fetching Data:</div>
                <div style={{height:'400px'}}></div>
                <div className="abx">This method requires a class component where you will define your 
                    state as an object, fetch the data after the component mounts,
                    and directly pass down this.state.data to its children components.
                </div>
                <div className="bold">Accsessing Fetched Data in Child Component:</div>
                <div style={{height:'200px'}}></div>
                <div className="abx">Our function component then has to access its own properties(props)
                    to display the passed data.
                </div>
                <div className="bold">Example: Fetching in Functional Component using Hooks and Redux</div>
                <div>Fetching Data in Redux:</div>
                <div className="abx">Instead of ComponentDidMount we will fetch inside of our useEffect Hook
                    (think of this hook as ComponentDidMount,componentDidUpdate, and componentWillUnmount
                    combined.) Our dispatch Hook then sends our new state of tasks from our API to our Store
                    (we will talk about this in a second).
                </div>
                <div>Accessing Data in Redux:</div>
                <div style={{height:'300px'}}></div>
                <div className="abx">When accessing data we saved from the API,
                    we will need help from the useSelector Hook.
                    We verify which which part of state we want
                    our Selector Hook to obtain, and then set it to 
                    a variable in order to access and manipulate later in 
                    the the component.

                </div>
                <div className="bold">Breaking it all down:Provider and the "Store"</div>
                <div style={{height:'150px'}}></div>
                <div>
                    In the Fetch example we dispatched our api data and selected it using hooks.
                    In order for each of these to work we will need to create a redux store and use it in our
                    Provider wrapper. The store contains a tree of all the state in our
                    application and our Provider tag is the bridge that gives our application access to this store.
                </div>
            </div>
            <div>
                <div>Syntax:</div>
                <div>
                    {/* import {createStore} from 'redux'
                    import {Provider} from 'react-redux'
                    import reducers from './reducers'
                    export default function App(){
                       ' const store =createStore(reducers)
                       ' return('
                            '<Provider store={store}>'
                           '     <ExampleComponent/>'
                            '</Provider>'
                      '  )'
                    '}' */}
                </div>
                <div>As you see our store takes in an argument for imported
                    reducers that allow us to manipulate and change this state. 
                    Anything wrapped in the Provider tag will have
                    access to our store.
                </div>
            </div>
            <div>
                <div className="bold">Reducers- Dispatch's Significant Other</div>
                <div>Example 1:</div>
                <div>
                    {/* const stateReducer = (currentState,action)=>{
                        //dictate what newState returns
                        return newState
                    } */}
                </div>
                <div>Example 2:</div>
                <div>
                    {/* const counterReducer=(phrase,action)=>{
                        if(action.type==='SAY_HI'){
                            return 'Hiiiii';
                        }
                        if(action.type==='SAY_BYE'){
                            return "Byeee";
                        }
                        return phrase;
                    } */}
                </div>
            </div>
            <div>
                Reducers are pure functions(functions that return the same value without changing
                global variables or modifying its arguments) that use their action argument to dictate
                their return value. In the case of controlling state, we are able to use our
                dispatch hook request data,but they need to have matching type keys in order for the 
                reducer to provide the correct information.
            </div>
            <div className="bold">A Typical Dispatch/Reducer Relationship:</div>
            <div>Dispatch Function and Object</div>
            <div>
                {/* import {useDispatch} from 'react-redux';
                const dispatch = useDispatch();
                dispatch({type:'SET_TASKS',todo:tasks}) */}
                //tasks = fetched api data you are sending to your redux method
                Our Reducer method would look something like:
                {/* const taskReducer = (state=[],action) =>{
                    switch(action.type){
                        case 'SET_TASKS':
                            return action.todo
                        default:
                            return state
                    }
                } */}
            </div>
            <div>
                In this scenario we are using the dispatch function,imported from redux, to sending
                an action to the taskReducer. The task reducer then verifies the objects type key
                before returning the specifevalue or the default value in the opposite case.
                Referencing the fetch example above, the reducer will return an array of tasks or the 
                empty array we set to 'state'.
            <div>Key Note: do not continue to use switch-case statements if you can separate it into
                an entirely different reducer function.
           </div>
                 </div>
            <div>
                <div className="bold">Conclusion:</div>
                <div>
                    Now that you have a better understing React Hooks and Redux, hopefully you
                    have a new way to manage your state. If you would like to reach me please do so here:

                </div>
            </div>
            <div>
                <div>React</div>
                <div>React Hook</div>
                <div>Reactjs</div>
                <div>Redux</div>
                <div>React Redux</div>
            </div>
            <div></div>
            
            
        </div>
    )
}

export default Third