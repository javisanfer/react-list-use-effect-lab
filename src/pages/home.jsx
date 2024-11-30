import { PageLayout } from "../components/layouts";
import UserList from "../components/users/user-list/user-list";
import { useState } from "react";

function Home() {
    const [filter, setFilter] = useState("");

    const handleFilterChange = (e) => {
        setFilter(e.target.value.toLowerCase());
    };

    return (
        <PageLayout>
            <form>
                <input 
                    type="text"
                    value={filter}
                    placeholder="User name"
                    onChange={handleFilterChange}
                />
            </form>
            <UserList filter={filter}/>
        </PageLayout>
    );
}

export default Home;