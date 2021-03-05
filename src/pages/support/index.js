// Components
import assets from '../../global/assets';

export default () => {
  return (
    <div className="app sans-serif">
      <div className="splash flex flex-grow flex-col justify-center items-center">
        <div className="flex-col justify-center items-center text-center">
          <div className="flex-row justify-center items-center text-center">
            <a href="/home">
              <img className="m-auto" style={{ height: 140 }} src={assets.appIconWhite} />
            </a>
          </div>
          <div className="pt-8">
            <span className="text-4xl">
              need help?
            </span>
            <a href="mailto:support@syphon.org?subject=Syphon%20Support&body=Leave%20your%20feedback%20or%20question%20here" className="text-4xl mx-2" style={{ cursor: 'pointer', letterSpacing: '0.5', textDecorationLine: 'underline' }}>email us</a>
            <div>at support@syphon.org</div>
          </div>
        </div>
      </div>
    </div>
  );
};
