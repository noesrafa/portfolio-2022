import "./cards.css";

export default function Card(Props) {
  return (
    // <div className="single-card">
    //     <img src={Props.icon} className={ Props.active && 'active' } alt="icon" />
    //     <div className="single-text">
    //         <h3>{Props.title}</h3>
    //         <p>{Props.description}</p>
    //     </div>
    //     <div className={`single-tools ${ Props.active && 'tools-active' }`}>
    //         { Props.tools.map (item => (
    //             <p key={crypto.randomUUID()} className={'text-sm'}>{item}</p>
    //         ))}
    //     </div>
    // </div>
    <div className="single-card">
      <img src={Props.icon} className={Props.active && "active"} alt="icon" />
      <div className="single-text">
        <h3>{Props.title}</h3>
        <p>{Props.description}</p>
      </div>
      <div className={`single-tools ${Props.active && "tools-active"}`}>
        {Props.tools.map((item) => (
          <p key={crypto.randomUUID()} className={"text-sm"}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
