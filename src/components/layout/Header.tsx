'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import HomeLinkLogo from './HomeLinkLogo';
import ToggleBtn from './navmenu/ToggleBtn';
import FullScreenNav from './navmenu/FullScreenNav';
import CloseOnClick from './navmenu/CloseOnClick';

const links = [
	{ title: 'projects', href: '/projects' },
	{ title: 'about', href: '/about' },
	{ title: 'process', href: '/process' },
	{ title: 'sustainability', href: '/sustainability' },
	{ title: 'people', href: '/people' },
	{ title: 'newsletter', href: '/newsletter' },
	{ title: 'contact', href: '/contact' },
];

const Header = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const [scrollDir, setScrollDir] = useState<number>(2);

	useEffect(() => {
		menuOpen
			? document.documentElement.setAttribute('data-scroll', 'n')
			: document.documentElement.setAttribute('data-scroll', 'y');
	}, [menuOpen]);

	useEffect(() => {
		const thresh = 2;
		let lastY: number = window.scrollY;
		let ticking: boolean = false;

		const updateDir = () => {
			const y: number = window.scrollY;
			const initial: boolean = lastY < 8;

			if (Math.abs(y - lastY) < thresh) {
				ticking = false;
				return;
			}
			const dir: number = initial ? 2 : y > lastY ? 0 : 1;
			setScrollDir(dir);
			lastY = y > 0 ? y : 0;
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateDir);
				ticking = true;
			}
		};

		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [scrollDir]);

	return (
		<>
			<header
				className={`fixed z-50 left-0 right-0 top-0 bottom-auto transition-[transform] bg-head-overlay duration-300 ease-io-head bg-scroll ${
					menuOpen
						? ' translate-y-0'
						: scrollDir > 0
						? ' translate-y-0'
						: ' -translate-y-full'
				} `}>
				<div
					className={`relative px-4 md:px-6 h-head transition-[background-color] ease-linear duration-150  ${
						scrollDir < 2 ? 'delay-500 bg-stone-900 ' : ' bg-transparent'
					}`}>
					<div className='flex w-full h-full flex-row justify-between xxl:grid xxl:grid-cols-12 xxl:grid-rows-1'>
						<div className='flex items-center list-none relative xxl:col-start-1 xxl:col-end-3'>
							<HomeLinkLogo />
						</div>
						<ToggleBtn
							open={menuOpen}
							setOpen={setMenuOpen}
						/>
						<ul className='hidden xxl:col-start-3 xxl:col-end-7 xxl:flex xxl:items-center '>
							{links.slice(0, 5).map((link, index) => (
								<li
									key={index}
									className='me-6'>
									<Link
										className='link'
										href={link.href}>
										<span className='uppercase font-archivo tracking-wide text-sm font-light'>
											{link.title}
										</span>
									</Link>
								</li>
							))}
						</ul>
						<ul className='hidden xxl:col-start-9 xxl:col-end-13 xxl:flex xxl:items-center xxl:justify-self-end '>
							{links.slice(5, 7).map((link, index) => (
								<li
									className='me-6'
									key={index}>
									<Link
										className='link'
										href={link.href}>
										<span className='uppercase font-archivo tracking-wide text-sm  font-light'>
											{link.title}
										</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='block xxl:hidden'>
					<FullScreenNav
						setOpen={setMenuOpen}
						open={menuOpen}
					/>
				</div>
				<div className='block xxl:hidden'>
					<CloseOnClick
						setOpen={setMenuOpen}
						open={menuOpen}
					/>
				</div>
			</header>
		</>
	);
};

export default Header;
