import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'

function Header() {
  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
      <div className='mb-[100px]'></div>
    </header>
  )
}

export default Header
