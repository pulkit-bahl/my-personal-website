"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link className="mr-6 flex items-center space-x-2" href="/">
          <span className="font-bold inline-block">Pulkit Bahl</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium ml-auto">
          <Link href="#about">About</Link>
          <Link href="#work">Work</Link>
          <Link href="#education">Education</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#awards">Awards</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

