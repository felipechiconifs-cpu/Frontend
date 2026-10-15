import './musica.css'

export function Musica() {

    return (
        <div className="page-content">
            <div className="page-header">
                <h1>Pagina de música</h1>
            </div>
        </div>

        <form className="search-form">
            <input type="text" placeholder="Buscar música..." />
        </form>
    )

}
