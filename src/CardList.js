import Card from "./Card"
const cards = [
    {
        title : "BASIC",
        text : "Perfect For Beginners",
        price : "99"
    },
    {
        title : "STANDARD",
        text : "Perfect For Personnal",
        price : "149"
    },
    {
        title : "PREMIUM",
        text : "Perfect For Business",
        price : "199"
    }
]
export default function CardList(){
    return <div className="div">
        {cards.map(card => <Card title = {card.title} text = {card.text} price = {card.price}/>)}
    </div>
    
}