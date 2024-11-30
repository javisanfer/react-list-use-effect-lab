import { useEffect, useState } from "react";
import UserItem from "../user-item/user-item";
import usersData from "../../../data/users.json"

function UserList({ filter }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(usersData);
    },[])

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(filter)
      );

    const handleUserDeletion = (user) => {
        const undeletedUsers = users.filter((e) => e.id !== user.id);
        setUsers(undeletedUsers);
    }

    return(
        <div className={`d-flex flex-wrap gap-3`}>
            {filteredUsers.map((user) => (
                <UserItem key={user.id} user={user} onDelete={handleUserDeletion}/>
            ))} 
        </div>
    );
}

export default UserList;