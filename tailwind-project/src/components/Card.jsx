function Card(props) {
  console.log(props);
  return (
    <div className="space-y-5">
      <div className="p-3 bg-white shadow rounded-lg">
        <h3 className="text-xs border-b">font-sans</h3>
        <p className="font-sans">
       {props.title}
        </p>
      </div>

      <div className="p-3 bg-white shadow rounded-lg">
        <h3 className="text-xs border-b">font-serif</h3>
        <p className="font-serif">
         {props.title}.
        </p>
      </div>

      <div className="p-3 bg-white shadow rounded-lg">
        <h3 className="text-xs border-b">font-mono</h3>
        <p className="font-mono">
         {props.title}
        </p>
      </div>
    </div>   
  );
}

export default Card;
