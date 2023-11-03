import Card from "./Card";

function Tours({tours, removeTour}){
    return(
        <div className="container">
            <div>
                <h2 className="title">Plan With Abhishek</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}
export default Tours;

// Note :- Whenever use map, always pass a key which is a unique identifier to avoid error. If no unique identifier is present, then pass the index in key.   List and Keys