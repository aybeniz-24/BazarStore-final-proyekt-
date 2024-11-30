import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'
import HeaderMenu from './HeaderMenu'

function Header() {
  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
      <HeaderMenu />
      <div className='mb-[100px]'></div>
    </header>
  )
}

export default Header
