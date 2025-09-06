import React from 'react';

const GoogleMap: React.FC = () => {
  return (
        <div className="w-[90%] h-[450px]">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1639.859500460972!2d-58.60843646107585!3d-34.71226679322891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc685f358b839%3A0x209ce62420f4cbcb!2sVentura%20Yanzi%201631%2C%20B1755GCA%20Rafael%20Castillo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1756944764360!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
        />
        </div>
  );
};

export default GoogleMap;