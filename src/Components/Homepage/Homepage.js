import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import './Homepage.css'
export default function HomePage() {
    return (
        <div className="Homepage">
            <h1 className='Title has-text-weight-bold has-text-centered is-size-2-tablet'>CHARITY PROGRAM</h1>
            <div className='balanceContainer'>
                <div className='Container is-flex is-flex-direction-column is-align-items-center ' >
                    <div className='balance is-flex mt-5 is-justify-content-space-between'>
                        <p className='has-text-weight-bold ml-5 my-3 is-size-6-mobile'>BALANCE:</p>
                        <FontAwesomeIcon icon={faEthereum} className=' mr-5 my-4' size='lg'></FontAwesomeIcon>
                    </div>
                    <div className='buttonGroup is-flex is-justify-content-space-between my-4'>
                        <button class="button is-danger">CONNECT WALLET</button>
                        <button class="button is-danger">DEPOSIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}