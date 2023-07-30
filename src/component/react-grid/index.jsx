import GridBox from "./grid-box";

const mappingData  = Array(50).fill({}).map((_, i) => ({id: Math.random() * 100, number: i}))
const ReactLayoutGrid = () => {
    return (
        <div className="grid-layout">
           {
            mappingData.map((item) => (
                <GridBox key={item.id} number={item.number} />
            ))
           } 
        </div>
    )
}
export default ReactLayoutGrid;
