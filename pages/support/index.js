import Link from 'next/link'

// Components 
import assets from '../../global/assets';

function Support() {
    return (
        <div className="app sans-serif">
            <div class="splash flex flex-grow flex-col justify-center items-center">
                <div class="flex-col justify-center items-center text-center">
                    <div class="flex-row justify-center items-center text-center">
                        <a href="/home">
                            <img class="m-auto" style={{ height: 140, }} src={assets.iconAppWhite} />
                        </a>
                    </div>
                    <div class="pt-8">
                        <span class="text-4xl">
                            need help?
                        </span>
                        <a href='mailto:$supportEmail?subject=Syphon%20App%20Help&body=Leave%20your%20feedback%20or%20question%20here' class="text-4xl mx-2" style={{ cursor: 'pointer', letterSpacing: '0.5', textDecorationLine: 'underline' }}>email us</a>
                        <div>at support@syphon.org</div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Support