function Newsletter() {
    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <div className="max-w-lg mx-auto text-center">
                    <h3 className="text-xl font-medium mb-4">Join Our Weekly Newsletter</h3>
                    <h1 className="text-2xl font-normal mb-4">Get new products, freebies, and news to your inbox.</h1>
                    <div className="flex flex-col justify-center md:flex-row">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="rounded-md px-4 py-2 mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-6 py-2 w-full md:w-auto"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Newsletter;
