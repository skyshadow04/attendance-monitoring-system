'use client'

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Homepage', href: '/' },
    { name: 'Login', href: '/login' },
    { name: 'Register', href: '/register' },
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact-us' }
];

export default function NavBarLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        'flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-neutral-300 hover:text-emerald-900',
                        {
                            'bg-emerald-900 text-white font-bold': pathname === link.href,
                        }
                    )}
                >
                    {link.name}
                </Link>
            ))}
        </>
    );
}
