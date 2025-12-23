export default function Card({title , text , price}){
    return(

                <div className="card">
                    <h2 className="titre">{title}</h2>
                    <p className="text2">{text}</p>
                    <h2><sup className="sup-sub">$</sup>{price}<sub className="sup-sub">/months</sub></h2>
                    <button className={title == "STANDARD" ? "button2" : "button1"}>Add to cart</button>
                    <p className="text">120/months when you renew</p>
                    <hr/>
                    <p><b>✔ lorem lorem lorem</b></p>
                    <p><b>✔ lorem lorem lorem</b></p>
                    <p><b>✔ lorem lorem lorem</b></p>
                    <p><b>✔ lorem lorem lorem</b></p>
                    <select>
                        <option>See all features</option>
                    </select>
                </div>

    )
}