import profile from '../images/profile.png'
export default function Info(){
    return(
        <div className="">
            <img className="Profile--Image" src={profile}></img>
            <div className="Info--Background">
                <h2 className="Info--Name">Micheal Jordan</h2>
                <h3 className="Info--Job">NBA Basketball Player</h3>
                <h4 className="Info--Site">Mc.Jordan</h4>
            </div>
            <div className="Button--Container">
                <button className="Button-White">
                    Email
                </button>
                <button className="Button-Blue">
                    LinkdIn
                </button>
            </div>
        </div>
    )
}