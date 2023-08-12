//useMemo
//return fn memoized value for performance optimization
function Memo(){
	const [ct,setct]=useState(60);
	const expensivect=useMemo(()=>{
	return count**2;
    },[ct])
return(
	<div>{ct}</div>
)
}
export default Memo;