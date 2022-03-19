const cards = [
    {
        title: "Konsultacja online",
        text: "30 min.",
        price: 60,
        img: "../"
    },
    {
        title: "Plan zywieniowy",
        text: "ok. 35 przepisów",
        price: 250,
        img: "../"
    },
    {
        title: "Trening personalny",
        text: "1 godz.",
        price: 100,
        img: ""
    }
]

const Cards = () => {
    return ( <>
        {cards.map(card => (
            <div>CHUJ</div>
        ))}
    </> );
}
 
export default Cards
