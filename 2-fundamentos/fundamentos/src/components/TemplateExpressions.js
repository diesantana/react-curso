const TemplateExressions = () => {
    const name = "Bob";

    const data = {
        name: name,
        age: 30,
    };
    return(
        <div>
            <p>Olá {name}!</p>
            <p>{data.name} eu vi que você tem {data.age} anos.</p>
        </div>
    );
};

export default TemplateExressions;