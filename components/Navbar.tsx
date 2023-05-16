import styles from './Navbar.module.css'
import ActiveLink from './ActiveLink';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];
 
const Navbar = () => {

  return (
   
    <nav className={styles['menu-container']} >

      {menuItems.map(
      (item) => 
      <ActiveLink key={item.text}text={item.text} href={item.href}/>)}

    </nav>
  )
}

export default Navbar
