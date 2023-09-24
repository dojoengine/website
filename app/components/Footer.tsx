import Link from "next/link";
import { SocialLinks } from "./SocialLinks";

// const docUrl = "https://book.dojoengine.org/";
// const mediaKitUrl = "https://drive.google.com/drive/folders/1f8Gry_K9_C3D3Hv6DTjand8pbQN4GMKE";

const footer_links = {
  dojo: [
    {
      name: "Code",
      url: "https://github.com/dojoengine/dojo",
      external: true,
    },
    {
      name: "Documentation",
      url: "https://book.dojoengine.org/",
      external: true,
    },

    {
      name: "Careers",
      url: "/contact",
    },
  ],
  tech: [
    {
      name: "Sozo",
      url: "/",
    },
    {
      name: "Torii",
      url: "/",
    },
    {
      name: "World Explorer",
      url: "/",
    },
    {
      name: "Cartridge",
      url: "https://cartridge.gg",
      external: true,
    },
  ],
};

export const Footer = () => {
  return (
    <footer className="footer bg-dojo-blue-600 ">
      <div className="container py-12 px-6 grid-cols-4 grid max-w-5xl mx-auto ">
        <div>
          <h6 className="uppercase mb-4 font-bold opacity-50">Dojo</h6>
          <div className="flex flex-col items-start space-y-2">
            {footer_links.dojo.map((link, index) => (
              <FooterLink link={link} index={index} />
            ))}
          </div>
        </div>
        <div>
          <h6 className="uppercase mb-4 font-bold opacity-50">Technology</h6>
          <div className="flex flex-col  items-start  space-y-2">
            {footer_links.tech.map((link, index) => (
              <FooterLink link={link} index={index} />
            ))}
          </div>
        </div>
        <div>
          {/*
                    <h6 className="uppercase mb-4">Social</h6>
                    <div className="flex flex-col space-y-2">
                        {footer_links.social.map((link, index) => <FooterLink link={link} index={index} />)}
                    </div>*/}
        </div>
        <div className="flex items-end justify-end space-x-2 ">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ link, index }) => {
  return (
    <Link href={link.url} key={index} target={link.external ? "_blank" : ""}>
      {link.name}
    </Link>
  );
};
