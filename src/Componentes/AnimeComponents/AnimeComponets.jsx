

function AnimeComponets() {
    const [animeName, setAnimeName] = useState("one punch");
    const [animeDigitando, setAnimeDigitando] = useState("one punch");

    const hadleInputChange = (e) => {
        setAnimeDigitando(e, targe, value);

    };

    function BuscarOAnime() {
        setAnimeName(animeDigitando);
    }

    return (
        <div>
            <input type="text" placehouder="Coloque o nome do anime" value={animeDigitando} onChange={headleInputChange}></input>
            {Array.isArray(mockAnime) ? (
                <div>
                    {mockAnime.map((a) => (
                        <h1 key={a.id}>{a.title}</h1>
                    ))}
                </div>
            ) : (mockAnime && <div> Sem nenhum anime </div>)}

        </div>
    )
}