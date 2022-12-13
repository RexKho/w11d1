import { useState, useEffect } from 'react'

function Message({ size }) {
  const [msgSize, setMsgSize] = useState('');
  useEffect(() => {
    console.log('Message', size);
    let cname = '';
    switch (size) {
      case 'm':
        cname = 'medium';
        break;
      case 'l':
        cname = 'large';
        break;
      case 'xl':
        cname = 'xlarge';
        break;
      default:
        cname = 'small';
        break;
    }
    console.log('cname', cname);
    setMsgSize(cname);
  }, [size]);

  return (
    
    <div className={`message ${msgSize}`}>
      (Oh my! Your bird is naked!)
    </div>
  );
};

export default Message;