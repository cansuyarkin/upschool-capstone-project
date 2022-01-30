import Search from "../../helperComponents/Search";
import SearchBar from "../../helperComponents/SearchBar";

function Home() {

    return <>
    <h1>Home</h1>
    <div className="container">
        <SearchBar />
        <Search />
    </div>
    </>
    
};

export default Home;