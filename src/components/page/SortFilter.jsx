import { useParams } from "react-router-dom";

function SortFilter() {

    const type = useParams();

    console.log(type);

    return <>
    <h1>Sort-Filter</h1>
    
    </>
    
};

export default SortFilter;