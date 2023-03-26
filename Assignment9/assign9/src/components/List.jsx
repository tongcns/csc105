import Card from "./Card";

function List() {
    const person = [ 
    {name:"John Doe", job:"Engineer", hobby: "Listen to music"},
    {name:"John Doe", job:"Engineer", hobby: "Listen to music"},
    {name:"John Smith", job:"Programmer", hobby: "Running"},
    {name:"John Smith", job:"Programmer", hobby: "Running"},
];
    return (
       <>
       {person.map((e) => {
        return <Card name={e.name} job={e.job} hobby={e.hobby}></Card>
       }
       )}
       </>
    )
}
export default List;
