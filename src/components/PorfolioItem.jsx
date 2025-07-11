export default function PortfolioItem({id, name, image, techStack, description, livePreview, github}) {
    return (
        <div className="portfolio-item" key={id}>
            <div className="portfolio-item-image">
                <img src={image} alt={name} />
            </div>
            <div className="portfolio-item-name">
                <h3>{name}</h3>
            </div>
            <div className="portfolio-item-tech-stack">
                {techStack.map((tech, index) => (
                    <span key={index}>{tech}</span>
                ))}
            </div>
            <p className="portfolio-item-description">{description}</p>
          <div className="portfolio-item-btns">
            {
                livePreview && 
                <a href={livePreview} target="_blank" rel="noopener">
                    <button>Live preview</button></a>
            }
                       {
                github && 
                <a href={github} target="_blank" rel="noopener">
                    <button>Check code</button></a>
            }
              </div>
        </div>

    )
}
