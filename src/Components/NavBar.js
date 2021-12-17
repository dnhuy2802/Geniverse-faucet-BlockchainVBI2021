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
        <nav className="navbar is-fixed-top is-dark" role="navigation" aria-label="Main navigation">
            <div class="navbar-brand">
                <p className="is-size-4-mobile is-size-2 has-text-weight-bold ml-3"> SAVE THE KIDS</p>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            {/* Items in navbar */}
            <div id="navbarMain" className="navbar-menu ">
                <div class="navbar-end">
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
                            <FontAwesomeIcon icon={item.icon} className="mr-2"></FontAwesomeIcon>
                            {item.name}
                        </a>
                    ))}
                    <a className="navbar-item pr-3">
                        <FontAwesomeIcon icon={faUserCircle} size="2x"></FontAwesomeIcon>
                    </a>
                </div>
            </div>

        </nav>
    )
}