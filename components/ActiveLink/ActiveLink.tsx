"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from './ActiveLink.module.css'

export type ActiveLinkProps = {
	path: string
	text: string
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ path, text }) => {

	const pathName = usePathname()

	return (
 		<Link className={ `${ styles.link } ${ pathName !== path || styles['active-link'] }` } href={ path }>{ text }</Link>
	)
}

export default ActiveLink;
