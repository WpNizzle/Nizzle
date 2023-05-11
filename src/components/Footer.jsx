function Footer(){
    return(
        <section>
           
<footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
  
  <div className="mx-6 py-10 text-center md:text-left">
    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    
      <div className="">
        <h6
          className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-4 w-4">
            <path
              d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
          </svg>
          Wp Frenzy
        </h6>
        <p>
          Here you can use rows and columns to organize your footer
          content. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit.
        </p>
      </div>
      
      <div className="">
        <h6
          className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Products & Partners
        </h6>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Wordpress Plugins</a
          >
        </p>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Website Templates</a
          >
        </p>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Landing Pages</a
          >
        </p>
        <p>
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Noptin</a
          >
        </p>
      </div>
      
      <div className="">
        <h6
          className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Company
        </h6>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >About Us</a
          >
        </p>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Blogs</a
          >
        </p>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Contact Us</a
          >
        </p>
        <p>
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Made with WpFrenzy</a
          >
        </p>
      </div>
      
      <div>
        <h6
          className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Support
        </h6>
        <p className="mb-4 flex items-center justify-center md:justify-start">
            Help center
        </p>
        <p className="mb-4 flex items-center justify-center md:justify-start">
            Report Spam
        </p>
        <p className="mb-4 flex items-center justify-center md:justify-start">
            Refund Policy
        </p>
        <p className="flex items-center justify-center md:justify-start">
           Privacy Policy
        </p>
      </div>
    </div>
  </div>
  <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
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