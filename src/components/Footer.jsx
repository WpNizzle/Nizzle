function Footer(){
    return(
        <section>
           
          <footer className="bg-teal-800 text-gray-200 lg:text-left">
            
            <div className="mx-6 py-10 text-center md:text-left">
              <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              
                <div className="">
                  <h6
                    className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start hover:text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-3 h-4 w-4">
                      <path
                        d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                    </svg>
                    Wp Nizzle
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>
                
                <div className="">
                  <h6
                    className="mb-4 flex justify-center font-semibold uppercase md:justify-start hover:text-blue-500">
                    Products & Partners
                  </h6>
                  <p className="mb-4">
                    <a href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500"
                      >Wordpress Plugins</a
                    >
                  </p>
                  <p className="mb-4">
                    <a href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500"
                      >Website Templates</a
                    >
                  </p>
                  <p className="mb-4">
                    <a href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500"
                      >Landing Pages</a
                    >
                  </p>
                  <p>
                    <a href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500"
                      >Marketing Templates</a
                    >
                  </p>
                </div>
                
                <div className="">
                  <h6
                    className="mb-4 flex justify-center font-semibold uppercase md:justify-start hover:text-blue-500">
                    Company
                  </h6>
                  <p className="mb-4">
                    <a href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500"
                      >About Us</a
                    >
                  </p>
                  <p className="mb-4">
                    <a href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500"
                      >Blogs</a
                    >
                  </p>
                  <p className="mb-4">
                    <a href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500"
                      >Contact Us</a
                    >
                  </p>
                  <p>
                    <a href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500"
                      >Made with WpFrenzy</a
                    >
                  </p>
                </div>
                
                <div>
                  <h6
                    className="mb-4 flex justify-center font-semibold uppercase md:justify-start">          
                    <a href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500"
                      >Support</a
                    >
                  </h6>
                  <p className="mb-4 flex items-center justify-center md:justify-start">
                    <a href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500"
                        >Help Center</a
                      >
                  </p>
                  <p className="mb-4 flex items-center justify-center md:justify-start">
                    <a href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500"
                        >Report Spam</a
                      >
                  </p>
                  <p className="mb-4 flex items-center justify-center md:justify-start">
                    <a href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500"
                        >Refund Policy</a
                    >
                  </p>
                  <p className="flex items-center justify-center md:justify-start">
                    <a href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500"
                        >Privacy Policy</a
                    >
                  </p>
                </div>
              </div>
            </div>
            <hr/>
            <div className="p-6 text-center">
              <span>© 2023 Copyright:</span>
              <a
                className="font-semibold text-neutral-600 dark:text-neutral-400"
                href=""
                > All rights reserved</a
              >
            </div>
          </footer>
        </section>
    )
}

export default Footer;