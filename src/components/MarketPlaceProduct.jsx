import PropTypes from 'prop-types';

function MarketPlaceProduct({ title, links }) {
    return (
        <section>
            <div className="mb-6">
                <h5 className="mb-2.5 font-bold uppercase text-neutral-800">
                    {title}
                </h5>

                <ul className="mb-0 list-none">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} className="text-neutral-800">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

MarketPlaceProduct.propTypes = {
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired
};

export default MarketPlaceProduct;
