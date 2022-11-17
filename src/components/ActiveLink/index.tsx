import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ActiveLink extends LinkProps {
  activeClassName: string
}

export function ActiveLink ({href, activeClassName, ...props}) {
  const { asPath } = useRouter();

  const className = asPath === href ? activeClassName : '';

  return (
    <Link href={href} {...props} className={className}></Link>
  )
}