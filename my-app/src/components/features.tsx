const Featured=()=>{
    const person={
        name:"" ,
        obj:[]
    }
    if(person.obj.length!==0){
        console.log("Person Object ",person.obj)
    }
    if(person.name){
        console.log("Person name ")
    }
    return(
        <>
            <div>
                List Of Featured Products
            </div>
        </>
    )
}
export default Featured