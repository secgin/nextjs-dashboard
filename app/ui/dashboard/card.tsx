export default function Card({title, value}: {title: string, value: string}) {
    return (
        <div className="rounded-xl bg-gray-50 p-4">
            <i className="i-md-icon-${type}"></i>
            <h1>{title}</h1>
            <p>{value}</p>  
        </div>
    );
}