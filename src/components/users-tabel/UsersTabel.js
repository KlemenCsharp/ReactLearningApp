function UsersTabel() {
    function getUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res);
            return res.json();
        }).then(data => {
            console.log(data)
        });
    }

    return (
        <div>
            <h1>Users tabel</h1>
            <button onClick={getUsers}>Get Users</button>
        </div>
    )
}

export default UsersTabel;