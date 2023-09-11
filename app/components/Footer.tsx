import Link from "next/link"

const footer_links = {
    tech: [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'About',
            url: '/about'
        },
        {
            name: 'Contact',
            url: '/contact'
        }
    ],
    dojo: [
        {
            name: 'Core',
            url: '/'
        },
        {
            name: 'Book',
            url: '/about'
        },
        {
            name: 'Packages',
            url: '/contact'
        }
    ],
    social: [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'About',
            url: '/about'
        },
        {
            name: 'Contact',
            url: '/contact'
        }
    ]
}

export const Footer = () => {
    return (
        <footer className="footer bg-dojo-blue-600">
            <div className="container p-10 mx-auto grid-cols-4 grid ">
                <div>
                    <h6 className="uppercase mb-4">Dojo</h6>
                    <div className="flex flex-col space-y-2">
                        {footer_links.tech.map((link, index) => <Link href={link.url} key={index}>{link.name}</Link>)}
                    </div>
                </div>
                <div>
                    <h6 className="uppercase mb-4">Technology</h6>
                    <div className="flex flex-col space-y-2">
                        {footer_links.tech.map((link, index) => <Link href={link.url} key={index}>{link.name}</Link>)}
                    </div>
                </div>
                <div>
                    <h6 className="uppercase mb-4">Social</h6>
                    <div className="flex flex-col space-y-2">
                        {footer_links.tech.map((link, index) => <Link href={link.url} key={index}>{link.name}</Link>)}
                    </div>
                </div>
            </div>
        </footer>
    )
}