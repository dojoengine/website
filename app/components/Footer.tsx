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
      url: "/",
    },
  ],
  tech: [
    {
      name: "Katana",
      url: "https://book.dojoengine.org/toolchain/katana/overview.html",
      external: true,
    },
    {
      name: "Sozo",
      url: "https://book.dojoengine.org/toolchain/sozo/overview.html",
      external: true,
    },
    {
      name: "Torii",
      url: "https://book.dojoengine.org/toolchain/torii/overview.html",
      external: true,
    },
    {
      name: "World Explorer",
      url: "https://www.worlds.dev/",
      external: true,
    },
  ],
};

export const Footer = () => {
  return (
    <footer className="footer bg-dojo-blue-900 shadow-2xl shadow-dojo-blue-400 ">
      <div className="container py-12 px-6 grid-cols-4 grid max-w-5xl mx-auto ">
        <div>
          <h6 className="uppercase mb-4 font-bold opacity-50 text-dojo-blue-500">Dojo</h6>
          <div className="flex flex-col items-start space-y-2">
            {footer_links.dojo.map((link, index) => (
              <FooterLink link={link} key={index} />
            ))}
          </div>
        </div>
        <div>
          <h6 className="uppercase mb-4 font-bold opacity-50 text-dojo-blue-500">Technology</h6>
          <div className="flex flex-col items-start space-y-2">
            {footer_links.tech.map((link, index) => (
              <FooterLink link={link} key={index} />
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

const FooterLink = ({ link }: { link: { name: string; url: string; external?: boolean } }) => {
  return (
    <Link href={link.url} target={link.external ? "_blank" : ""} className="hover:text-dojo-red-400">
      {link.name}
    </Link>
  );
};
