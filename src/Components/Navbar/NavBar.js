import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faPhone, faInfo, faUserCircle } from '@fortawesome/free-solid-svg-icons'
const navigation = [
    { name: 'Home', href: '#Home', current: true, icon: faHome },
    { name: 'About', href: '#About', current: true, icon: faInfo },
    { name: 'Contact', href: '#Contact', current: true, icon: faPhone },

]
function classNames(...classes) {
    return classes.filter(Boolean).join('')
}
export default function Navbar() {
    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="Main navigation">
            <div class="navbar-brand">
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            {/* Items in navbar */}
            <div id="navbarMain" className="navbar-menu">
                <div class="navbar-start ml-5 mt-2">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current ? 'navbar-item ' : 'navbar-item',
                                'px-3 py-2 has-text-weight-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            <FontAwesomeIcon icon={item.icon} className={classNames(
                                item.current ? 'iconActive ' : 'iconDeactive',
                                'mr-2'
                            )}></FontAwesomeIcon>
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="navbar-end">
                    <a className="navbar-item pr-3 mt-2">
                        <FontAwesomeIcon icon={faUserCircle} size="2x"></FontAwesomeIcon>
                    </a>
                </div>
            </div>

        </nav>
    )
}