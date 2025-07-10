

export default function PortfolioItem({
    id,
    image,
    name,
    stack,
    description,
    livePreview,
    github,
}) {

    const fullId = 'portfolio-item-' + id;
    return (
        <div key={id} className="portfolio-item" id={fullId}>
            <div className="portfolio-item-image">
                <img src={image} alt="" />
            </div>
            <div className="portfolio-item-name">
                <h3>{name}</h3>
            </div>
            <div className="portfolio-item-tech-stack">
                {stack.map((item, i) => (
                    <span key={i}>{item}</span>
                ))}
            </div>
            <div className="portfolio-item-description">
                {description}
            </div>
            <div className="portfolio-item-btns">
                {
                    livePreview ?
                        <a href={livePreview}><button>Live Preview</button></a> : null
                }
                {
                    github ? <button>{github}</button> : null
                }

            </div>
        </div>
    );
}
