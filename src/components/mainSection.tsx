import React from 'react'
import styles from '@/styles/mainSection.module.scss'

const MainSection = () => {
    return(
        <div>
            <div>
                cow on icecream img
            </div>
            <div className='tagline'>
                <p>

                    create for <br /> social good
                </p>
            </div>
            <div className='event'>
                <p>

                    HACKDAVIS <br />
                    location
                </p>
            </div>
            <div className='main-buttons'>
                <button>
                    Register Now
                </button>
                <button>
                    Sponsor
                </button>
            </div>
            <div className='starter-pack-link'>
                <p>
                    get started with Starter Pack
                </p>
            </div>
        </div>
    )
}

export default MainSection