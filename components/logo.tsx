import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = ({ ...styles }) => {
  return (
    <Link href="/">
      <a style={{ position: 'relative', width: '200px', height: '75px', left: '-5px' }}>
        <Image src="/ak-logo.png" alt="me" layout="fill" objectFit="contain" />
      </a>
    </Link>
  )
}

export default Logo
