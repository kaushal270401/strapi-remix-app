const Card = (props) => {
    const { Account_Number, Account_Name, Account_Balance } = props.data
    console.log(Account_Number);
    return (
        <div className="card">
            <h1>{Account_Number}</h1>
            <p>{Account_Name}</p>
            <p>{Account_Balance}</p>
        </div>
    );
}

export default Card;