import './style/Pricing.scss';

export default function Pricing() {
    return (
        <section className='pricing wrapper' id='pricing'>
            <h2>Pricing</h2>
            <div className="pricing-cards">
                <div className="pricing-card-1">
                    <h3>Starter</h3>
                    <p className='pricing-card-subtitle'>Perfect for small personal projects or landing pages.</p>
                    <ul>
                        <li>1-page custom website</li>
                        <li>Responsive design</li>
                        <li>Contact form integration</li>
                        <li>Basic SEO setup</li>
                        <li>Delivery: ~5 days</li>
                    </ul>
                    <p>Price: €200–€300</p>


                </div>
                <div className="pricing-card-2">
                    <h3>Professional</h3>
                    <p className='pricing-card-subtitle'>Great for businesses, portfolios, or product sites.</p>
                    <ul>
                        <li>Up to 5 pages (Home, About, Services, etc.)</li>
                        <li>Custom design & layout</li>
                        <li>Optimized for mobile</li>
                        <li>Contact form + social links</li>
                        <li>Light animations or effects</li>
                        <li>Delivery: ~10–14 days</li>
                    </ul>
                    <p>Price: €500–€700</p>
                </div>
                <div className="pricing-card-3">
                    <h3>Premium</h3>
                    <p className='pricing-card-subtitle'>Best for larger or more custom projects.</p>
                    <ul>
                        <li>6+ pages or dynamic features (e.g. blog, gallery)</li>
                        <li>CMS integration (WordPress or custom)</li>
                        <li>Advanced animations or interactions</li>
                        <li>Ongoing support (1 month)</li>
                        <li>Delivery: ~3–4 weeks</li>
                    </ul>
                    <p>Price: Starting from €900+</p>

                </div>
            </div>

            <div className="pricing-addons">
                <p>Optional add-ons: </p>
                <hr />
                <div>
                <li>SEO optimization - €80</li>
                <li>Multi-language support  - €150</li>
                <li>Maintenance & suppprt - from €50 / month</li>
                </div>


            </div>

        </section>
    )
}