import MarketPlaceProduct from '../components/MarketPlaceProduct';

function MarketPlace() {
    const wpPluginsLinks = [
        { label: 'Kalenda', url: '#' },
        { label: 'Followink', url: '#' },
        { label: 'Oopsie', url: '#' }
    ];

    const landingPagesLinks = [
        { label: 'Education Landing Template', url: '#' },
        { label: 'Health Landing Template', url: '#' },
        { label: 'Fashion Landing Template', url: '#' }
    ];

    const htmlTemplatesLinks = [
        { label: 'Designers Templates', url: '#' },
        { label: 'Photography Templates', url: '#' },
        { label: 'Bloggers Templates', url: '#' }
    ];

    const websiteTemplatesLinks = [
        { label: 'ECommerce Website Template', url: '#' },
        { label: 'Portfolio Website Template', url: '#' },
        { label: 'Writers Website Templates', url: '#' }
    ];

    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h3 className="mb-4 mt-0 text-xl font-medium leading-tight text-center">
                    Wp Frenzy MarketPlace Products
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <MarketPlaceProduct title="Wp Plugins" links={wpPluginsLinks} />
                    <MarketPlaceProduct title="Landing Pages" links={landingPagesLinks} />
                    <MarketPlaceProduct title="HTML Templates" links={htmlTemplatesLinks} />
                    <MarketPlaceProduct title="Website Templates" links={websiteTemplatesLinks} />
                </div>
            </div>
        </section>
    );
}

export default MarketPlace;
