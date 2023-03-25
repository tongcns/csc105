import Card from "./Card";

function List() {
    const person = [ 
    {Name:"John Doe", job:"Engineer", hobby: "Listen to music"},
    {Name:"John Doe", job:"Engineer", hobby: "Listen to music"},
    {Name:"John Smith", job:"Programmer", hobby: "Running"},
    {Name:"John Smith", job:"Programmer", hobby: "Running"},
];
    return (
       <>
       {person.map((e) => {
        return <Card name={e.Name} job={e.job} hobby={e.hobby}></Card>
       }
       )}
       </>
    )
}
export default List;