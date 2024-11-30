

function UserItem({ user, onDelete }) { 
    return (
        <div>
            <img src={user.avatar} alt="card-img-top"  />
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(user)}></button>
        </div>
    )
}

export default UserItem;