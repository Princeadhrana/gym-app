import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          At Evogym, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, Medical & lifestyle care hassle-free.#BeBetterEveryDay
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
           
          <h4 className="font-bold">Links</h4>
          <p className="my-5"><a href="https://www.facebook.com/gaurav.choudhary.7739"  target="_blank">Facebook</a></p>
          <p className="my-5"><a href="https://www.instagram.com/gaurav.adhrana/"  target="_blank">Instagram</a></p>
          <p className="my-5"><a href="https://github.com/Princeadhrana"  target="_blank">Github</a></p>
          
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Gaurav Chaudhary</p>
          <p>+91-8881684734</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
